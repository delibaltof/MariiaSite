/* ============================================================
   mariiaeats — main.js
   Edit the SITE object below to update all site content.
   Nothing is hardcoded in HTML — everything renders from here.
   ============================================================ */

const SITE = {
  name: 'Mariia',
  brand: 'mariiaeats',
  tagline: 'Transform your body, your life.',
  subheadline: 'Online fitness & nutrition coaching personalised for adults 30–50. Real results, no generic plans.',

  stats: [
    { value: '3+',   label: 'Years Experience' },
    { value: '80+',  label: 'Clients Transformed' },
    { value: '100%', label: 'Personalised Plans' },
  ],

  about: {
    image: 'https://picsum.photos/seed/mariia/600/800',
    bio: "I'm Mariia — certified personal trainer and nutrition coach. I help busy adults 30–50 lose weight, build strength and feel confident in their body. No cookie-cutter plans. Just real, sustainable results.",
    pills: ['Weight Loss', 'Strength Training', 'Nutrition Planning', 'Online Coaching'],
  },

  services: [
    { number: '01', title: 'Personal Training',   description: 'One-on-one sessions tailored to your goals, fitness level, and schedule.' },
    { number: '02', title: 'Nutrition Plan',       description: 'Custom meal plans built around your lifestyle, preferences, and targets.' },
    { number: '03', title: 'Online Coaching',      description: 'Full remote coaching with weekly check-ins, adjustments, and 24/7 support.' },
    { number: '04', title: 'Full Transformation',  description: 'Training + nutrition + mindset coaching — the complete package.' },
  ],

  pricing: [
    // TODO: update pricing before launch
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      featured: false,
      features: ['Custom workout plan', 'Nutrition guidelines', 'Email support', 'Monthly check-in'],
    },
    {
      name: 'Transformation',
      price: '$299',
      period: '/month',
      featured: true,
      badge: 'Most Popular',
      features: ['Everything in Starter', 'Weekly video calls', 'Custom meal plan', 'Daily messaging', 'Progress tracking'],
    },
    {
      name: 'Elite',
      price: '$499',
      period: '/month',
      featured: false,
      features: ['Everything in Transformation', 'Unlimited calls', 'Supplement guidance', 'Priority support', 'Mindset coaching'],
    },
  ],

  testimonials: [
    { initials: 'AK', name: 'Anna K.',   result: '-8kg · 3 months',       stars: 5, quote: "Mariia completely changed my relationship with food and exercise. I've never felt stronger or more confident." },
    { initials: 'MP', name: 'Maria P.',  result: '-12kg · 5 months',      stars: 5, quote: "The personalised approach made all the difference. Finally a plan that fits my busy life as a mum." },
    { initials: 'OB', name: 'Olga B.',   result: '+6kg muscle · 4 months', stars: 5, quote: "I came to lose weight, I stayed to get strong. Best investment I've made in myself." },
  ],

  guides: [
    { emoji: '🥗', title: '7-Day Kickstart Meal Plan',   description: 'A simple, practical meal plan to start your transformation today.',               file: 'guides/guide-1.pdf' },
    { emoji: '💪', title: 'Home Workout Blueprint',       description: '4-week bodyweight training plan — no gym required.',                              file: 'guides/guide-2.pdf' },
    { emoji: '📊', title: 'Calorie & Macro Guide',        description: 'Learn how to calculate your targets and track without obsessing.',                file: 'guides/guide-3.pdf' },
  ],

  certificates: [
    // TODO: update with real certificates
    { title: 'Certified Personal Trainer', institution: 'NASM',               year: '2021' },
    { title: 'Nutrition Coach',            institution: 'Precision Nutrition', year: '2022' },
    { title: 'Sports Nutrition',           institution: 'ISSA',               year: '2022' },
    { title: 'Weight Loss Specialist',     institution: 'NASM',               year: '2023' },
  ],

  social: {
    instagram: 'https://instagram.com/mariiaeats', // TODO: update
    telegram:  'https://t.me/mariiaeats',           // TODO: update
    facebook:  'https://facebook.com/mariiaeats',   // TODO: update
    messenger: 'https://m.me/mariiaeats',           // TODO: update
  },

  formspree: 'https://formspree.io/f/XXXXXXXX', // TODO: replace with real Formspree endpoint
}

