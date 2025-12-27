import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Catalog from './sections/Catalog';
import Footer from './components/Footer';
import Info from './sections/Info';
import Communication from './components/Communication';

export default function Home() {
  return (
    <div className="full-screen flex-column items-center justify-center">
      <Navbar />
      <main>
          <Hero />
          <Catalog />
          <Info />
      </main>
      <Footer />
      <Communication />
    </div>
  );
}
