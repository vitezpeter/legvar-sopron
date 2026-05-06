import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const galleryImages = [
  { src: '/gallery/Tibszi-legvar-ugralovar-sopron.jpg', alt: 'Tibszi légvár ugrálóvár Sopron', label: 'Tibszi Légvár Sopron' },
  { src: '/gallery/legvar-berles-sopron.jpg', alt: 'Légvár bérlés Sopronban', label: 'Légvár bérlés Sopronban' },
  { src: '/gallery/csuszdas-legvar-sopron.jpg', alt: 'Csúszdás légvár Sopron', label: 'Csúszdás ugrálóvár' },
  { src: '/gallery/ugralovar-sopron.jpg', alt: 'Ugrálóvár bérlés Sopron', label: 'Ugrálóvár Sopronban' },
  { src: '/gallery/legvar-csuszda.jpg', alt: 'Légvár csúszda bérlés', label: 'Légvár csúszdával' },
  { src: '/gallery/legvar-sopron.jpg', alt: 'Légvár Sopron gyerekzsúr', label: 'Gyerekzsúr légvárral' },
  { src: '/gallery/sopron-legvar-berles.jpg', alt: 'Sopron légvár bérlés', label: 'Rendezvény légvárral' },
  { src: '/gallery/legvar-szuletesnapra.jpg', alt: 'Légvár születésnapra', label: 'Születésnapra is!' },
  { src: '/gallery/ugralovar-sopron-tibszi-legvar.jpg', alt: 'Tibszi ugrálóvár Sopron', label: 'Tibszi Légvár' },
  { src: '/gallery/berelheto-legvar-sopron.jpg', alt: 'Bérelhető légvár Sopron', label: 'Bérelhető légvárak' },
  { src: '/gallery/legvar_csuszda_sopronban.jpg', alt: 'Légvár csúszda Sopronban', label: 'Csúszda Sopronban' },
  { src: '/gallery/sopron-legvar.jpg', alt: 'Sopron légvár', label: 'Sopron legvár park' },
  { src: '/gallery/legvar-darts-sopron.jpg', alt: 'Légvár darts Sopron', label: 'Darts játék légvár' },
]

const faqs = [
  {
    q: 'Mennyibe kerül a légvár bérlés Sopronban?',
    a: 'Az árak 30 000 Ft-tól indulnak az egyszerűbb típusoknál, a kombinált/csúszdás modellekért 45 000 Ft az egységes napi díj. Az ár tartalmazza a kiszállítást, felszerelést és lebontást Sopronon és 15 km-es körzetén belül.',
  },
  {
    q: 'Milyen légvárat érdemes bérelni gyerekeknek?',
    a: 'Kisebb gyerekeknek (3–7 év) tökéletes a tündér- vagy bohóclégvár. Aktívabb, nagyobb gyerekeknek ajánljuk a csúszdás kombinált modelleket, vagy a Dinoszaurusz, Pókember témájú légvárakat. Szívesen segítünk a választásban!',
  },
  {
    q: 'Mennyi időre lehet légvárat bérelni?',
    a: 'Az alapdíj egy teljes rendezvénynapra (általában 4–8 óra) vonatkozik. Hosszabb bérletre és ismétlő megrendelőknek külön kedvezményt adunk – érdeklődjön telefonon!',
  },
  {
    q: 'Milyen területre van szükség a légvárhoz?',
    a: 'A kombinált modellekhez minimum 6×6 m-es sík terület kell, a csúszdás típushoz 6×5 m. A darts/fejszehajítós játékokhoz elegendő 4×4 m. Szükség van áramcsatlakozásra (230 V) is a felfúváshoz.',
  },
  {
    q: 'Van-e ingyen kiszállítás Sopronban?',
    a: 'Igen! Sopron területén és 15 km-es körzetében a kiszállítás, felszerelés és lebontás díjmentes. Ezen kívülre is vállalunk megrendelést – az árat egyedileg egyeztetjük.',
  },
  {
    q: 'Milyen rendezvényre lehet légvárat bérelni?',
    a: 'Gyerekzsúr, születésnap, óvodai/iskolai rendezvény, falunap, céges family day, esküvői fogadás, névnap – bármilyen eseményre vállalunk kiszállást!',
  },
]

