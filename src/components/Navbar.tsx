import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useScrollShadow} from '@/src/hooks/useScrollShadow';

const LANGUAGES = [
  {code: 'ar', label: 'العربية'},
  {code: 'fr', label: 'FR'},
  {code: 'en', label: 'EN'},
] as const;

export default function Navbar() {
  const {t, i18n} = useTranslation();
  const scrolled = useScrollShadow();
  const [mobileOpen, setMobileOpen] = useState(false);

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    {href: '#collection', key: 'nav.collection'},
    {href: '#story', key: 'nav.story'},
    {href: '#how-to-order', key: 'nav.order'},
    {href: '#contact', key: 'nav.contact'},
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(242,237,228,0.96)' : 'var(--raw-linen)',
        borderColor: 'var(--muted-gold)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.07)' : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3 no-underline" style={{color: 'var(--warm-black)'}}>
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" style={{color: 'var(--muted-gold)'}}>
            <path d="M12 0L14.59 4.41L19.5 2.5L17.59 7.41L22 10L18.18 13.5L21.5 18L16.5 17.59L14.41 22L12 18.18L9.59 22L7.5 17.59L2.5 18L5.82 13.5L2 10L6.41 7.41L4.5 2.5L9.41 4.41L12 0Z" />
          </svg>
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              color: 'var(--warm-black)',
              fontFamily: i18n.language !== 'ar' ? 'var(--font-heading-ltr)' : undefined,
              fontSize: i18n.language !== 'ar' ? '1.6rem' : undefined,
              fontStyle: i18n.language !== 'ar' ? 'italic' : undefined,
            }}
          >
            {t('brandName')}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="no-underline text-[0.95rem] font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
                style={{color: 'var(--warm-black)'}}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--terracotta)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-black)')}
              >
                {t(link.key)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="inline-flex items-center p-[2px]" style={{border: '1px solid var(--muted-gold)', backgroundColor: 'var(--raw-linen)'}}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLang(lang.code)}
                className="border-none py-1.5 px-2.5 text-[0.8rem] font-semibold cursor-pointer transition-all"
                style={{
                  backgroundColor: i18n.language === lang.code ? 'var(--terracotta)' : 'transparent',
                  color: i18n.language === lang.code ? '#ffffff' : 'var(--warm-black)',
                  fontFamily: 'var(--font-body-ltr)',
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden bg-none border-none cursor-pointer p-2"
            style={{color: 'var(--warm-black)'}}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 p-6 shadow-lg" style={{backgroundColor: 'var(--raw-linen)', borderBottom: '1px solid var(--muted-gold)'}}>
          <ul className="flex flex-col gap-5 list-none mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="no-underline text-[0.95rem] font-medium bg-transparent border-none cursor-pointer p-0"
                  style={{color: 'var(--warm-black)'}}
                >
                  {t(link.key)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
