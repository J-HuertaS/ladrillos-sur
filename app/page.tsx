import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Catalog from './sections/Catalog';
import Footer1 from './components/Footer1';
import Info from './sections/Info';
import Info1 from './sections/Info1';
import Communication from './components/Communication';
import Stats from './sections/Stats';

export default function Home() {
  return (
    <div className="font-montserrat">
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Stats />
        <Info1 />
      </main>

      <Footer1 />
      <Communication />
    </div>
  );
}

