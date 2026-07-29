import {useTranslation} from 'react-i18next';
import {useInView} from '@/src/hooks/useInView';

const STEPS = [
  {num: '01', iconPath: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", iconExtra: <circle cx="12" cy="12" r="3" />, titleKey: 'order.step1Title', descKey: 'order.step1Desc'},
  {num: '02', iconPath: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z", iconExtra: null, titleKey: 'order.step2Title', descKey: 'order.step2Desc'},
  {num: '03', iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", iconExtra: <><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>, titleKey: 'order.step3Title', descKey: 'order.step3Desc'},
];

export default function HowToOrder() {
  const {t} = useTranslation();
  const {ref, isVisible} = useInView();

  return (
    <section id="how-to-order" ref={ref} className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`} style={{backgroundColor: 'var(--soft-sand)'}}>
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] mb-3 font-bold" style={{color: 'var(--warm-black)', fontFamily: 'var(--font-ar)'}}>
            {t('order.title')}
          </h2>
          <div className="w-12 h-0.5 mx-auto" style={{backgroundColor: 'var(--muted-gold)'}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {STEPS.map((step) => (
            <div key={step.num} className="p-10 relative shadow-[0_4px_15px_rgba(0,0,0,0.03)]" style={{backgroundColor: 'var(--raw-linen)'}}>
              <div className="text-[3rem] font-bold absolute top-4 ltr:right-6 rtl:left-6" style={{color: 'rgba(160,82,45,0.25)', fontFamily: 'var(--font-body-ltr)'}}>
                {step.num}
              </div>
              <svg className="w-9 h-9 mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'var(--muted-gold)'}}>
                <path d={step.iconPath} />
                {step.iconExtra}
              </svg>
              <h3 className="text-[1.35rem] font-bold mb-2.5">{t(step.titleKey)}</h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{color: '#555'}}>{t(step.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/212600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white py-3.5 px-7 no-underline font-semibold text-[0.95rem] transition-colors"
            style={{backgroundColor: 'var(--whatsapp-green)'}}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1eb957')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--whatsapp-green)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.26 1.654 6.107l-1.685 6.153 6.293-1.65c1.782.971 3.8 1.48 5.738 1.48 6.627 0 12-5.373 12-12s-5.373-12-12-12zm.008 22c-1.815 0-3.593-.486-5.143-1.405l-.368-.218-3.821 1.002 1.02-3.722-.24-.383c-1.009-1.605-1.543-3.468-1.543-5.374 0-5.467 4.453-9.92 9.92-9.92 5.467 0 9.92 4.453 9.92 9.92 0 5.467-4.453 9.92-9.92 9.92zm5.434-7.418c-.298-.149-1.761-.869-2.033-.968-.272-.099-.47-.149-.669.149-.198.298-.768.968-.941 1.166-.173.198-.347.223-.645.074-.298-.149-1.258-.463-2.397-1.48-.887-.791-1.485-1.768-1.659-2.066-.173-.298-.018-.459.13-.607.134-.133.298-.347.447-.521.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.372-.008-.57-.008-.198 0-.521.074-.794.372s-1.042 1.017-1.042 2.48 1.066 2.877 1.215 3.076c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.761-.719 2.009-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
            </svg>
            <span>{t('order.btnWa')}</span>
          </a>
          <a
            href="https://instagram.com/marrakeche.crafts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent py-3.5 px-7 no-underline font-semibold text-[0.95rem] transition-all"
            style={{border: '1px solid var(--warm-black)', color: 'var(--warm-black)'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--warm-black)';
              e.currentTarget.style.color = 'var(--raw-linen)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--warm-black)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>{t('order.btnIg')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
