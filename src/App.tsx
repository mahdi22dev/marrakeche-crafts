import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Collection from './components/Collection';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Collection />
      <HowToOrder />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
