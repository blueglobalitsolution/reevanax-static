/**
 * ReevanaX Modern Hero Video Slider
 * Smooth transitions, continuous video playback without stutter or freeze,
 * touch gestures, dot navigation, arrows, and auto-play with progress bar.
 */
(function() {
  function initReevanaSlider() {
    const slider = document.querySelector('.reevana-hero-slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.reevana-slide'));
    const dotsContainer = slider.querySelector('.reevana-slider-dots');
    const prevBtn = slider.querySelector('.reevana-slider-prev');
    const nextBtn = slider.querySelector('.reevana-slider-next');
    const progressBar = slider.querySelector('.reevana-slider-progress');

    if (slides.length === 0) return;

    let currentIndex = 0;
    const slideDuration = 6000; // 6 seconds per slide
    let timerStartTime = 0;
    let timerRaf = null;
    let isHovered = false;

    // Create navigation dots dynamically
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'reevana-dot' + (idx === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          goToSlide(idx);
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.reevana-dot')) : [];

    function updateDots(index) {
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
      });
    }

    function playActiveVideo(slide) {
      const video = slide.querySelector('video');
      if (video) {
        // Reset and play
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(function(err) {
            // Autoplay policy fallback: muted is set in HTML
          });
        }
      }
    }

    function pauseInactiveVideos(activeSlide) {
      slides.forEach(slide => {
        if (slide !== activeSlide) {
          const video = slide.querySelector('video');
          if (video && !video.paused) {
            video.pause();
          }
        }
      });
    }

    // Preload next video to prevent loading freeze
    function preloadNextVideo(nextIdx) {
      const nextSlide = slides[nextIdx];
      if (nextSlide) {
        const video = nextSlide.querySelector('video');
        if (video && video.readyState < 2) {
          video.load();
        }
      }
    }

    function goToSlide(newIndex) {
      if (newIndex === currentIndex && slides[currentIndex].classList.contains('active')) {
        return;
      }

      const prevSlide = slides[currentIndex];
      currentIndex = (newIndex + slides.length) % slides.length;
      const nextSlide = slides[currentIndex];

      // Update slide active state
      prevSlide.classList.remove('active');
      nextSlide.classList.add('active');

      updateDots(currentIndex);
      playActiveVideo(nextSlide);
      pauseInactiveVideos(nextSlide);
      preloadNextVideo((currentIndex + 1) % slides.length);

      resetProgressTimer();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    // Progress bar and auto-advance loop
    function resetProgressTimer() {
      timerStartTime = performance.now();
      if (progressBar) progressBar.style.width = '0%';
    }

    function tickTimer(now) {
      if (!isHovered) {
        const elapsed = now - timerStartTime;
        const progress = Math.min((elapsed / slideDuration) * 100, 100);
        if (progressBar) {
          progressBar.style.width = progress + '%';
        }

        if (elapsed >= slideDuration) {
          nextSlide();
        }
      } else {
        // While hovered, shift start time forward so progress pauses
        timerStartTime = now - (parseFloat(progressBar ? progressBar.style.width : '0') / 100) * slideDuration;
      }

      timerRaf = requestAnimationFrame(tickTimer);
    }

    // Attach arrow listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        nextSlide();
      });
    }

    // Pause timer on desktop hover
    slider.addEventListener('mouseenter', () => {
      isHovered = true;
    });

    slider.addEventListener('mouseleave', () => {
      isHovered = false;
    });

    // Mobile touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) {
          nextSlide(); // swipe left -> next
        } else {
          prevSlide(); // swipe right -> prev
        }
      }
    }

    // Initialize first slide
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === 0);
    });
    playActiveVideo(slides[0]);
    preloadNextVideo(1);
    resetProgressTimer();
    timerRaf = requestAnimationFrame(tickTimer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReevanaSlider);
  } else {
    initReevanaSlider();
  }
})();
