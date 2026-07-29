import {useTranslation} from 'react-i18next';
import {useInView} from '@/src/hooks/useInView';

const TESTIMONIALS = [
  {
    quote: "« La qualité est exceptionnelle. Mon tapis Beni Ourain est la pièce maîtresse de mon salon. La livraison en France s'est faite sans aucun problème. »",
    author: "Sophie M.",
    city: "Lyon, France",
    avatar: "https://ui-avatars.com/api/?name=Sophie+M&background=C4922A&color=fff&size=80",
  },
  {
    quote: "« القطعة وصلت بشكل ممتاز، وجودتها تفوق التوقعات. هذا هو الشراء الثاني لي، وبالتأكيد لن يكون الأخير. »",
    author: "كريم ب.",
    city: "الرباط، المغرب",
    avatar: "https://ui-avatars.com/api/?name=Karim+B&background=C4922A&color=fff&size=80",
  },
];

export default function Testimonials() {
  const {ref, isVisible} = useInView();

  return (
    <section ref={ref} className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="p-10 flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--soft-sand)',
                borderLeft: '3px solid var(--muted-gold)',
              }}
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div style={{color: 'var(--muted-gold)'}} className="text-lg">★★★★★</div>
                </div>
                <p className="text-lg italic leading-[1.7] mb-7" style={{color: 'var(--warm-black)'}}>
                  {item.quote}
                </p>
              </div>
              <div>
                <div className="font-semibold text-[0.95rem]" style={{color: 'var(--warm-black)'}}>{item.author}</div>
                <div className="text-[0.85rem]" style={{color: '#666'}}>{item.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
