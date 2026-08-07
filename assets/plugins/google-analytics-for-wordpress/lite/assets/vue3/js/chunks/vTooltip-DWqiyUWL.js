const TOOLTIP_CLASS = "monsterinsights-tooltip";
const GAP = 8;
function buildTooltip(content) {
  const root = document.createElement("div");
  root.className = TOOLTIP_CLASS;
  root.setAttribute("role", "tooltip");
  const arrow = document.createElement("div");
  arrow.className = "monsterinsights-tooltip-arrow";
  const inner = document.createElement("div");
  inner.className = "monsterinsights-tooltip-inner";
  inner.innerHTML = content || "";
  root.appendChild(arrow);
  root.appendChild(inner);
  return root;
}
function positionTooltip(tooltip, target) {
  const rect = target.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  let top = rect.top + window.scrollY - tooltipRect.height - GAP;
  let left = rect.left + window.scrollX + rect.width / 2 - tooltipRect.width / 2;
  if (top < window.scrollY) {
    top = rect.bottom + window.scrollY + GAP;
    tooltip.classList.add("monsterinsights-tooltip--bottom");
  } else {
    tooltip.classList.remove("monsterinsights-tooltip--bottom");
  }
  const maxLeft = window.scrollX + document.documentElement.clientWidth - tooltipRect.width - 4;
  left = Math.max(window.scrollX + 4, Math.min(left, maxLeft));
  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
  tooltip.style.position = "absolute";
}
function show(el) {
  const content = el.__vTooltipContent;
  if (!content) {
    return;
  }
  let tooltip = el.__vTooltipEl;
  if (!tooltip) {
    tooltip = buildTooltip(content);
    document.body.appendChild(tooltip);
    el.__vTooltipEl = tooltip;
  } else {
    tooltip.querySelector(".monsterinsights-tooltip-inner").innerHTML = content;
  }
  requestAnimationFrame(() => positionTooltip(tooltip, el));
}
function hide(el) {
  const tooltip = el.__vTooltipEl;
  if (tooltip?.parentNode) {
    tooltip.parentNode.removeChild(tooltip);
  }
  el.__vTooltipEl = null;
}
function bind(el, binding) {
  const value = binding.value;
  const content = typeof value === "string" ? value : value?.content || value?.title || "";
  el.__vTooltipContent = content;
  if (!el.__vTooltipEvents) {
    el.__vTooltipEvents = {
      enter: () => show(el),
      leave: () => hide(el),
      focus: () => show(el),
      blur: () => hide(el)
    };
    el.addEventListener("mouseenter", el.__vTooltipEvents.enter);
    el.addEventListener("mouseleave", el.__vTooltipEvents.leave);
    el.addEventListener("focus", el.__vTooltipEvents.focus);
    el.addEventListener("blur", el.__vTooltipEvents.blur);
  }
}
function unbind(el) {
  if (el.__vTooltipEvents) {
    el.removeEventListener("mouseenter", el.__vTooltipEvents.enter);
    el.removeEventListener("mouseleave", el.__vTooltipEvents.leave);
    el.removeEventListener("focus", el.__vTooltipEvents.focus);
    el.removeEventListener("blur", el.__vTooltipEvents.blur);
    el.__vTooltipEvents = null;
  }
  hide(el);
  el.__vTooltipContent = null;
}
const vTooltip = {
  mounted(el, binding) {
    bind(el, binding);
  },
  updated(el, binding) {
    unbind(el);
    bind(el, binding);
  },
  unmounted(el) {
    unbind(el);
  }
};
export {
  vTooltip as v
};