/* ============================================================
   SVG Icon Library
   ============================================================ */
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>`,
  telegram:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 5L2 12.5l7 1M21 5l-4 15-8-5.5M21 5L9 13.5m0 0V19l3-2.5"/></svg>`,
  facebook:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  messenger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.951 1.46 5.59 3.745 7.307V22l3.416-1.879C10.024 20.368 11 20.487 12 20.487c5.523 0 10-4.145 10-9.244S17.523 2 12 2z"/><path d="M7.5 13.5l2.25-2.5L12 13l2.5-2.5 2.25 2.5" stroke-linecap="round"/></svg>`,

  /* Service icons */
  training: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4v16M18 4v16M2 8h4m12 0h4M2 16h4m12 0h4"/></svg>`,
  nutrition: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  coaching:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h2m3 0h5M7 12h5m4 0h1"/></svg>`,
  transform: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/><circle cx="12" cy="12" r="3.5"/></svg>`,

  /* Cert seal */
  seal: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="24" r="18" stroke-dasharray="4 3"/><circle cx="24" cy="24" r="12"/><path d="M24 16l2.09 5.91L32 22l-5.27 3.91L28.18 32 24 28.27 19.82 32l2.45-6.09L17 22l5.91-.09L24 16z" fill="currentColor" stroke="none" opacity="0.8"/></svg>`,
}

const SERVICE_ICONS = [ICONS.training, ICONS.nutrition, ICONS.coaching, ICONS.transform]

/* ============================================================
   DOM helpers
   ============================================================ */
const qs  = (sel, ctx = document) => ctx.querySelector(sel)
const qsa = (sel, ctx = document) => ctx.querySelectorAll(sel)

function el(tag, cls, html) {
  const e = document.createElement(tag)
  if (cls)  e.className = cls
  if (html) e.innerHTML = html
  return e
}

/* ============================================================
   Render: Navbar
   ============================================================ */
function renderNavbar() {
  /* Logo */
 const logoText = `<img src="images/logo.png" alt="mariiaeats">`
  qs('.logo').innerHTML = logoText
  qs('.footer-logo') && (qs('.footer-logo').innerHTML = logoText)

  /* Nav links */
  const navItems = [
    { label: 'About',       href: '#about' },
    { label: 'Services',    href: '#services' },
    { label: 'Pricing',     href: '#pricing' },
    { label: 'Reviews',     href: '#reviews' },
    { label: 'Free Guides', href: '#guides' },
  ]

  const navLinks    = qs('.nav-links')
  const drawerLinks = qs('.drawer-links')

  navItems.forEach(item => {
    const li1 = el('li')
    li1.innerHTML = `<a href="${item.href}">${item.label}</a>`
    navLinks.appendChild(li1)

    const li2 = el('li')
    li2.innerHTML = `<a href="${item.href}">${item.label}</a>`
    drawerLinks.appendChild(li2)
  })

  qs('.nav-cta').textContent    = 'Contact me'
  qs('.drawer-cta').textContent = 'Contact me'
}

/* ============================================================
   Render: Hero
   ============================================================ */
function renderHero() {
//qs('.hero-h1').innerHTML = `1Transform your body,<em>your life.</em>`
  qs('.hero-h1').innerHTML = `You don't need another diet,<em> you need a system.</em>`
  qs('.hero-sub').textContent = SITE.subheadline


  const statsWrap = qs('.hero-stats')
  SITE.stats.forEach(s => {
    const stat = el('div', 'hero-stat fade-up')
    stat.innerHTML = `
      <span class="hero-stat-value">${s.value}</span>
      <span class="hero-stat-label">${s.label}</span>
    `
    statsWrap.appendChild(stat)
  })
}

/* ============================================================
   Render: About
   ============================================================ */
function renderAbout() {
  const img = qs('.about-img')
  img.src = SITE.about.image
  img.alt = `${SITE.name} — fitness and nutrition coach`

  qs('.about-badge').textContent = '✦ 3+ Years Experience'

  const text = qs('.about-text')
  qs('.section-tag', text).textContent  = 'About Me'
  qs('.about-heading', text).innerHTML  = `Hi, I'm <em>Mariia</em>`
  qs('.about-bio', text).textContent    = SITE.about.bio

  const pills = qs('.about-pills', text)
  SITE.about.pills.forEach(p => {
    const span = el('span', 'pill', p)
    pills.appendChild(span)
  })
}

/* ============================================================
   Render: Services
   ============================================================ */
function renderServices() {
  const grid = qs('.services-grid')
  SITE.services.forEach((s, i) => {
    const card = el('article', 'service-card fade-up')
    card.innerHTML = `
      <span class="service-num">${s.number}</span>
      <div class="service-icon">${SERVICE_ICONS[i]}</div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
    `
    grid.appendChild(card)
  })
}

/* ============================================================
   Render: Pricing
   ============================================================ */
