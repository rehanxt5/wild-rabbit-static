/* =============================================================
   Wild Rabbit Cafe & Bakehouse – scripts.js
   Handles: sticky header, mobile menu, menu filter, fade animations
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────────
     1. STICKY HEADER – transparent ➜ white on scroll
  ───────────────────────────────────────────── */
  const header        = document.getElementById('main-header');
  const logoText      = document.getElementById('header-logo-text');
  const navLinks      = document.querySelectorAll('.nav-desktop-link');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');

  function updateHeader() {
    const scrolled = window.scrollY > 50;

    if (scrolled) {
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
      header.classList.remove('bg-transparent', 'py-6');
      logoText.classList.add('text-[#441415]');
      logoText.classList.remove('text-white');
      navLinks.forEach(l => {
        l.classList.add('text-gray-800');
        l.classList.remove('text-white/90');
      });
      mobileMenuBtn.classList.add('text-gray-800');
      mobileMenuBtn.classList.remove('text-white');
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'py-4');
      header.classList.add('bg-transparent', 'py-6');
      logoText.classList.remove('text-[#441415]');
      logoText.classList.add('text-white');
      navLinks.forEach(l => {
        l.classList.remove('text-gray-800');
        l.classList.add('text-white/90');
      });
      mobileMenuBtn.classList.remove('text-gray-800');
      mobileMenuBtn.classList.add('text-white');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // run once on load


  /* ─────────────────────────────────────────────
     2. MOBILE MENU – slide-in drawer
  ───────────────────────────────────────────── */
  const mobileMenu    = document.getElementById('mobile-menu');
  const mobileClose   = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.body.style.overflow = '';
  }

  mobileClose.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));


  /* ─────────────────────────────────────────────
     3. MENU CATEGORY FILTER
  ───────────────────────────────────────────── */
  const filterBtns  = document.querySelectorAll('.menu-filter-btn');
  const menuCards   = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;

      // Update active button style
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#441415]', 'text-white', 'shadow-lg', 'scale-105');
        b.classList.add('bg-gray-100', 'text-gray-600');
      });
      btn.classList.add('bg-[#441415]', 'text-white', 'shadow-lg', 'scale-105');
      btn.classList.remove('bg-gray-100', 'text-gray-600');

      // Show / hide cards
      menuCards.forEach(card => {
        const cardCat = card.dataset.category;
        const visible = cat === 'All' || cardCat === cat;
        if (visible) {
          card.style.display = '';
          // Tiny entrance animation
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = 'cardFadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* ─────────────────────────────────────────────
     4. INTERSECTION OBSERVER – fade-in on scroll
  ───────────────────────────────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('is-visible'));
  }


  /* ─────────────────────────────────────────────
     5. SMOOTH SCROLL for anchor links
  ───────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
