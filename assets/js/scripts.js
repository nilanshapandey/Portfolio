
  /* ─── NAVBAR SCROLL ─── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ─── MOBILE MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  if (hamburger && mobileMenu && closeMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
    function closeMobile() {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    closeMenu.addEventListener('click', closeMobile);
    document.querySelectorAll('.mobile-nav-link').forEach(a => {
      a.addEventListener('click', closeMobile);
    });
  }

  /* ─── SCROLL REVEAL ─── */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ─── SKILL BAR ANIMATION ─── */
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (skillBars.length) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    skillBars.forEach(bar => barObserver.observe(bar));
  }

  /* ─── PROJECT FILTER TABS ─── */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  if (filterTabs.length && projectCards.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        projectCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ─── PARTICLES CANVAS ─── */
  (function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles;
    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();
    function createParticles() {
      const count = Math.min(60, Math.floor((W * H) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.1
      }));
    }
    createParticles();
    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,107,107,${p.alpha})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      requestAnimationFrame(draw);
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) draw();
  })();

  /* ─── FORM SUBMIT ─── */
  function handleFormSubmit(btn) {
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();
    if (!name || !email || !message) {
      btn.textContent = 'Please fill required fields';
      btn.style.background = '#6b6bff';
      setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 2000);
      return;
    }
    btn.textContent = 'Message Sent!';
    btn.style.background = '#4ecdc4';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; }, 3000);
  }
