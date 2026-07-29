import {useTranslation} from 'react-i18next';
import {useInView} from '@/src/hooks/useInView';
import {useCallback} from 'react';

const PRODUCTS = [
  {key: 'p1', img: './assets/beni_ourain_rug.png', fallback: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800', price: '2,800 MAD'},
  {key: 'p2', img: './assets/zellige_mosaic_tray.png', fallback: 'https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800', price: '680 MAD', reverse: true},
  {key: 'p3', img: './assets/carved_cedar_shelf.png', fallback: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800', price: '950 MAD'},
  {key: 'p4', img: './assets/brass_lantern.png', fallback: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800', price: '480 MAD', reverse: true},
];

export default function Collection() {
  const {t} = useTranslation();
  const {ref, isVisible} = useInView();

  const handlePieceClick = useCallback((pieceKey: string) => {
    const name = t(`collection.${pieceKey}.name`);
    const field = document.getElementById('field-piece') as HTMLInputElement | null;
    if (field) {
      field.value = name;
      field.focus();
    }
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  }, [t]);

  return (
    <section id="collection" ref={ref} className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] mb-3 font-bold" style={{color: 'var(--warm-black)', fontFamily: 'var(--font-ar)'}}>
            {t('collection.title')}
          </h2>
          <div className="w-12 h-0.5 mx-auto" style={{backgroundColor: 'var(--muted-gold)'}} />
        </div>

        <div className="flex flex-col gap-20">
          {PRODUCTS.map((product) => (
            <div
              key={product.key}
              className={`grid grid-cols-1 gap-8 items-center md:grid-cols-[55%_45%] md:gap-16 ${product.reverse ? 'md:grid-cols-[45%_55%]' : ''}`}
              style={{backgroundColor: 'var(--raw-linen)'}}
            >
              <div className={`overflow-hidden ${product.reverse ? 'md:order-2' : ''}`}>
                <img
                  src={product.img}
                  alt={t(`collection.${product.key}.name`)}
                  className="w-full h-[420px] object-cover block transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = product.fallback;
                  }}
                />
              </div>
              <div className={`py-4 ${product.reverse ? 'md:order-1' : ''}`}>
                <h3 className="text-[1.85rem] mb-3 font-bold" style={{color: 'var(--warm-black)', fontFamily: 'var(--font-ar)'}}>
                  {t(`collection.${product.key}.name`)}
                </h3>
                <p className="text-base leading-[1.65] mb-5" style={{color: '#444'}}>
                  {t(`collection.${product.key}.desc`)}
                </p>
                <div className="inline-block text-base font-semibold mb-6 py-1.5 px-3.5" style={{color: 'var(--terracotta)', backgroundColor: 'rgba(160,82,45,0.08)'}}>
                  {t('collection.fromPrice')}{product.price}
                </div>
                <div>
                  <button
                    onClick={() => handlePieceClick(product.key)}
                    className="inline-block no-underline font-semibold text-[0.95rem] underline underline-offset-[6px] transition-colors cursor-pointer bg-transparent border-none p-0"
                    style={{color: 'var(--warm-black)'}}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--terracotta)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-black)')}
                  >
                    {t('collection.cta')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
