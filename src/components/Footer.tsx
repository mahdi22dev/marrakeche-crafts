import {useTranslation} from 'react-i18next';

export default function Footer() {
  const {t} = useTranslation();

  const navLinks = [
    {href: '#collection', key: 'nav.collection'},
    {href: '#story', key: 'nav.story'},
    {href: '#how-to-order', key: 'nav.order'},
    {href: '#contact', key: 'nav.contact'},
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <footer className="pt-20 pb-12" style={{backgroundColor: 'var(--warm-black)', color: 'var(--raw-linen)'}}>
      <div className="w-full max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 md:gap-20 mb-16">
          <div>
            <h3 className="text-[1.75rem] mb-2 font-bold" style={{color: 'var(--muted-gold)', fontFamily: 'var(--font-ar)'}}>
              {t('brandName')}
            </h3>
            <p className="text-[0.95rem] mb-6" style={{color: '#BBB'}}>{t('tagline')}</p>
            <p className="text-[0.9rem] mb-1" style={{color: '#999'}}>{t('footer.address')}</p>
            <p className="text-[0.9rem]" style={{color: '#999'}}>+212 6 00 00 00 00</p>

            <div className="flex gap-4 mt-6">
              {[
                {label: 'Instagram', href: 'https://instagram.com/marrakeche.crafts', path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>},
                {label: 'WhatsApp', href: 'https://wa.me/212600000000', path: <path d="M12.031 0c-6.627 0-12 5.373-12 12 0 2.159.57 4.26 1.654 6.107l-1.685 6.153 6.293-1.65c1.782.971 3.8 1.48 5.738 1.48 6.627 0 12-5.373 12-12s-5.373-12-12-12zm.008 22c-1.815 0-3.593-.486-5.143-1.405l-.368-.218-3.821 1.002 1.02-3.722-.24-.383c-1.009-1.605-1.543-3.468-1.543-5.374 0-5.467 4.453-9.92 9.92-9.92 5.467 0 9.92 4.453 9.92 9.92 0 5.467-4.453 9.92-9.92 9.92zm5.434-7.418c-.298-.149-1.761-.869-2.033-.968-.272-.099-.47-.149-.669.149-.198.298-.768.968-.941 1.166-.173.198-.347.223-.645.074-.298-.149-1.258-.463-2.397-1.48-.887-.791-1.485-1.768-1.659-2.066-.173-.298-.018-.459.13-.607.134-.133.298-.347.447-.521.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.372-.008-.57-.008-.198 0-.521.074-.794.372s-1.042 1.017-1.042 2.48 1.066 2.877 1.215 3.076c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.761-.719 2.009-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />},
                {label: 'Pinterest', href: '#', path: <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 no-underline transition-all"
                  style={{border: '1px solid var(--muted-gold)', color: 'var(--muted-gold)'}}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--muted-gold)'; e.currentTarget.style.color = 'var(--warm-black)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--muted-gold)'; }}
                  aria-label={social.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill={social.label === 'Instagram' ? 'none' : 'currentColor'} stroke={social.label === 'Instagram' ? 'currentColor' : undefined} strokeWidth={social.label === 'Instagram' ? 2 : undefined}>
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-5" style={{color: 'var(--muted-gold)'}}>{t('footer.navTitle')}</h4>
            <ul className="flex flex-col gap-3.5 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="no-underline text-[0.95rem] transition-colors bg-transparent border-none cursor-pointer p-0"
                    style={{color: '#CCC'}}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--muted-gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#CCC')}
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center flex-wrap gap-4 text-[0.85rem]" style={{borderTop: '1px solid #333', color: '#888'}}>
          <span>{t('footer.copyright')}</span>
          <span>Marrakech • Morocco</span>
        </div>
      </div>
    </footer>
  );
}
