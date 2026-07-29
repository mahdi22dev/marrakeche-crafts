import {useTranslation} from 'react-i18next';
import {useEffect, useRef} from 'react';

export default function Hero() {
  const {t, i18n} = useTranslation();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768 && imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section style={{backgroundColor: 'var(--raw-linen)'}}>
      <div className="grid grid-cols-1 md:grid-cols-[58%_42%] min-h-[calc(100vh-80px)]">
        <div className="relative overflow-hidden w-full h-[50vh] md:h-screen">
          <img
            ref={imgRef}
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200"
            alt="Moroccan Interior Design Living Room"
            className="w-full h-full object-cover block transition-transform duration-100"
          />
        </div>
        <div className="flex flex-col justify-center py-12 px-6 md:py-16 md:px-14" style={{backgroundColor: 'var(--raw-linen)'}}>
          <span className="uppercase text-[0.85rem] font-semibold tracking-[0.2em] mb-4" style={{color: 'var(--muted-gold)'}}>
            {t('hero.eyebrow')}
          </span>
          <h1
            className="text-[clamp(2.75rem,5vw,4.75rem)] leading-[1.1] mb-5 font-bold"
            style={{
              color: 'var(--warm-black)',
              fontFamily: i18n.language !== 'ar' ? 'var(--font-heading-ltr)' : 'var(--font-ar)',
              fontStyle: i18n.language !== 'ar' ? 'italic' : 'normal',
            }}
          >
            {t('brandName')}
          </h1>
          <p className="text-xl font-semibold mb-4" style={{color: 'var(--warm-black)'}}>
            {t('tagline')}
          </p>
          <p className="text-base mb-9 max-w-[480px] leading-[1.7]" style={{color: '#4A4A4A'}}>
            {t('hero.intro')}
          </p>
          <div className="flex flex-col items-start gap-5">
            <a
              href="#collection"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#collection')?.scrollIntoView({behavior: 'smooth'});
              }}
              className="inline-block text-white py-4 px-8 no-underline text-base font-semibold cursor-pointer transition-colors"
              style={{backgroundColor: 'var(--terracotta)'}}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--terracotta-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--terracotta)')}
            >
              {t('hero.cta')}
            </a>
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline font-medium text-[0.95rem] transition-colors"
              style={{color: 'var(--warm-black)'}}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--terracotta)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-black)')}
            >
              <span>{t('hero.waText')}</span>
              <span>{t('hero.waArrow')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
