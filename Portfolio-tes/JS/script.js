/**
 * Portfolio Website - Vanilla JavaScript
 * Handles: Navbar, Theme, Mobile Menu, Project Filter,
 * Contact Form, Scroll Reveal, Back-to-Top
 */

(function () {
  'use strict';

  /* ========== DOM Ready ========== */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavbar();
    initTheme();
    initMobileMenu();
    initActiveNav();
    initProjectFilter();
    initContactForm();
    initScrollReveal();
    initBackToTop();
    initSmoothScroll();
  }

  /* ========== NAVBAR SCROLL ========== */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function handleScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* ========== THEME TOGGLE ========== */
  function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Load saved theme
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark') {
      html.setAttribute('data-theme', 'dark');
      updateThemeIcon(true);
    }

    if (toggle) {
      toggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
          html.removeAttribute('data-theme');
          localStorage.setItem('portfolio-theme', 'light');
          updateThemeIcon(false);
        } else {
          html.setAttribute('data-theme', 'dark');
          localStorage.setItem('portfolio-theme', 'dark');
          updateThemeIcon(true);
        }
      });
    }
  }

  function updateThemeIcon(isDark) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.innerHTML = isDark ? '☀️' : '🌙';
    toggle.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  /* ========== MOBILE HAMBURGER ========== */
  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ========== ACTIVE NAV LINK ========== */
  function initActiveNav() {
    const currentPage =
      window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (
        href === currentPage ||
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')
      ) {
        link.classList.add('active');
      }
    });
  }

  /* ========== PROJECT FILTER ========== */
  function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach((card) => {
          const categories = card.getAttribute('data-category') || '';
          if (filter === 'all' || categories.includes(filter)) {
            card.classList.remove('hidden');
            // Re-trigger animation
            card.style.animation = 'none';
            card.offsetHeight; // reflow
            card.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ========== CONTACT FORM VALIDATION ========== */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const messageInput = form.querySelector('#message');
    const successMsg = form.querySelector('.form-success');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset errors
      form
        .querySelectorAll('.form-group')
        .forEach((g) => g.classList.remove('error'));

      // Name validation
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your name (at least 2 characters)');
        isValid = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        !emailInput.value.trim() ||
        !emailRegex.test(emailInput.value.trim())
      ) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
      }

      // Subject validation
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        showError(
          subjectInput,
          'Please enter a subject (at least 3 characters)'
        );
        isValid = false;
      }

      // Message validation
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(
          messageInput,
          'Please enter a message (at least 10 characters)'
        );
        isValid = false;
      }

      if (isValid) {
        // Show success (frontend demo only)
        if (successMsg) {
          successMsg.classList.add('show');
          successMsg.textContent =
            'Thank you! Your message has been sent successfully.';
        }
        form.reset();

        // Hide success after 5 seconds
        setTimeout(() => {
          if (successMsg) successMsg.classList.remove('show');
        }, 5000);
      }
    });

    // Real-time clear error on input
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          input.closest('.form-group')?.classList.remove('error');
        });
      }
    });
  }

  function showError(input, message) {
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.add('error');
    const errorEl = group.querySelector('.error-msg');
    if (errorEl) errorEl.textContent = message;
  }

  /* ========== SCROLL REVEAL ========== */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .skill-card');

    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // For skill cards, also set progress
            if (entry.target.classList.contains('skill-card')) {
              const fill = entry.target.querySelector('.progress-fill');
              if (fill) {
                const progress =
                  entry.target.getAttribute('data-progress') || '0';
                fill.style.setProperty('--progress', progress + '%');
                // Small delay for visual effect
                setTimeout(() => {
                  fill.style.width = progress + '%';
                }, 100);
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* ========== BACK TO TOP ========== */
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 400) {
          btn.classList.add('show');
        } else {
          btn.classList.remove('show');
        }
      },
      { passive: true }
    );

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ========== SMOOTH SCROLL for anchor links ========== */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }
})();
