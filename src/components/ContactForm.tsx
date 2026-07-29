import {useTranslation} from 'react-i18next';
import {useInView} from '@/src/hooks/useInView';
import {FormEvent, useState} from 'react';

export default function ContactForm() {
  const {t} = useTranslation();
  const {ref, isVisible} = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const nameField = form.elements.namedItem('name') as HTMLInputElement;
    const phoneField = form.elements.namedItem('phone') as HTMLInputElement;

    const newErrors: Record<string, boolean> = {};
    if (!nameField.value.trim()) newErrors.name = true;
    if (!phoneField.value.trim()) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    border: '1px solid #D1C7B7',
    backgroundColor: '#FFFFFF',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
    color: 'var(--warm-black)',
    borderRadius: 0,
    outline: 'none',
  };

  const inputErrorStyle = {
    ...inputStyle,
    borderColor: 'var(--terracotta)',
    backgroundColor: '#FFF9F9',
  };

  return (
    <section id="contact" ref={ref} className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="max-w-[720px] mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] mb-3 font-bold" style={{color: 'var(--warm-black)', fontFamily: 'var(--font-ar)'}}>
              {t('contact.title')}
            </h2>
            <div className="w-12 h-0.5 mx-auto" style={{backgroundColor: 'var(--muted-gold)'}} />
          </div>
          <p className="text-center mb-10 text-[1.05rem]" style={{color: '#555'}}>
            {t('contact.subheading')}
          </p>

          {!submitted ? (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.9rem] font-semibold" style={{color: 'var(--warm-black)'}}>{t('contact.name')}</label>
                <input
                  type="text"
                  name="name"
                  style={errors.name ? inputErrorStyle : inputStyle}
                  onFocus={(e) => {
                    if (!errors.name) {
                      e.currentTarget.style.borderColor = 'var(--terracotta)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(160,82,45,0.15)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.name) {
                      e.currentTarget.style.borderColor = '#D1C7B7';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.9rem] font-semibold" style={{color: 'var(--warm-black)'}}>{t('contact.phone')}</label>
                <input
                  type="text"
                  name="phone"
                  style={errors.phone ? inputErrorStyle : inputStyle}
                  onFocus={(e) => {
                    if (!errors.phone) {
                      e.currentTarget.style.borderColor = 'var(--terracotta)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(160,82,45,0.15)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.phone) {
                      e.currentTarget.style.borderColor = '#D1C7B7';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.9rem] font-semibold" style={{color: 'var(--warm-black)'}}>{t('contact.email')}</label>
                <input type="email" name="email" style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--terracotta)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(160,82,45,0.15)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#D1C7B7'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.9rem] font-semibold" style={{color: 'var(--warm-black)'}}>{t('contact.piece')}</label>
                <input type="text" id="field-piece" name="piece" style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--terracotta)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(160,82,45,0.15)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#D1C7B7'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.9rem] font-semibold" style={{color: 'var(--warm-black)'}}>{t('contact.message')}</label>
                <textarea name="message" rows={4} style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--terracotta)'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(160,82,45,0.15)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#D1C7B7'; e.currentTarget.style.boxShadow = 'none'; }}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white py-4 px-8 text-base font-semibold border-none cursor-pointer transition-colors text-center"
                style={{backgroundColor: 'var(--terracotta)'}}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--terracotta-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--terracotta)')}
              >
                {t('contact.submit')}
              </button>
            </form>
          ) : (
            <div className="p-8 text-center text-[1.15rem] font-semibold" style={{backgroundColor: 'rgba(37,211,102,0.12)', border: '1px solid var(--whatsapp-green)', color: '#155724'}}>
              {t('contact.thankYou')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