function renderPricing() {
  const grid = qs('.pricing-grid')
  SITE.pricing.forEach(plan => {
    const card = el('article', `pricing-card fade-up${plan.featured ? ' featured' : ''}`)
    const badge    = plan.badge ? `<div class="pricing-badge">${plan.badge}</div>` : ''
    const features = plan.features.map(f => `<li class="pricing-feature">${f}</li>`).join('')
    card.innerHTML = `
      ${badge}
      <h3 class="pricing-name">${plan.name}</h3>
      <div class="pricing-price">
        <span class="pricing-amount">${plan.price}</span>
        <span class="pricing-period">${plan.period}</span>
      </div>
      <div class="pricing-divider"></div>
      <ul class="pricing-features">${features}</ul>
      <a href="#contact" class="btn ${plan.featured ? 'btn-pink' : 'btn-ghost'}">Get Started</a>
    `
    grid.appendChild(card)
  })
}

/* ============================================================
   Render: Testimonials
   ============================================================ */
function renderTestimonials() {
  const grid   = qs('.testimonials-grid')
  const delays = [0, 150, 300]
  SITE.testimonials.forEach((t, i) => {
    const card = el('article', 'testimonial-card fade-up')
    card.style.transitionDelay = `${delays[i]}ms`
    const stars = '★'.repeat(t.stars)
    card.innerHTML = `
      <div class="testimonial-stars" aria-label="${t.stars} stars">${stars}</div>
      <blockquote class="testimonial-quote">"${t.quote}"</blockquote>
      <div class="testimonial-author">
        <div class="testimonial-avatar" aria-hidden="true">${t.initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <span class="testimonial-result">${t.result}</span>
        </div>
      </div>
    `
    grid.appendChild(card)
  })
}

/* ============================================================
   Render: Free Guides
   ============================================================ */
function renderGuides() {
  const grid   = qs('.guides-grid')
  const delays = [0, 150, 300]
  SITE.guides.forEach((g, i) => {
    const card = el('article', 'guide-card fade-up')
    card.style.transitionDelay = `${delays[i]}ms`
    card.innerHTML = `
      <div class="guide-emoji" aria-hidden="true">${g.emoji}</div>
      <h3 class="guide-title">${g.title}</h3>
      <p class="guide-desc">${g.description}</p>
      <a href="${g.file}" download class="btn btn-ghost">↓ Download Free</a>
    `
    grid.appendChild(card)
  })
}

/* ============================================================
   Render: Certificates
   ============================================================ */
function renderCertificates() {
  const grid = qs('.certs-grid')
  SITE.certificates.forEach(c => {
    const card = el('article', 'cert-card fade-up')
    card.innerHTML = `
      <div class="cert-seal">${ICONS.seal}</div>
      <h3 class="cert-title">${c.title}</h3>
      <p class="cert-institution">${c.institution}</p>
      <p class="cert-year">${c.year}</p>
    `
    grid.appendChild(card)
  })
}

/* ============================================================
   Render: Contact
   ============================================================ */
function renderContact() {
  qs('.contact-desc').textContent =
    "Ready to start your transformation? Fill in the form and I'll get back to you within 24 hours. No obligations — just a conversation about your goals."

  const socials = qs('.contact-socials')
  const socialData = [
    { key: 'instagram', label: 'Instagram @mariiaeats' },
    { key: 'telegram',  label: 'Telegram @mariiaeats' },
    { key: 'facebook',  label: 'Facebook mariiaeats' },
    { key: 'messenger', label: 'Messenger mariiaeats' },
  ]
  socialData.forEach(s => {
    const a = document.createElement('a')
    a.className = 'social-link'
    a.href      = SITE.social[s.key]
    a.target    = '_blank'
    a.rel       = 'noopener noreferrer'
    a.innerHTML = `${ICONS[s.key]}<span>${s.label}</span>`
    socials.appendChild(a)
  })
}

/* ============================================================
   Render: Footer
   ============================================================ */
function renderFooter() {
  qs('.footer-copy').textContent = `© ${new Date().getFullYear()} mariiaeats. All rights reserved.`

  const socials = qs('.footer-socials')
  ;['instagram', 'telegram', 'facebook', 'messenger'].forEach(key => {
    const a = document.createElement('a')
    a.className = 'footer-social-link'
    a.href      = SITE.social[key]
    a.target    = '_blank'
    a.rel       = 'noopener noreferrer'
    a.setAttribute('aria-label', key.charAt(0).toUpperCase() + key.slice(1))
    a.innerHTML = ICONS[key]
    socials.appendChild(a)
  })
}

