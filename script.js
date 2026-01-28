// ============================================
// ADVANCED PORTFOLIO JAVASCRIPT
// ============================================

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Initializing Portfolio...');
  
  initializeTheme();
  initializeHamburgerMenu();
  initializeNavigation();
  initializeAnimations();
  initializeEventListeners();
  createAnimatedBackground();
  initializeEmailJS();
  
  console.log('Portfolio initialization complete!');
});

// ============================================
// EMAILJS INITIALIZATION
// ============================================

function initializeEmailJS() {
  // Initialize EmailJS with public key
  try {
    emailjs.init('EBBpQJ-t1tKCiN6OG');
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.warn('EmailJS initialization warning:', error.message);
    console.log('Note: For contact form to work, set up EmailJS account at emailjs.com');
  }
}

// ============================================
// NAVIGATION SYSTEM
// ============================================

function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const sectionId = link.getAttribute('data-section');
      navigateToSection(sectionId);
      closeMenu();
    });
  });

  // Update active nav on page load
  updateActiveNavLink('home');
  
  // Update active nav on scroll
  window.addEventListener('scroll', () => {
    updateActiveNavOnScroll();
  });
}

function navigateToSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    
    // Smooth scroll to section
    setTimeout(() => {
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
      window.scrollTo({
        top: targetSection.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }, 50);
  } else {
    console.warn(`Section with id '${sectionId}' not found`);
  }
  
  // Update active nav link
  updateActiveNavLink(sectionId);
}

function updateActiveNavLink(sectionId) {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === sectionId) {
      link.classList.add('active');
    }
  });
}

function updateActiveNavOnScroll() {
  const sections = document.querySelectorAll('.section');
  let currentSection = 'home';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  updateActiveNavLink(currentSection);
}

// ============================================
// HAMBURGER MENU
// ============================================

function initializeHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }
}

function closeMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
}

// ============================================
// THEME TOGGLE
// ============================================

function initializeTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  if (!themeToggle) return;
  
  // Set initial theme
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(savedTheme);
  
  updateThemeIcon(savedTheme === 'light');
  
  // Theme toggle click event
  themeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('light');
    
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    
    updateThemeIcon(isLight);
  });
}

function updateThemeIcon(isLight) {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.innerHTML = isLight 
      ? '<i class="fas fa-sun"></i>' 
      : '<i class="fas fa-moon"></i>';
  }
}

// ============================================
// ANIMATIONS
// ============================================

function initializeAnimations() {
  // Animate skill bars on scroll
  const skillItems = document.querySelectorAll('.skill-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  skillItems.forEach(item => observer.observe(item));
  
  // Animate stat numbers
  animateStatsOnScroll();
}

function animateStatsOnScroll() {
  const stats = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const finalValue = element.textContent;
        animateNumber(element, finalValue);
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, finalValue) {
  const numericValue = parseInt(finalValue);
  const startValue = 0;
  const duration = 2000;
  const startTime = Date.now();
  
  function updateNumber() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = Math.floor(startValue + (numericValue - startValue) * progress);
    
    element.textContent = currentValue + (finalValue.includes('%') ? '%' : '+');
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  }
  
  updateNumber();
}

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
  // CTA Buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (btn.hasAttribute('data-section')) {
        e.preventDefault();
        const sectionId = btn.getAttribute('data-section');
        navigateToSection(sectionId);
      }
    });
  });
  
  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  // Scroll to projects from home
  const projectButtons = document.querySelectorAll('button[data-section="projects"]');
  projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigateToSection('projects');
    });
  });
  
  // Scroll to contact from home
  const contactButtons = document.querySelectorAll('button[data-section="contact"]');
  contactButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navigateToSection('contact');
    });
  });
}

// ============================================
// CONTACT FORM
// ============================================

function handleContactForm(e) {
  e.preventDefault();
  
  // Get form elements with validation
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const messageInput = document.getElementById('formMessage');
  const statusDiv = document.getElementById('formStatus');
  const submitBtn = document.querySelector('.contact-form .btn-primary');
  
  // Check if all elements exist
  if (!nameInput || !emailInput || !messageInput || !statusDiv || !submitBtn) {
    console.error('Contact form elements not found');
    return;
  }
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  
  // Validation
  if (!name || !email || !message) {
    showFormStatus('❌ Please fill all fields', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showFormStatus('❌ Please enter a valid email', 'error');
    return;
  }
  
  // Update button state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  // Send email using EmailJS
  const templateParams = {
    to_email: 'nilansha777@gmail.com',
    from_name: name,
    from_email: email,
    message: message,
    phone: '+91 6389489942'
  };
  
  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS not loaded');
    showFormStatus('⚠️ Contact form not configured. Please contact via email: nilansha777@gmail.com or call: +91 6389489942', 'warning');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
    return;
  }
  
  // Attempt to send email
  emailjs.send('service_portfolio', 'template_contact', templateParams)
    .then((response) => {
      console.log('✅ Email sent successfully!', response);
      
      // Reset form
      document.getElementById('contactForm').reset();
      
      // Show success message
      showFormStatus('✅ Message sent successfully! Thank you for reaching out. I\'ll get back to you soon! 🎉', 'success');
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      
      // Clear status after 6 seconds
      setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.classList.remove('success', 'error', 'warning');
      }, 6000);
    })
    .catch((error) => {
      console.error('❌ Email send failed:', error);
      console.error('Error details:', {
        status: error.status,
        message: error.message,
        text: error.text
      });
      
      // Show appropriate error message
      let errorMsg = '❌ Failed to send message. ';
      if (!navigator.onLine) {
        errorMsg += 'Check your internet connection. ';
      } else if (error.status === 0) {
        errorMsg += 'Network error. ';
      } else if (error.status === 400 || error.status === 401 || error.status === 403) {
        errorMsg += 'EmailJS credentials not set up correctly. ';
      } else if (error.status === 404) {
        errorMsg += 'EmailJS service or template not found. ';
      }
      errorMsg += 'Contact: nilansha777@gmail.com or +91 6389489942';
      
      showFormStatus(errorMsg, 'error');
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      
      // Clear error after 8 seconds
      setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.classList.remove('error', 'warning');
      }, 8000);
    });
}

function showFormStatus(message, type) {
  const statusDiv = document.getElementById('formStatus');
  if (!statusDiv) return;
  
  statusDiv.textContent = message;
  statusDiv.className = `form-status ${type}`;
  statusDiv.style.display = 'block';
  
  // Add animation
  statusDiv.style.animation = 'fadeInUp 0.5s ease forwards';
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================
// ANIMATED BACKGROUND
// ============================================

function createAnimatedBackground() {
  const canvas = document.getElementById('canvas-container');
  
  // Create floating particles effect
  createParticles(canvas);
}

function createParticles(container) {
  const particleCount = 5;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 200 + 100}px;
      height: ${Math.random() * 200 + 100}px;
      background: radial-gradient(circle, rgba(37, 99, 235, ${Math.random() * 0.1}) 0%, transparent 70%);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 15 + 20}s ease-in-out infinite;
      filter: blur(40px);
      z-index: -1;
    `;
    container.appendChild(particle);
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================
// SMOOTH SCROLL POLYFILL
// ============================================

if (!('scrollBehavior' in document.documentElement.style)) {
  // Add smooth scroll polyfill for older browsers
  console.log('Smooth scroll not supported');
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Advanced Portfolio Loaded!', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cBuilt with HTML5, CSS3, and Pure JavaScript', 'font-size: 14px; color: #10b981;');
