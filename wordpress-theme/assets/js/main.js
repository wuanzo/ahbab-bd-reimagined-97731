/**
 * Stationery Store - Main JS
 */
(function () {
  'use strict';

  // Header scroll effect
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Mobile menu toggle
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.querySelector('.main-nav ul');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = '#fff';
      nav.style.padding = '20px';
      nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
      nav.style.gap = '16px';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu
        if (nav) nav.style.display = '';
      }
    });
  });
})();