/* ============================================================
   Navbar: scroll blur
   ============================================================ */
function initNavbarScroll() {
  const navbar = qs('#navbar')
  const toggle = () => navbar.classList.toggle('scrolled', window.scrollY > 20)
  window.addEventListener('scroll', toggle, { passive: true })
  toggle()
}

/* ============================================================
   Mobile: hamburger drawer
   ============================================================ */
function initMobileMenu() {
  const hamburger = qs('.hamburger')
  const drawer    = qs('.mobile-drawer')
  const overlay   = qs('.drawer-overlay')
  const closeBtn  = qs('.drawer-close')

  function openDrawer() {
    drawer.classList.add('open')
    overlay.classList.add('open')
    hamburger.classList.add('open')
    hamburger.setAttribute('aria-expanded', 'true')
    document.body.style.overflow = 'hidden'
  }

  function closeDrawer() {
    drawer.classList.remove('open')
    overlay.classList.remove('open')
    hamburger.classList.remove('open')
    hamburger.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
  }

  hamburger.addEventListener('click', openDrawer)
  closeBtn.addEventListener('click', closeDrawer)
  overlay.addEventListener('click', closeDrawer)
  qs('.drawer-links').addEventListener('click', e => { if (e.target.tagName === 'A') closeDrawer() })
  qs('.drawer-cta').addEventListener('click', closeDrawer)

  /* Close on Escape */
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer() })
}

/* ============================================================
   Smooth scroll (offset for fixed navbar)
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const target = document.querySelector(a.getAttribute('href'))
    if (!target) return
    e.preventDefault()
    const offset = qs('#navbar').offsetHeight
    const top    = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  })
}

/* ============================================================
   Intersection Observer: fade-up animations
   ============================================================ */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
}

/* ============================================================
   Contact form: validation + Formspree submit
   ============================================================ */
function initForm() {
  const form      = qs('#contact-form')
  const submitBtn = qs('#submit-btn')
  const successEl = qs('#form-success')
  const errorEl   = qs('#form-error-msg')
  if (!form) return

  /* Show / clear field errors */
  function showError(id, msg) {
    const field = qs(`#${id}`)
    const err   = qs(`#${id}-error`)
    if (field) field.classList.add('error')
    if (err)   err.textContent = msg
  }
  function clearErrors() {
    qsa('.form-group input, .form-group select, .form-group textarea').forEach(f => f.classList.remove('error'))
    qsa('.field-error').forEach(e => (e.textContent = ''))
  }

  /* Validate all required fields */
  function validate() {
    clearErrors()
    let ok = true

    const name = qs('#name').value.trim()
    if (name.length < 2) { showError('name', 'Please enter your full name.'); ok = false }

    const age = parseInt(qs('#age').value, 10)
    if (!age || age < 16 || age > 100) { showError('age', 'Please enter a valid age (16–100).'); ok = false }

    const email = qs('#email').value.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('email', 'Please enter a valid email address.'); ok = false }

    if (!qs('#goal').value)    { showError('goal',    'Please select your goal.'); ok = false }
    if (!qs('#service').value) { showError('service', 'Please select a service.'); ok = false }

    const msg = qs('#message').value.trim()
    if (msg.length < 10) { showError('message', 'Please tell me a bit more about your goals.'); ok = false }

    return ok
  }

  /* Submit handler */
  form.addEventListener('submit', async e => {
    e.preventDefault()
    if (!validate()) return

    submitBtn.classList.add('loading')
    submitBtn.disabled = true
    successEl.style.display  = 'none'
    errorEl.style.display    = 'none'

    try {
      const res = await fetch(SITE.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        successEl.textContent = "✓ Message sent! I'll get back to you within 24 hours."
        successEl.style.display = 'block'
        form.reset()
        clearErrors()
      } else {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      errorEl.textContent   = err.message || 'Something went wrong. Please email me directly.'
      errorEl.style.display = 'block'
    } finally {
      submitBtn.classList.remove('loading')
      submitBtn.disabled = false
    }
  })

  /* Clear error highlight on input */
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error')
      const err = qs(`#${field.id}-error`)
      if (err) err.textContent = ''
    })
  })
}

/* ============================================================
   Boot — render everything, then init interactions
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar()
  renderHero()
  renderAbout()
  renderServices()
  renderPricing()
  renderTestimonials()
  renderGuides()
  renderCertificates()
  renderContact()
  renderFooter()

  initNavbarScroll()
  initMobileMenu()
  initSmoothScroll()
  initAnimations()
  initForm()
})
