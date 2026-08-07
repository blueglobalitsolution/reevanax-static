(function () {
  "use strict";

  var STEPS = [
    "Select Booking",
    "Time of Booking",
    "Details of Booking",
    "Confirm booking",
    "Done",
  ];

  var WEEKDAYS = [
    { id: 1, label: "Mon" },
    { id: 2, label: "Tue" },
    { id: 3, label: "Wed" },
    { id: 4, label: "Thu" },
    { id: 5, label: "Fri" },
  ];

  var STAFF = [{ id: "patient", name: "Patient", price: 0 }];

  var state = {
    step: 0,
    categories: [],
    categoryId: "",
    serviceId: "",
    staffId: "patient",
    availableFrom: "",
    days: { 1: true, 2: true, 3: true, 4: false, 5: false },
    timeFrom: "08:00",
    timeTo: "18:00",
    calMonth: null,
    selectedDate: null,
    selectedTime: "",
    details: {
      firstName: "",
      lastName: "",
      phone: "",
      cc: "+91",
      email: "",
      notes: "",
    },
    bookingId: "",
    transitioning: false,
  };

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function toISODate(d) {
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }

  function parseISO(s) {
    var p = s.split("-").map(Number);
    return new Date(p[0], p[1] - 1, p[2]);
  }

  function formatLongDate(d) {
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function formatShortDate(d) {
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  function formatTimeLabel(hhmm) {
    var parts = hhmm.split(":").map(Number);
    var h = parts[0];
    var m = parts[1];
    var ampm = h >= 12 ? "pm" : "am";
    var h12 = h % 12;
    if (h12 === 0) h12 = 12;
    return h12 + ":" + pad(m) + " " + ampm;
  }

  function timeOptions(startH, endH, stepMin) {
    var out = [];
    for (var mins = startH * 60; mins <= endH * 60; mins += stepMin) {
      out.push(pad(Math.floor(mins / 60)) + ":" + pad(mins % 60));
    }
    return out;
  }

  function currentCategory() {
    return state.categories.find(function (c) {
      return c.id === state.categoryId;
    });
  }

  function currentService() {
    var cat = currentCategory();
    if (!cat) return null;
    return cat.services.find(function (s) {
      return s.id === state.serviceId;
    });
  }

  function currentStaff() {
    return STAFF.find(function (s) {
      return s.id === state.staffId;
    });
  }

  function serviceLabel(svc) {
    if (!svc) return "";
    return svc.name + " ( " + (svc.durationMin || 15) + " min )";
  }

  function money(n) {
    return "₹" + Number(n || 0).toFixed(2);
  }

  function setError(msg) {
    var el = $("#rx-error");
    if (el) el.textContent = msg || "";
  }

  function phoneDisplay() {
    var p = (state.details.phone || "").trim();
    var cc = state.details.cc || "+91";
    return p ? cc + " " + p : "";
  }

  function buildShell(root) {
    root.innerHTML =
      '<div class="rx-steps" id="rx-step-labels"></div>' +
      '<div class="rx-progress" id="rx-progress"></div>' +
      '<p class="rx-error" id="rx-error" role="alert"></p>' +
      '<div class="rx-panel" data-step="0" id="rx-step-0"></div>' +
      '<div class="rx-panel" data-step="1" id="rx-step-1" hidden></div>' +
      '<div class="rx-panel" data-step="2" id="rx-step-2" hidden></div>' +
      '<div class="rx-panel" data-step="3" id="rx-step-3" hidden></div>' +
      '<div class="rx-panel" data-step="4" id="rx-step-4" hidden></div>';

    var labels = $("#rx-step-labels");
    var progress = $("#rx-progress");
    STEPS.forEach(function (name, i) {
      var lab = document.createElement("div");
      lab.className = "rx-step-label";
      lab.dataset.i = String(i);
      lab.textContent = i + 1 + ". " + name;
      labels.appendChild(lab);
      var bar = document.createElement("span");
      bar.dataset.i = String(i);
      progress.appendChild(bar);
    });
  }

  function updateChrome() {
    document.querySelectorAll("#rx-step-labels .rx-step-label").forEach(function (el) {
      var i = Number(el.dataset.i);
      el.classList.toggle("is-active", i === state.step);
      el.classList.toggle("is-done", i < state.step);
    });
    document.querySelectorAll("#rx-progress span").forEach(function (el) {
      var i = Number(el.dataset.i);
      el.classList.toggle("is-on", i <= state.step);
    });
  }

  function syncDayButtons() {
    document.querySelectorAll("#rx-days .rx-day").forEach(function (btn) {
      var day = Number(btn.dataset.day);
      var on = !!state.days[day];
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function fillServiceOptions() {
    var select = $("#rx-service");
    if (!select) return;
    var services = (currentCategory() && currentCategory().services) || [];
    if (!services.some(function (s) { return s.id === state.serviceId; })) {
      state.serviceId = services[0] ? services[0].id : "";
    }
    select.innerHTML = services
      .map(function (s) {
        return (
          '<option value="' +
          s.id +
          '"' +
          (s.id === state.serviceId ? " selected" : "") +
          ">" +
          serviceLabel(s) +
          "</option>"
        );
      })
      .join("");
  }

  function renderStep0() {
    var times = timeOptions(8, 20, 30);
    var catOpts = state.categories
      .map(function (c) {
        return (
          '<option value="' +
          c.id +
          '"' +
          (c.id === state.categoryId ? " selected" : "") +
          ">" +
          c.name +
          "</option>"
        );
      })
      .join("");

    var staffOpts = STAFF.map(function (s) {
      return (
        '<option value="' +
        s.id +
        '"' +
        (s.id === state.staffId ? " selected" : "") +
        ">" +
        s.name +
        " (" +
        money(s.price) +
        ")</option>"
      );
    }).join("");

    var dayBtns = WEEKDAYS.map(function (d) {
      var on = !!state.days[d.id];
      return (
        '<button type="button" class="rx-day' +
        (on ? " is-on" : "") +
        '" data-day="' +
        d.id +
        '" aria-pressed="' +
        (on ? "true" : "false") +
        '" title="' +
        d.label +
        '"><span class="rx-day-label">' +
        d.label +
        '</span><span class="rx-day-mark" aria-hidden="true">✓</span></button>'
      );
    }).join("");

    var fromOpts = times
      .map(function (t) {
        return (
          '<option value="' +
          t +
          '"' +
          (t === state.timeFrom ? " selected" : "") +
          ">" +
          formatTimeLabel(t) +
          "</option>"
        );
      })
      .join("");
    var toOpts = times
      .map(function (t) {
        return (
          '<option value="' +
          t +
          '"' +
          (t === state.timeTo ? " selected" : "") +
          ">" +
          formatTimeLabel(t) +
          "</option>"
        );
      })
      .join("");

    $("#rx-step-0").innerHTML =
      '<p class="rx-title">Please select service:</p>' +
      '<div class="rx-grid-3">' +
      '<div class="rx-field"><label>Category</label><select id="rx-category">' +
      catOpts +
      "</select></div>" +
      '<div class="rx-field"><label>Service</label><select id="rx-service"></select></div>' +
      '<div class="rx-field"><label>Employee</label><select id="rx-staff">' +
      staffOpts +
      "</select></div>" +
      "</div>" +
      '<div class="rx-avail">' +
      '<div class="rx-field"><label>I\'m available on or after</label><input type="date" id="rx-available-from" value="' +
      state.availableFrom +
      '" /></div>' +
      '<div class="rx-field"><label>Days of the week</label><div class="rx-days" id="rx-days">' +
      dayBtns +
      "</div></div>" +
      '<div class="rx-field"><label>Start from</label><select id="rx-time-from">' +
      fromOpts +
      "</select></div>" +
      '<div class="rx-field"><label>Finish by</label><select id="rx-time-to">' +
      toOpts +
      "</select></div>" +
      "</div>" +
      '<div class="rx-actions rx-end"><button type="button" class="rx-btn" id="rx-next-0">Next</button></div>';

    fillServiceOptions();

    $("#rx-category").addEventListener("change", function (e) {
      state.categoryId = e.target.value;
      fillServiceOptions();
    });
    $("#rx-service").addEventListener("change", function (e) {
      state.serviceId = e.target.value;
    });
    $("#rx-staff").addEventListener("change", function (e) {
      state.staffId = e.target.value;
    });
    $("#rx-available-from").addEventListener("change", function (e) {
      state.availableFrom = e.target.value;
    });
    $("#rx-time-from").addEventListener("change", function (e) {
      state.timeFrom = e.target.value;
    });
    $("#rx-time-to").addEventListener("change", function (e) {
      state.timeTo = e.target.value;
    });

    // Pointer-based toggle feels snappier and avoids double-fire with click+label quirks
    $("#rx-days").addEventListener("pointerdown", function (e) {
      var btn = e.target.closest(".rx-day");
      if (!btn || !$("#rx-days").contains(btn)) return;
      e.preventDefault();
      var day = Number(btn.dataset.day);
      state.days[day] = !state.days[day];
      syncDayButtons();
      setError("");
    });

    $("#rx-next-0").addEventListener("click", function () {
      if (!state.categoryId || !state.serviceId) {
        setError("Please select a category and service.");
        return;
      }
      if (!Object.keys(state.days).some(function (k) { return state.days[k]; })) {
        setError("Please select at least one day of the week.");
        return;
      }
      if (state.timeFrom >= state.timeTo) {
        setError("“Finish by” must be after “Start from”.");
        return;
      }
      var from = parseISO(state.availableFrom);
      from.setHours(0, 0, 0, 0);
      state.calMonth = new Date(from.getFullYear(), from.getMonth(), 1);
      state.selectedDate = null;
      state.selectedTime = "";
      var probe = new Date(from.getTime());
      for (var i = 0; i < 60; i++) {
        probe.setHours(0, 0, 0, 0);
        if (state.days[probe.getDay()] && probe.getTime() >= from.getTime()) {
          state.selectedDate = toISODate(probe);
          break;
        }
        probe.setDate(probe.getDate() + 1);
      }
      go(1);
    });
  }

  function slotListForDate(iso) {
    var d = parseISO(iso);
    if (!state.days[d.getDay()]) return [];
    var from = parseISO(state.availableFrom);
    from.setHours(0, 0, 0, 0);
    if (d < from) return [];
    var duration = (currentService() && currentService().durationMin) || 15;
    var startParts = state.timeFrom.split(":").map(Number);
    var endParts = state.timeTo.split(":").map(Number);
    var start = startParts[0] * 60 + startParts[1];
    var end = endParts[0] * 60 + endParts[1];
    var out = [];
    for (var m = start; m + duration <= end; m += duration) {
      out.push(pad(Math.floor(m / 60)) + ":" + pad(m % 60));
    }
    return out;
  }

  function renderCalendar() {
    var month = state.calMonth;
    var y = month.getFullYear();
    var m = month.getMonth();
    var first = new Date(y, m, 1);
    var startPad = (first.getDay() + 6) % 7;
    var daysInMonth = new Date(y, m + 1, 0).getDate();
    var availableFrom = parseISO(state.availableFrom);
    availableFrom.setHours(0, 0, 0, 0);

    var html =
      '<div class="rx-cal-head"><button type="button" id="rx-cal-prev" aria-label="Previous month">‹</button><span>' +
      month.toLocaleDateString("en-US", { month: "short", year: "numeric" }) +
      '</span><button type="button" id="rx-cal-next" aria-label="Next month">›</button></div>';
    html += '<div class="rx-cal-grid">';
    ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].forEach(function (d) {
      html += '<div class="rx-cal-dow">' + d + "</div>";
    });
    for (var i = 0; i < startPad; i++) {
      html += '<button type="button" class="rx-cal-day is-muted" disabled>&nbsp;</button>';
    }
    for (var day = 1; day <= daysInMonth; day++) {
      var date = new Date(y, m, day);
      var iso = toISODate(date);
      var allowed = state.days[date.getDay()] && date >= availableFrom;
      var selected = state.selectedDate === iso;
      html +=
        '<button type="button" class="rx-cal-day' +
        (allowed ? "" : " is-muted") +
        (selected ? " is-selected" : "") +
        '" data-date="' +
        iso +
        '"' +
        (allowed ? "" : " disabled") +
        ">" +
        day +
        "</button>";
    }
    html += "</div>";
    return html;
  }

  function renderSlots() {
    if (!state.selectedDate) {
      return '<div class="rx-slots-head">Select a date</div><div class="rx-slots"><p style="grid-column:1/-1;color:#8a8178;margin:8px">Choose an available day on the calendar.</p></div>';
    }
    var slots = slotListForDate(state.selectedDate);
    var head = formatShortDate(parseISO(state.selectedDate));
    var body = slots
      .map(function (t) {
        var on = state.selectedTime === t;
        return (
          '<label class="rx-slot' +
          (on ? " is-on" : "") +
          '" data-time="' +
          t +
          '"><input type="radio" name="rx-slot" value="' +
          t +
          '"' +
          (on ? " checked" : "") +
          " /><span>" +
          formatTimeLabel(t) +
          "</span></label>"
        );
      })
      .join("");
    if (!slots.length) {
      body =
        '<p style="grid-column:1/-1;color:#8a8178;margin:8px">No slots for this day with your availability filters.</p>';
    }
    return '<div class="rx-slots-head">' + head + '</div><div class="rx-slots" id="rx-slots">' + body + "</div>";
  }

  function refreshSchedule() {
    var cal = $("#rx-cal");
    var wrap = $("#rx-slots-wrap");
    if (cal) cal.innerHTML = renderCalendar();
    if (wrap) wrap.innerHTML = renderSlots();
    bindScheduleEvents();
  }

  function bindScheduleEvents() {
    var prev = $("#rx-cal-prev");
    var next = $("#rx-cal-next");
    if (prev) {
      prev.onclick = function () {
        state.calMonth = new Date(state.calMonth.getFullYear(), state.calMonth.getMonth() - 1, 1);
        refreshSchedule();
      };
    }
    if (next) {
      next.onclick = function () {
        state.calMonth = new Date(state.calMonth.getFullYear(), state.calMonth.getMonth() + 1, 1);
        refreshSchedule();
      };
    }
    var cal = $("#rx-cal");
    if (cal) {
      cal.onclick = function (e) {
        var btn = e.target.closest(".rx-cal-day:not(.is-muted)");
        if (!btn || !btn.dataset.date) return;
        state.selectedDate = btn.dataset.date;
        state.selectedTime = "";
        refreshSchedule();
      };
    }
    var slots = $("#rx-slots");
    if (slots) {
      slots.onclick = function (e) {
        var label = e.target.closest(".rx-slot");
        if (!label) return;
        e.preventDefault();
        var time = label.getAttribute("data-time");
        if (!time) return;
        state.selectedTime = time;
        document.querySelectorAll(".rx-slot").forEach(function (el) {
          var on = el.getAttribute("data-time") === time;
          el.classList.toggle("is-on", on);
          var input = el.querySelector("input");
          if (input) input.checked = on;
        });
        askTimeConfirmation(time);
      };
    }
  }

  function renderStep1() {
    var svc = currentService();
    var staff = currentStaff();
    $("#rx-step-1").innerHTML =
      '<p class="rx-title">Below you can find a list of available time slots for <strong>' +
      (svc ? svc.name : "") +
      "</strong> by <strong>" +
      (staff ? staff.name : "") +
      '</strong>.</p>' +
      '<p class="rx-title" style="margin-top:-8px">Click on a time slot to proceed with booking.</p>' +
      '<div class="rx-time-layout"><div class="rx-cal" id="rx-cal">' +
      renderCalendar() +
      '</div><div class="rx-slots-wrap" id="rx-slots-wrap">' +
      renderSlots() +
      "</div></div>" +
      '<div class="rx-actions"><button type="button" class="rx-btn" id="rx-back-1">Back</button></div>';

    bindScheduleEvents();
    $("#rx-back-1").addEventListener("click", function () {
      go(0);
    });
  }

  function askTimeConfirmation(time) {
    var dateLabel = state.selectedDate ? formatLongDate(parseISO(state.selectedDate)) : "";
    var timeLabel = formatTimeLabel(time);
    var svc = currentService();
    closeTimeModal(true);

    var overlay = document.createElement("div");
    overlay.className = "rx-modal-overlay";
    overlay.id = "rx-time-modal";
    overlay.innerHTML =
      '<div class="rx-modal" role="dialog" aria-modal="true" aria-labelledby="rx-time-modal-title">' +
      '<h3 id="rx-time-modal-title">Confirm time slot</h3>' +
      "<p>Do you want to book <strong>" +
      escapeHtml(svc ? svc.name : "this service") +
      "</strong> on <strong>" +
      escapeHtml(dateLabel) +
      "</strong> at <strong>" +
      escapeHtml(timeLabel) +
      "</strong>?</p>" +
      '<div class="rx-modal-actions">' +
      '<button type="button" class="rx-btn rx-btn-ghost" id="rx-time-cancel">Cancel</button>' +
      '<button type="button" class="rx-btn" id="rx-time-ok">Confirm</button>' +
      "</div></div>";

    document.body.appendChild(overlay);

    $("#rx-time-cancel").addEventListener("click", function () {
      state.selectedTime = "";
      document.querySelectorAll(".rx-slot").forEach(function (el) {
        el.classList.remove("is-on");
        var input = el.querySelector("input");
        if (input) input.checked = false;
      });
      closeTimeModal();
    });
    $("#rx-time-ok").addEventListener("click", function () {
      closeTimeModal(true);
      go(2);
    });
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) $("#rx-time-cancel").click();
    });
  }

  function closeTimeModal(immediate) {
    var existing = document.getElementById("rx-time-modal");
    if (!existing) return;
    if (immediate) {
      existing.remove();
      return;
    }
    existing.classList.add("is-closing");
    setTimeout(function () {
      if (existing.parentNode) existing.remove();
    }, 160);
  }

  function renderStep2() {
    var svc = currentService();
    var staff = currentStaff();
    var d = state.details;
    $("#rx-step-2").innerHTML =
      '<div class="rx-summary">' +
      "<div><strong>" +
      (svc ? svc.name : "") +
      "</strong></div>" +
      "<div>" +
      (staff ? staff.name : "") +
      "</div>" +
      "<div>" +
      (state.selectedTime ? formatTimeLabel(state.selectedTime) : "") +
      "</div>" +
      "<div>" +
      (state.selectedDate ? formatLongDate(parseISO(state.selectedDate)) : "") +
      "</div>" +
      "<div>" +
      money(staff ? staff.price : 0) +
      "</div>" +
      "</div>" +
      '<p class="rx-title">Please provide your details in the form below to proceed with booking.</p>' +
      '<div class="rx-details-grid">' +
      '<div class="rx-field"><label>First name</label><input type="text" id="rx-first" value="' +
      escapeAttr(d.firstName) +
      '" autocomplete="given-name" /></div>' +
      '<div class="rx-field"><label>Last name</label><input type="text" id="rx-last" value="' +
      escapeAttr(d.lastName) +
      '" autocomplete="family-name" /></div>' +
      '<div class="rx-field"><label>Phone</label><div class="rx-phone"><select id="rx-cc" aria-label="Country code">' +
      '<option value="+91"' +
      (d.cc === "+91" ? " selected" : "") +
      ">🇮🇳 +91</option>" +
      '<option value="+1"' +
      (d.cc === "+1" ? " selected" : "") +
      ">🇺🇸 +1</option>" +
      '<option value="+44"' +
      (d.cc === "+44" ? " selected" : "") +
      ">🇬🇧 +44</option>" +
      '<option value="+971"' +
      (d.cc === "+971" ? " selected" : "") +
      ">🇦🇪 +971</option>" +
      '</select><input type="tel" id="rx-phone" placeholder="081234 56789" value="' +
      escapeAttr(d.phone) +
      '" autocomplete="tel-national" /></div></div>' +
      '<div class="rx-field"><label>Email</label><input type="email" id="rx-email" value="' +
      escapeAttr(d.email) +
      '" autocomplete="email" /></div>' +
      '<div class="rx-field rx-span-2"><label>Notes</label><textarea id="rx-notes">' +
      escapeHtml(d.notes) +
      "</textarea></div>" +
      "</div>" +
      '<div class="rx-actions"><button type="button" class="rx-btn" id="rx-back-2">Back</button><button type="button" class="rx-btn" id="rx-next-2">Next</button></div>';

    $("#rx-back-2").addEventListener("click", function () {
      collectDetails();
      go(1);
    });
    $("#rx-next-2").addEventListener("click", function () {
      collectDetails();
      if (!state.details.firstName.trim()) {
        setError("Please enter your first name.");
        return;
      }
      if (!state.details.phone.trim()) {
        setError("Please enter your phone number.");
        return;
      }
      if (!state.details.email.trim() || state.details.email.indexOf("@") < 0) {
        setError("Please enter a valid email address.");
        return;
      }
      go(3);
    });
  }

  function collectDetails() {
    state.details.firstName = ($("#rx-first") && $("#rx-first").value) || "";
    state.details.lastName = ($("#rx-last") && $("#rx-last").value) || "";
    state.details.cc = ($("#rx-cc") && $("#rx-cc").value) || "+91";
    state.details.phone = (($("#rx-phone") && $("#rx-phone").value) || "").trim();
    state.details.email = ($("#rx-email") && $("#rx-email").value) || "";
    state.details.notes = ($("#rx-notes") && $("#rx-notes").value) || "";
  }

  function renderStep3() {
    var svc = currentService();
    var staff = currentStaff();
    $("#rx-step-3").innerHTML =
      '<div class="rx-confirm-card"><h3>Confirm your booking</h3><dl>' +
      "<dt>Service</dt><dd>" +
      escapeHtml(svc ? svc.name : "") +
      "</dd>" +
      "<dt>Employee</dt><dd>" +
      escapeHtml(staff ? staff.name : "") +
      "</dd>" +
      "<dt>Date</dt><dd>" +
      escapeHtml(state.selectedDate ? formatLongDate(parseISO(state.selectedDate)) : "") +
      "</dd>" +
      "<dt>Time</dt><dd>" +
      escapeHtml(state.selectedTime ? formatTimeLabel(state.selectedTime) : "") +
      "</dd>" +
      "<dt>Price</dt><dd>" +
      money(staff ? staff.price : 0) +
      "</dd>" +
      "<dt>Name</dt><dd>" +
      escapeHtml((state.details.firstName + " " + state.details.lastName).trim()) +
      "</dd>" +
      "<dt>Phone</dt><dd>" +
      escapeHtml(phoneDisplay()) +
      "</dd>" +
      "<dt>Email</dt><dd>" +
      escapeHtml(state.details.email) +
      "</dd>" +
      "<dt>Notes</dt><dd>" +
      escapeHtml(state.details.notes || "—") +
      "</dd>" +
      "</dl></div>" +
      '<div class="rx-actions"><button type="button" class="rx-btn" id="rx-back-3">Back</button><button type="button" class="rx-btn" id="rx-confirm">Confirm booking</button></div>';

    $("#rx-back-3").addEventListener("click", function () {
      go(2);
    });
    $("#rx-confirm").addEventListener("click", function () {
      submitBooking(this);
    });
  }

  function renderStep4() {
    $("#rx-step-4").innerHTML =
      '<div class="rx-done"><div class="rx-done-icon">✓</div><h3>Booking confirmed</h3><p>Thank you, ' +
      escapeHtml(state.details.firstName || "there") +
      "! Your appointment request <strong>" +
      escapeHtml(state.bookingId) +
      "</strong> has been recorded. Our team will contact you shortly on " +
      escapeHtml(phoneDisplay()) +
      '.</p><button type="button" class="rx-btn" id="rx-new">Book another</button></div>';
    $("#rx-new").addEventListener("click", function () {
      state.selectedDate = null;
      state.selectedTime = "";
      state.bookingId = "";
      state.details = { firstName: "", lastName: "", phone: "", cc: "+91", email: "", notes: "" };
      go(0);
    });
  }

  function apiBookUrl() {
    var root = document.getElementById("revanax-booking");
    var custom = root && root.getAttribute("data-api");
    if (custom) return custom;
    return "/api/book";
  }

  function submitBooking(btn) {
    var svc = currentService();
    var staff = currentStaff();
    state.bookingId = "RX-" + Date.now().toString(36).toUpperCase();
    var payload = {
      id: state.bookingId,
      createdAt: new Date().toISOString(),
      category: currentCategory() ? currentCategory().name : "",
      service: svc ? svc.name : "",
      serviceId: state.serviceId,
      staff: staff ? staff.name : "",
      date: state.selectedDate,
      time: state.selectedTime,
      price: staff ? staff.price : 0,
      customer: {
        firstName: state.details.firstName,
        lastName: state.details.lastName,
        phone: phoneDisplay(),
        email: state.details.email,
        notes: state.details.notes,
      },
    };

    try {
      var key = "revanax_bookings";
      var list = JSON.parse(localStorage.getItem(key) || "[]");
      list.push(payload);
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) {}

    if (btn) {
      btn.disabled = true;
      btn.textContent = "Sending…";
    }
    setError("");

    fetch(apiBookUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        var ctype = (res.headers.get("content-type") || "").toLowerCase();
        if (ctype.indexOf("application/json") >= 0) {
          return res.json().then(function (data) {
            return { ok: res.ok, status: res.status, data: data };
          });
        }
        return res.text().then(function (text) {
          var msg = "Booking API is not available on this server.";
          if (res.status === 501 || /Unsupported method/i.test(text)) {
            msg =
              "Wrong server is running. Start the site with: python3 server.py (not python3 -m http.server).";
          }
          return { ok: false, status: res.status, data: { ok: false, error: msg } };
        });
      })
      .then(function (result) {
        if (!result.ok || !result.data || !result.data.ok) {
          var msg =
            (result.data && result.data.error) ||
            "Could not send booking email. Please try again.";
          throw new Error(msg);
        }
        go(4);
      })
      .catch(function (err) {
        setError(err.message || "Could not send booking email.");
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Confirm booking";
        }
      });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  function showPanel(step) {
    for (var s = 0; s < 5; s++) {
      var panel = $("#rx-step-" + s);
      if (!panel) continue;
      if (s === step) {
        panel.hidden = false;
        panel.classList.remove("is-leaving");
        panel.classList.add("is-entering");
        // force reflow then animate in
        void panel.offsetWidth;
        panel.classList.remove("is-entering");
      } else {
        panel.hidden = true;
        panel.classList.remove("is-entering", "is-leaving");
      }
    }
  }

  function go(step) {
    if (state.transitioning && step === state.step) return;
    var prev = state.step;
    var prevPanel = $("#rx-step-" + prev);

    function finish() {
      state.step = step;
      updateChrome();
      setError("");
      if (step === 0) renderStep0();
      if (step === 1) renderStep1();
      if (step === 2) renderStep2();
      if (step === 3) renderStep3();
      if (step === 4) renderStep4();
      showPanel(step);
      state.transitioning = false;
    }

    if (prev === step || !prevPanel || prevPanel.hidden) {
      finish();
      return;
    }

    state.transitioning = true;
    prevPanel.classList.add("is-leaving");
    setTimeout(function () {
      prevPanel.hidden = true;
      prevPanel.classList.remove("is-leaving");
      finish();
    }, 160);
  }

  function initDefaults() {
    var today = new Date();
    state.availableFrom = toISODate(today);
    state.calMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    if (state.categories[0]) {
      state.categoryId = state.categories[0].id;
      var body = state.categories.find(function (c) {
        return c.id === "body-fitness-treatment";
      });
      if (body) state.categoryId = body.id;
      var cat = currentCategory();
      if (cat && cat.services.length) {
        var cryo = cat.services.find(function (s) {
          return /cryolipolysis/i.test(s.id);
        });
        state.serviceId = cryo ? cryo.id : cat.services[0].id;
      }
    }
  }

  function boot(root) {
    var dataUrl = root.getAttribute("data-services") || "assets/services.json";
    root.innerHTML = '<p style="text-align:center;color:#8a8178;padding:24px">Loading booking…</p>';
    fetch(dataUrl)
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        state.categories = data;
        initDefaults();
        buildShell(root);
        go(0);
      })
      .catch(function (err) {
        root.innerHTML =
          '<p style="color:#a33;padding:20px">Could not load booking services. Please refresh the page.</p>';
        console.error(err);
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("revanax-booking");
    if (root) boot(root);
  });
})();
