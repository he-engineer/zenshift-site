/*
 * ZenShift Coach Website JavaScript
 * Enhanced for performance, accessibility, and user experience
 */

(function() {
  'use strict';

  // ===========================
  // CONFIGURATION & CONSTANTS
  // ===========================

  const CONFIG = {
    // Performance thresholds
    SCROLL_THROTTLE: 16, // ~60fps
    RESIZE_DEBOUNCE: 250,
    INTERSECTION_THRESHOLD: 0.1,

    // Animation durations (matching CSS)
    ANIMATION_DURATION: {
      QUICK: 150,
      SMOOTH: 300,
      BREATHING: 4000
    },

    // Breakpoints (matching CSS)
    BREAKPOINTS: {
      SM: 640,
      MD: 768,
      LG: 1024,
      XL: 1280
    },

    // Analytics events
    ANALYTICS_EVENTS: {
      NAVIGATION_CLICK: 'navigation_click',
      CTA_CLICK: 'cta_click',
      SECTION_VIEW: 'section_view',
      APP_STORE_CLICK: 'app_store_click',
      MOBILE_MENU_TOGGLE: 'mobile_menu_toggle'
    }
  };

  // ===========================
  // UTILITIES
  // ===========================

  /**
   * Throttle function execution
   */
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Debounce function execution
   */
  function debounce(func, wait, immediate) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /**
   * Check if browser supports WebP
   */
  function supportsWebP() {
    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
  }

  /**
   * Check if user prefers reduced motion
   */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Get current viewport width
   */
  function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  }

  /**
   * Check if element is in viewport
   */
  function isInViewport(element, threshold = 0.1) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const viewWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    return (
      rect.bottom >= viewHeight * threshold &&
      rect.right >= viewWidth * threshold &&
      rect.top <= viewHeight * (1 - threshold) &&
      rect.left <= viewWidth * (1 - threshold)
    );
  }

  /**
   * Smooth scroll to element
   */
  function smoothScrollTo(element, offset = 0) {
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    if (prefersReducedMotion()) {
      window.scrollTo(0, offsetPosition);
    } else {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Track analytics event
   */
  function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }

    // Console log for development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Analytics Event:', eventName, parameters);
    }
  }

  // ===========================
  // MOBILE NAVIGATION
  // ===========================

  class MobileNavigation {
    constructor() {
      this.navbarToggle = document.getElementById('navbar-toggle');
      this.navbarMenu = document.getElementById('navbar-menu');
      this.isOpen = false;

      this.init();
    }

    init() {
      if (!this.navbarToggle || !this.navbarMenu) return;

      this.navbarToggle.addEventListener('click', this.toggle.bind(this));

      // Close menu when clicking outside
      document.addEventListener('click', (event) => {
        if (this.isOpen && !this.navbarToggle.contains(event.target) && !this.navbarMenu.contains(event.target)) {
          this.close();
        }
      });

      // Close menu when pressing escape
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });

      // Close menu when clicking nav links
      const navLinks = this.navbarMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.close();
        });
      });

      // Handle window resize
      window.addEventListener('resize', debounce(() => {
        if (getViewportWidth() >= CONFIG.BREAKPOINTS.MD && this.isOpen) {
          this.close();
        }
      }, CONFIG.RESIZE_DEBOUNCE));
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }

      trackEvent(CONFIG.ANALYTICS_EVENTS.MOBILE_MENU_TOGGLE, {
        action: this.isOpen ? 'open' : 'close'
      });
    }

    open() {
      this.navbarMenu.classList.add('active');
      this.navbarToggle.setAttribute('aria-expanded', 'true');
      this.isOpen = true;

      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    close() {
      this.navbarMenu.classList.remove('active');
      this.navbarToggle.setAttribute('aria-expanded', 'false');
      this.isOpen = false;

      // Restore body scroll
      document.body.style.overflow = '';
    }
  }

  // ===========================
  // SMOOTH SCROLLING
  // ===========================

  class SmoothScrolling {
    constructor() {
      this.headerHeight = 80; // Fixed header height
      this.init();
    }

    init() {
      // Handle navigation links
      const navLinks = document.querySelectorAll('a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', this.handleClick.bind(this));
      });
    }

    handleClick(event) {
      const href = event.currentTarget.getAttribute('href');

      // Skip if it's just '#'
      if (href === '#') {
        event.preventDefault();
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        smoothScrollTo(targetElement, this.headerHeight);

        // Track navigation click
        trackEvent(CONFIG.ANALYTICS_EVENTS.NAVIGATION_CLICK, {
          target_section: targetId
        });
      }
    }
  }

  // ===========================
  // INTERSECTION OBSERVER
  // ===========================

  class SectionObserver {
    constructor() {
      this.sections = document.querySelectorAll('section[id]');
      this.navLinks = document.querySelectorAll('.nav-link[href^="#"]');
      this.observer = null;

      this.init();
    }

    init() {
      if (!('IntersectionObserver' in window)) return;

      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          threshold: CONFIG.INTERSECTION_THRESHOLD,
          rootMargin: '-80px 0px -50% 0px' // Account for fixed header
        }
      );

      this.sections.forEach(section => {
        this.observer.observe(section);
      });
    }

    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Update active navigation
          this.updateActiveNavigation(entry.target.id);

          // Track section view
          trackEvent(CONFIG.ANALYTICS_EVENTS.SECTION_VIEW, {
            section_id: entry.target.id,
            section_name: entry.target.getAttribute('aria-labelledby') || entry.target.id
          });
        }
      });
    }

    updateActiveNavigation(activeId) {
      this.navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }
  }

  // ===========================
  // LAZY LOADING
  // ===========================

  class LazyImageLoader {
    constructor() {
      this.images = document.querySelectorAll('img[loading="lazy"]');
      this.observer = null;

      this.init();
    }

    init() {
      if (!('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        this.loadAllImages();
        return;
      }

      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      this.images.forEach(img => {
        this.observer.observe(img);
      });
    }

    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }

    loadImage(img) {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });

      // Trigger load if not already loaded
      if (!img.complete) {
        img.src = img.src;
      } else {
        img.classList.add('loaded');
      }
    }

    loadAllImages() {
      this.images.forEach(img => {
        this.loadImage(img);
      });
    }
  }

  // ===========================
  // LAZY LOADING BACKGROUND IMAGES
  // ===========================

  class LazyBackgroundLoader {
    constructor() {
      this.sections = document.querySelectorAll('[data-bg-image]');
      this.observer = null;

      this.init();
    }

    init() {
      if (!('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        this.loadAllBackgrounds();
        return;
      }

      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          threshold: 0.1,
          rootMargin: '200px'
        }
      );

      this.sections.forEach(section => {
        this.observer.observe(section);
      });
    }

    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadBackground(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }

    loadBackground(section) {
      const bgImage = section.getAttribute('data-bg-image');
      if (bgImage) {
        section.style.backgroundImage = `url('${bgImage}')`;
        section.classList.add('bg-loaded');
      }
    }

    loadAllBackgrounds() {
      this.sections.forEach(section => this.loadBackground(section));
    }
  }

  // ===========================
  // CTA TRACKING
  // ===========================

  class CTATracker {
    constructor() {
      this.init();
    }

    init() {
      // Track primary CTA buttons
      const ctaButtons = document.querySelectorAll('.btn');
      ctaButtons.forEach(button => {
        button.addEventListener('click', this.handleCTAClick.bind(this));
      });

      // Track app store badges specifically
      const appStoreBadges = document.querySelectorAll('.app-store-badge');
      appStoreBadges.forEach(badge => {
        badge.addEventListener('click', this.handleAppStoreClick.bind(this));
      });
    }

    handleCTAClick(event) {
      const button = event.currentTarget;
      const buttonText = button.textContent.trim();
      const buttonClasses = button.className;
      const href = button.getAttribute('href');

      trackEvent(CONFIG.ANALYTICS_EVENTS.CTA_CLICK, {
        button_text: buttonText,
        button_type: this.getButtonType(buttonClasses),
        target_url: href,
        section: this.getContainingSection(button)
      });
    }

    handleAppStoreClick(event) {
      const badge = event.currentTarget;
      const href = badge.getAttribute('href');
      const platform = href.includes('apple.com') ? 'ios' : 'android';

      trackEvent(CONFIG.ANALYTICS_EVENTS.APP_STORE_CLICK, {
        platform: platform,
        target_url: href
      });
    }

    getButtonType(classes) {
      if (classes.includes('btn-primary')) return 'primary';
      if (classes.includes('btn-secondary')) return 'secondary';
      if (classes.includes('btn-ghost')) return 'ghost';
      return 'default';
    }

    getContainingSection(element) {
      const section = element.closest('section');
      return section ? section.id || 'unknown' : 'none';
    }
  }

  // ===========================
  // PERFORMANCE MONITORING
  // ===========================

  class PerformanceMonitor {
    constructor() {
      this.init();
    }

    init() {
      // Monitor Core Web Vitals
      this.observeLCP();
      this.observeFID();
      this.observeCLS();

      // Monitor custom metrics
      this.observePageLoad();
    }

    observeLCP() {
      if (!('PerformanceObserver' in window)) return;

      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        trackEvent('core_web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(lastEntry.startTime),
          metric_rating: this.getLCPRating(lastEntry.startTime)
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    }

    observeFID() {
      if (!('PerformanceObserver' in window)) return;

      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          trackEvent('core_web_vitals', {
            metric_name: 'FID',
            metric_value: Math.round(entry.processingStart - entry.startTime),
            metric_rating: this.getFIDRating(entry.processingStart - entry.startTime)
          });
        });
      });

      observer.observe({ entryTypes: ['first-input'] });
    }

    observeCLS() {
      if (!('PerformanceObserver' in window)) return;

      let clsValue = 0;
      let clsEntries = [];

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += entry.value;
          }
        }
      });

      observer.observe({ entryTypes: ['layout-shift'] });

      // Report CLS when page is unloaded
      window.addEventListener('beforeunload', () => {
        trackEvent('core_web_vitals', {
          metric_name: 'CLS',
          metric_value: Math.round(clsValue * 1000) / 1000,
          metric_rating: this.getCLSRating(clsValue)
        });
      });
    }

    observePageLoad() {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          trackEvent('page_performance', {
            dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd),
            load_complete: Math.round(navigation.loadEventEnd),
            connection_type: this.getConnectionType()
          });
        }
      });
    }

    getLCPRating(value) {
      if (value <= 2500) return 'good';
      if (value <= 4000) return 'needs-improvement';
      return 'poor';
    }

    getFIDRating(value) {
      if (value <= 100) return 'good';
      if (value <= 300) return 'needs-improvement';
      return 'poor';
    }

    getCLSRating(value) {
      if (value <= 0.1) return 'good';
      if (value <= 0.25) return 'needs-improvement';
      return 'poor';
    }

    getConnectionType() {
      if ('connection' in navigator) {
        return navigator.connection.effectiveType || 'unknown';
      }
      return 'unknown';
    }
  }

  // ===========================
  // HEADER SCROLL BEHAVIOR
  // ===========================

  class HeaderScrollBehavior {
    constructor() {
      this.header = document.querySelector('.header');
      this.lastScrollY = window.scrollY;
      this.ticking = false;

      this.init();
    }

    init() {
      if (!this.header) return;

      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(this.updateHeader.bind(this));
        this.ticking = true;
      }
    }

    updateHeader() {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled
      if (currentScrollY > 10) {
        this.header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        this.header.style.boxShadow = 'none';
      }

      this.lastScrollY = currentScrollY;
      this.ticking = false;
    }
  }

  // ===========================
  // ACCESSIBILITY ENHANCEMENTS
  // ===========================

  class AccessibilityEnhancements {
    constructor() {
      this.init();
    }

    init() {
      this.handleKeyboardNavigation();
      this.announcePageLoad();
      this.setupSkipLinks();
    }

    handleKeyboardNavigation() {
      // Ensure keyboard navigation works for interactive elements
      const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');

      interactiveElements.forEach(element => {
        element.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            if (element.tagName === 'BUTTON' || (element.tagName === 'A' && element.getAttribute('href'))) {
              // Let default behavior handle it
              return;
            }
          }
        });
      });
    }

    announcePageLoad() {
      // Announce page load to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = 'Page loaded successfully. ZenShift Coach - AI-Powered Meditation website.';

      document.body.appendChild(announcement);

      // Remove announcement after a short delay
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }

    setupSkipLinks() {
      const skipLink = document.querySelector('.skip-link');
      if (skipLink) {
        skipLink.addEventListener('click', (event) => {
          event.preventDefault();
          const target = document.querySelector(skipLink.getAttribute('href'));
          if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }
  }

  // ===========================
  // INITIALIZATION
  // ===========================

  function init() {
    // Check if DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeComponents);
    } else {
      initializeComponents();
    }
  }

  function initializeComponents() {
    try {
      // Detect WebP support and set class on HTML element
      if (supportsWebP()) {
        document.documentElement.classList.add('webp');
      } else {
        document.documentElement.classList.add('no-webp');
      }

      // Initialize all components
      new MobileNavigation();
      new SmoothScrolling();
      new SectionObserver();
      new LazyImageLoader();
      new LazyBackgroundLoader();
      new CTATracker();
      new PerformanceMonitor();
      new HeaderScrollBehavior();
      new AccessibilityEnhancements();

      // Track successful initialization
      trackEvent('app_initialized', {
        timestamp: Date.now(),
        user_agent: navigator.userAgent,
        viewport_width: getViewportWidth(),
        prefers_reduced_motion: prefersReducedMotion(),
        webp_support: supportsWebP()
      });

    } catch (error) {
      console.error('Error initializing website components:', error);

      // Track initialization error
      trackEvent('app_error', {
        error_message: error.message,
        error_stack: error.stack
      });
    }
  }

  // Start initialization
  init();

})();