const services = [
  { icon: '🏰', title: 'Kiszállítás & Felszerelés', desc: 'Elhozzuk, felállítjuk, majd a rendezvény végén lebontjuk és elvisszük. Ön csak élvezi a bulit!' },
  { icon: '⚡', title: 'Gyors & Megbízható', desc: 'Időben érkezünk, profi csapatunk gyorsan dolgozik. Napok alatt megszervezzük a bérlést.' },
  { icon: '✅', title: 'Biztonság & Minőség', desc: 'Minden légvárunk rendszeresen ellenőrzött, biztonságos és tiszta. Gyerekek nyugodtan ugrálhatnak.' },
  { icon: '🎉', title: '20+ Légvár', desc: 'Tündér, kalóz, dínó, Pókember, csúszdás óriás – mindenkinek van megfelelő típus a flottánkból.' },
  { icon: '🎨', title: 'Kiegészítő Szórakoztató Programok', desc: 'Arcfestés, csillámtetoválás, lufihajtogatás – teljes körű gyerekprogram egy helyen.' },
  { icon: '📍', title: 'Sopron & Térsége', desc: 'Sopront és 15 km-es körzetét ingyen kiszolgáljuk. Távolabbra is vállalunk rendelést.' },
]

const howSteps = [
  { num: '1', title: 'Érdeklődjön', desc: 'Hívjon vagy írjon nekünk – egyeztetjük a dátumot, helyszínt és a légvár típusát.' },
  { num: '2', title: 'Foglalja le', desc: 'Megerősítjük a foglalást, és visszajelzünk az összes részletről.' },
  { num: '3', title: 'Mi kiszállunk', desc: 'Pontosan érkezünk, felállítjuk a légvárat, elmagyarázzuk a szabályokat.' },
  { num: '4', title: 'Ugrálás & Móka!', desc: 'Gyerekek boldogok, szülők pihennek – a buli végén mi gondoskodunk a bontásról is.' },
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null)
  const [formState, setFormState] = useState<'idle' | 'submitted'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  useReveal()

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitted')
  }

  return (
    <>
      {/* NAV */}
      <nav className="site-nav" role="navigation" aria-label="Főnavigáció">
        <a href="#hero" className="nav-logo" aria-label="Tibszi Légvár Sopron főoldal">
          <div className="nav-logo-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          Tibszi Légvár
        </a>
        <ul className="nav-links">
          <li><a href="#szolgaltatasok">Szolgáltatások</a></li>
          <li><a href="#galeria">Galéria</a></li>
          <li><a href="#arak">Árak</a></li>
          <li><a href="#gyik">GYIK</a></li>
          <li><a href="#foglalas" className="nav-cta">Foglaljon most</a></li>
        </ul>
        <button
          className="nav-mobile-toggle"
          aria-label="Mobilmenü"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {mobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </nav>

      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`} role="menu">
        {[['#szolgaltatasok','Szolgáltatások'],['#galeria','Galéria'],['#arak','Árak'],['#gyik','GYIK']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>{label}</a>
        ))}
        <a href="#foglalas" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>Foglaljon most</a>
      </div>

      {/* HERO */}
      <section id="hero" className="hero" aria-label="Légvár bérlés Sopron – főoldal">
        <div className="hero-bubbles" aria-hidden="true">
          {[1,2,3,4,5,6].map(n => <div key={n} className="bubble" />)}
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Sopron #1 Légvár Bérlés
            </div>
            <h1 className="hero-title">
              <span className="highlight">Légvár bérlés</span>{' '}
              <span className="accent">Sopronban</span>
              {' '}– örömteli ugrálás minden gyereknek!
            </h1>
            <p className="hero-desc">
              20+ ugrálóvár gyerekzsúrra, születésnapra és rendezvényekre. Kiszállítás, felszerelés, lebontás – minden benne van az árban. Ingyen kiszállás Sopron és 15 km-es körzetében!
            </p>
            <div className="hero-ctas">
              <a href="#foglalas" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.3 19.79 19.79 0 0 1 1.61 2.7 2 2 0 0 1 3.6.52h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 15.5z"/></svg>
                Hívjon most!
              </a>
              <a href="#galeria" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Légvárak megtekintése
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">20+</span>
                <span className="stat-label">Légvár típus</span>
              </div>
              <div className="stat">
                <span className="stat-num">15 km</span>
                <span className="stat-label">Ingyen kiszállás</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Elégedett ügyfél</span>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img
              src="/gallery/Tibszi-legvar-ugralovar-sopron.jpg"
              alt="Tibszi légvár ugrálóvár bérlés Sopron"
              className="hero-img-main"
              width={600}
              height={450}
              loading="eager"
            />
            <div className="hero-img-badge">
              <span className="hero-img-badge-dot" />
              Elérhető rendeléssel
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar" role="complementary" aria-label="Miért minket válasszon">
        <div className="trust-bar-inner">
          {[
            { icon: '✓', text: 'Kiszállítás + Felszerelés + Lebontás' },
            { icon: '✓', text: 'Ingyen kiszállás Sopron 15 km' },
            { icon: '✓', text: 'Biztonságos, ellenőrzött légvárak' },
            { icon: '✓', text: 'Gyors foglalás – hívjon most!' },
            { icon: '✓', text: 'Arcfestés & Csillámtetoválás is!' },
          ].map(({ icon, text }) => (
            <div key={text} className="trust-item">
              <span className="trust-icon" aria-hidden="true">{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="szolgaltatasok" className="section services-section">
        <div className="section-inner">
          <div className="section-header reveal">
            <span className="section-eyebrow">Miért minket válasszon?</span>
            <h2 className="section-title">Teljes körű légvár bérlés<br />Sopronban és környékén</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              Mindent mi intézünk – Ön csak élvezi a rendezvényt. Megbízható, profi csapat, gyors kiszállás.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article key={s.title} className={`service-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="service-card-icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="section gallery-section">
        <div className="section-inner">
          <div className="section-header reveal">
            <span className="section-eyebrow">Légváraink</span>
            <h2 className="section-title">Válassza ki kedvenc légvárát!</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              Tündér, kalóz, dínó, pókember, csúszdás óriás – 20+ típus gyerekeknek és rendezvényekre. Kattintson a képekre a nagyobb nézethez!
            </p>
          </div>
          <div className="gallery-grid reveal">
            {galleryImages.map((img, i) => (
              <figure
                key={img.src}
                className="gallery-item"
                onClick={() => setLightboxImg({ src: img.src, alt: img.alt })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightboxImg({ src: img.src, alt: img.alt })}
                aria-label={`Kép megtekintése: ${img.label}`}
                style={{ margin: 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 4 ? 'eager' : 'lazy'}
                  width={400}
                  height={300}
                />
                <div className="gallery-item-overlay" aria-hidden="true">
                  <span className="gallery-item-label">{img.label}</span>
                </div>
              </figure>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} className="reveal">
            <a href="#foglalas" className="btn-primary" style={{ display: 'inline-flex' }}>
              Foglaljon légvárat most
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="arak" className="section pricing-section">
        <div className="section-inner">
          <div className="section-header reveal">
            <span className="section-eyebrow">Átlátható Árak</span>
            <h2 className="section-title">Mennyibe kerül a légvár bérlés?</h2>
            <p className="section-subtitle" style={{ margin: '1rem auto 0' }}>
              Nincsenek rejtett díjak – az ár tartalmaz mindent. Kiszállítás, felszerelés, lebontás ingyen Sopron 15 km-es körzetében.
            </p>
          </div>
          <div className="pricing-cards">
            <article className="pricing-card reveal">
              <span className="pricing-icon" aria-hidden="true">🎪</span>
              <h3 className="pricing-name">Alap Légvár</h3>
              <div className="pricing-price">30 000 Ft</div>
              <div className="pricing-period">/ rendezvénynap</div>
              <ul className="pricing-features">
                <li>Bohóc, törpe, darts & fejszehajítás</li>
                <li>Kiszállítás + felszerelés</li>
                <li>Lebontás a rendezvény végén</li>
                <li>Sopron 15 km-es körzet: ingyen</li>
                <li>Biztonsági útmutató mellékelt</li>
              </ul>
              <a href="#foglalas" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Foglaljon</a>
            </article>
            <article className="pricing-card featured reveal reveal-delay-2">
              <span className="pricing-icon" aria-hidden="true">🏰</span>
              <h3 className="pricing-name">Prémium Légvár</h3>
              <div className="pricing-price">45 000 Ft</div>
              <div className="pricing-period">/ rendezvénynap</div>
              <ul className="pricing-features">
                <li>Tündér, kalóz, dínó, Pókember, csúszdás…</li>
                <li>Kombinált ugrálóvár + csúszda</li>
                <li>Kiszállítás + felszerelés + lebontás</li>
                <li>Sopron 15 km-es körzet: ingyen</li>
                <li>Felügyelt óriáscsúszdák is elérhetők</li>
              </ul>
              <a href="#foglalas" className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'white', color: 'var(--orange)' }}>Foglaljon</a>
            </article>
          </div>
          <p className="pricing-note reveal">
            Arcfestés, csillámtetoválás, lufihajtogatás külön megrendelhető.<br />
            Kérdése van? Hívjon: <a href="tel:+36205227000" style={{ color: 'var(--yellow)', fontWeight: 800 }}>+36 20 522 7000</a>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-section" aria-labelledby="how-title">
        <div className="section-inner">
          <div className="section-header reveal">
            <span className="section-eyebrow">Egyszerű folyamat</span>
            <h2 className="section-title" id="how-title">Hogyan működik a légvár bérlés?</h2>
          </div>
          <div className="how-steps">
            {howSteps.map((step, i) => (
              <div key={step.num} className={`how-step reveal reveal-delay-${i + 1}`}>
                <div className="how-step-num" aria-hidden="true">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="gyik" className="section faq-section">
        <div className="section-inner">
          <div className="section-header reveal">
            <span className="section-eyebrow">Gyakori kérdések</span>
            <h2 className="section-title">Minden, amit tudni érdemes<br />a légvár bérlésről</h2>
          </div>
          <div className="faq-list reveal">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="faq-question-icon" aria-hidden="true">+</span>
                </button>
                <div className="faq-answer" aria-hidden={openFaq !== i}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING */}
      <section id="foglalas" className="section contact-section">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="section-eyebrow">Elérhetőség & Foglalás</span>
              <h2 className="section-title">Foglaljon légvárat most!</h2>
              <p>
                Hívjon minket bátran, vagy töltse ki a foglalási űrlapot – rövid időn belül visszajelzünk. Gyerekzsúr, születésnap, rendezvény – mindegy, mi segítünk!
              </p>
              <div className="contact-methods">
                <a href="tel:+36205227000" className="contact-method" aria-label="Hívjon minket: +36 20 522 7000">
                  <span className="contact-method-icon phone" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.3 19.79 19.79 0 0 1 1.61 2.7 2 2 0 0 1 3.6.52h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 15.5z"/></svg>
                  </span>
                  <span className="contact-method-text">
                    <span className="contact-method-label">Telefon</span>
                    <span className="contact-method-value">+36 20 522 7000</span>
                  </span>
                </a>
                <a href="tel:+36203300632" className="contact-method" aria-label="Hívjon minket: +36 20 330 0632">
                  <span className="contact-method-icon phone" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.3 19.79 19.79 0 0 1 1.61 2.7 2 2 0 0 1 3.6.52h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.52 15.5z"/></svg>
                  </span>
                  <span className="contact-method-text">
                    <span className="contact-method-label">Telefon 2</span>
                    <span className="contact-method-value">+36 20 330 0632</span>
                  </span>
                </a>
                <a href="mailto:pethotibor01@gmail.com" className="contact-method" aria-label="Írjon emailt">
                  <span className="contact-method-icon email" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff6b00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <span className="contact-method-text">
                    <span className="contact-method-label">E-mail</span>
                    <span className="contact-method-value">pethotibor01@gmail.com</span>
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559879000566"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                  aria-label="Facebook oldal: Tibszi Légvár Sopron"
                >
                  <span className="contact-method-icon fb" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877f2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  <span className="contact-method-text">
                    <span className="contact-method-label">Facebook</span>
                    <span className="contact-method-value">Tibszi Légvár Sopron</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="booking-form-card reveal reveal-delay-2">
              {formState === 'submitted' ? (
                <div className="form-success">
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                  <div>Köszönjük az üzenetét!</div>
                  <p style={{ color: 'var(--gray)', fontWeight: 400, fontSize: '0.95rem', marginTop: '0.5rem' }}>
                    Hamarosan visszajelzünk. Sürgős esetben hívjon: +36 20 522 7000
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleFormSubmit} noValidate>
                  <h3>Foglalási érdeklődés</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nev">Neve *</label>
                      <input id="nev" name="nev" type="text" placeholder="Pl. Kiss Andrea" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefon">Telefonszám *</label>
                      <input id="telefon" name="telefon" type="tel" placeholder="+36 ..." required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="datum">Rendezvény dátuma *</label>
                      <input id="datum" name="datum" type="date" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="legvar">Légvár típusa</label>
                      <select id="legvar" name="legvar">
                        <option value="">– Válasszon –</option>
                        <optgroup label="Prémium (45 000 Ft)">
                          <option>Tündér légvár</option>
                          <option>Hős légvár</option>
                          <option>Kalózhajó</option>
                          <option>Kalózkapitány</option>
                          <option>Dinoszaurusz légvár</option>
                          <option>Pókember légvár</option>
                          <option>T-Rex légvár</option>
                          <option>Kék Szörny</option>
                          <option>Zsiráf légvár</option>
                          <option>Oroszlán légvár</option>
                          <option>Panda légvár</option>
                          <option>Dupla csúszda</option>
                          <option>Szivárvány ugrálóvár</option>
                        </optgroup>
                        <optgroup label="Alap (30 000 Ft)">
                          <option>Fejszehajítás</option>
                          <option>Darts foci</option>
                          <option>Törpe légvár</option>
                          <option>Bohóc légvár</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="helyszin">Helyszín / cím</label>
                    <input id="helyszin" name="helyszin" type="text" placeholder="Sopron, ..." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="uzenet">Üzenet / egyéb kérés</label>
                    <textarea id="uzenet" name="uzenet" placeholder="Pl. hány gyerek, mettől meddig, egyéb igények..." />
                  </div>
                  <button type="submit" className="form-submit">
                    Küldés – visszahívást kérek
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--gray)', marginTop: '0.8rem', marginBottom: 0 }}>
                    Adatait kizárólag a foglalás lebonyolításához használjuk.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-logo">Tibszi Légvár Sopron</div>
          <p className="footer-tagline">Légvár bérlés · Ugrálóvár kölcsönzés · Sopron és térsége</p>
          <ul className="footer-links">
            <li><a href="#szolgaltatasok">Szolgáltatások</a></li>
            <li><a href="#galeria">Galéria</a></li>
            <li><a href="#arak">Árak</a></li>
            <li><a href="#gyik">GYIK</a></li>
            <li><a href="#foglalas">Foglalás</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61559879000566" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
          <div className="footer-bottom">
            <p>
              <a href="tel:+36205227000" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>+36 20 522 7000</a>
              {' · '}
              <a href="mailto:pethotibor01@gmail.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>pethotibor01@gmail.com</a>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              © {new Date().getFullYear()} Tibszi Légvár Sopron. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <div
        className={`lightbox${lightboxImg ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Képnézegető"
        onClick={() => setLightboxImg(null)}
      >
        <button
          className="lightbox-close"
          onClick={() => setLightboxImg(null)}
          aria-label="Bezárás"
        >
          ×
        </button>
        {lightboxImg && (
          <img
            src={lightboxImg.src}
            alt={lightboxImg.alt}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </>
  )
}
