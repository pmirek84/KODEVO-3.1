import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, Palette, Globe2, MessageSquare, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';
import { HeroParallax } from './components/ui/hero-parallax';
import { RainbowButton } from './components/ui/rainbow-button';
import { PortfolioCarousel } from './components/ui/portfolio-carousel';
import { CookieConsent } from './components/ui/cookie-consent';
import PrivacyPolicy from './pages/PrivacyPolicy';

const KodevoLogo = ({ onClick }: { onClick?: () => void }) => (
  <div 
    className="flex items-center group cursor-pointer" 
    onClick={onClick}
  >
    <img 
      src="/KODEVO Pelne.png" 
      alt="Kodevo" 
      className="h-6 sm:h-8 transition-all duration-300 group-hover:scale-105 [filter:invert(67%)_sepia(98%)_saturate(1200%)_hue-rotate(155deg)_brightness(105%)_contrast(101%)]"
    />
  </div>
);

export const products = [
  {
    title: "Dwa Stawy - Ośrodek Wypoczynkowy",
    link: "https://dwastawy-deborogi.pl/",
    thumbnail: "/DWA STAWY PAGE.png",
  },
  {
    title: "BCK Windows - Producent Okien",
    link: "https://bckwindows.com/",
    thumbnail: "/BCK PAGE.png",
  },
  {
    title: "Alugor - Producent Okien",
    link: "https://www.alugor.pl/",
    thumbnail: "/ALUGOR PAGE.png",
  },
  {
    title: "Globe Gaze - Montaż Okien",
    link: "https://www.globegaze.pl/",
    thumbnail: "/Globe Gaze PAGE.png",
  },
  {
    title: "Pozew24 - Kancelaria Online",
    link: "http://pozew24.pl",
    thumbnail: "/Pozew24 PAGE.png",
  },
  {
    title: "AlterVia - Import/Export",
    link: "https://altervia.trade/",
    thumbnail: "/AlterVia PAGE.png",
  },
  {
    title: "Alumateria - Systemy Aluminiowe",
    link: "#",
    thumbnail: "/ALUMATERIA PAGE.png",
  },
  {
    title: "Cost Frame - Kosztorysowanie",
    link: "#",
    thumbnail: "/CostFrame PAGE.png",
  },
  {
    title: "STOK - Handel Materiałami",
    link: "https://stok-handel.eu/",
    thumbnail: "/STOK PAGE.png",
  },
  {
    title: "Scripulus - Biuro Rachunkowe",
    link: "https://scripulus.pl/",
    thumbnail: "/Scripulus PAGE.png",
  },
];

export const portfolioProjects = [
  {
    title: "Dwa Stawy - Ośrodek Wypoczynkowy",
    description: "Strona internetowa dla ekskluzywnego ośrodka wypoczynkowego z domkami nad wodą. Prezentacja oferty, galeria zdjęć i informacje o dostępnych atrakcjach.",
    image: "/DWA STAWY PAGE.png",
    link: "https://dwastawy-deborogi.pl/"
  },
  {
    title: "BCK Windows - Producent Okien",
    description: "Nowoczesna strona producenta okien i drzwi, prezentująca szeroką gamę produktów oraz realizacji. Profesjonalna prezentacja oferty i portfolio.",
    image: "/BCK PAGE.png",
    link: "https://bckwindows.com/"
  },
  {
    title: "STOK - Handel Materiałami",
    description: "Profesjonalny zespół specjalistów z bogatym doświadczeniem w branży stolarki okienno-drzwiowej. Od 2022 roku realizują projekty na rynku polskim i niemieckim, oferując kompleksową obsługę i doradztwo w zakresie materiałów budowlanych.",
    image: "/STOK PAGE.png",
    link: "https://stok-handel.eu/"
  },
  {
    title: "Scripulus - Biuro Rachunkowe",
    description: "Profesjonalne biuro rachunkowe z Koszalina oferujące kompleksową obsługę księgową i kadrową dla firm. Nowoczesne podejście do księgowości.",
    image: "/Scripulus PAGE.png",
    link: "https://scripulus.pl/"
  },
  {
    title: "Pozew24 - Kancelaria Online",
    description: "Nowoczesna platforma dla kancelarii prawnej, umożliwiająca klientom łatwy dostęp do usług prawnych online.",
    image: "/Pozew24 PAGE.png",
    link: "http://pozew24.pl"
  },
  {
    title: "AlterVia - Import/Export",
    description: "Strona internetowa firmy handlowej specjalizującej się w imporcie i eksporcie. Profesjonalna prezentacja oferty handlowej.",
    image: "/AlterVia PAGE.png",
    link: "https://altervia.trade/"
  },
  {
    title: "Alugor - Producent Okien",
    description: "Strona internetowa producenta wysokiej jakości okien i systemów aluminiowych. Profesjonalna prezentacja produktów i realizacji.",
    image: "/ALUGOR PAGE.png",
    link: "https://www.alugor.pl/"
  },
  {
    title: "Globe Gaze - Montaż Okien",
    description: "Profesjonalna firma specjalizująca się w montażu okien i drzwi. Kompleksowa obsługa i doradztwo w zakresie stolarki okiennej.",
    image: "/Globe Gaze PAGE.png",
    link: "https://www.globegaze.pl/"
  },
  {
    title: "Alumateria - Systemy Aluminiowe",
    description: "Platforma dystrybutora nowoczesnych rozwiązań aluminiowych. Kompleksowa prezentacja oferty i realizacji.",
    image: "/ALUMATERIA PAGE.png",
    link: "#"
  },
  {
    title: "Cost Frame - Kosztorysowanie",
    description: "Aplikacja do kosztorysowania prac budowlanych z wbudowanym systemem CRM. Umożliwia tworzenie szczegółowych wycen i zarządzanie relacjami z klientami.",
    image: "/CostFrame PAGE.png",
    link: "#"
  }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="px-4 sm:px-6 py-12 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        <div className="lg:col-span-2">
          <KodevoLogo onClick={scrollToTop} />
          <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base">
            Code + Evolution | Tworzymy cyfrowe doświadczenia, które inspirują i przynoszą realne rezultaty.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Kontakt</h3>
          <div className="space-y-3">
            <a href="mailto:kontakt@kodevo.pl" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2 group text-sm sm:text-base">
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              kontakt@kodevo.pl
            </a>
            <a href="tel:+48792059059" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2 group text-sm sm:text-base">
              <Phone className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              +48 792 059 059
            </a>
            <div className="text-gray-400 flex items-center gap-2 group text-sm sm:text-base">
              <MapPin className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Koszalin (prawie nad Morzem), Polska
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Kodevo. Wszystkie prawa zastrzeżone. Powered by 🧠 i dużo kawy.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-xs sm:text-sm">
              Polityka prywatności
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10">
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-b from-[#001219] to-transparent backdrop-blur-sm z-50 px-4 sm:px-6 py-3 sm:py-4 md:px-12 lg:px-24">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <KodevoLogo onClick={scrollToTop} />
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#about" className="text-[#00E5FF] hover:text-white transition-colors text-sm lg:text-base">O nas</a>
            <a href="#services" className="text-[#00E5FF] hover:text-white transition-colors text-sm lg:text-base">Usługi</a>
            <a href="#portfolio" className="text-[#00E5FF] hover:text-white transition-colors text-sm lg:text-base">Portfolio</a>
            <a href="#contact" className="text-[#00E5FF] hover:text-white transition-colors text-sm lg:text-base">Kontakt</a>
            <RainbowButton onClick={scrollToContact} className="text-sm lg:text-base">
              Porozmawiajmy
            </RainbowButton>
          </div>

          <button 
            className="md:hidden text-[#00E5FF] transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0C1E25]/95 backdrop-blur-lg border-t border-[#00E5FF]/20 p-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-[#00E5FF] hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>O nas</a>
              <a href="#services" className="text-[#00E5FF] hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Usługi</a>
              <a href="#portfolio" className="text-[#00E5FF] hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-[#00E5FF] hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
              <RainbowButton onClick={() => { scrollToContact(); setIsMenuOpen(false); }}>
                Porozmawiajmy
              </RainbowButton>
            </div>
          </motion.div>
        )}
      </nav>

      <section className="relative min-h-screen">
        <div className="px-4 sm:px-6 pt-24 sm:pt-32 pb-20 md:pt-40 md:px-12 lg:px-24 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-float text-white"
          >
            Tworzymy strony i aplikacje, które
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-white to-[#00E5FF] animate-text-gradient bg-[length:200%_auto]"> działają, wyglądają i sprzedają.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
          >
            W Kodevo łączymy kod z ewolucją.<br className="hidden sm:block" />
            Projektujemy i rozwijamy cyfrowe doświadczenia, które są tak dobre, że sam chciałbyś je kliknąć.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4"
          >
            <RainbowButton className="inline-flex items-center group text-sm sm:text-base" onClick={scrollToContact}>
              Porozmawiajmy o Twoim projekcie
              <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </RainbowButton>
          </motion.div>
        </div>

        <div className="absolute inset-0 top-[40vh]">
          <HeroParallax products={products} />
        </div>
      </section>

      <div className="h-[10vh] sm:h-[20vh]"></div>

      <section id="about" className="px-4 sm:px-6 py-16 sm:py-20 md:px-12 lg:px-24 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-6 sm:p-8 rounded-2xl border border-[#00E5FF]/20 bg-black/30 backdrop-blur-sm overflow-hidden group"
          >
            <motion.div 
              initial={{ scale: 1.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white text-center"
              >
                Kim jesteśmy?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-[#00E5FF] text-center"
              >
                Kodevo = KOD + EWOLUCJA
              </motion.p>
              <div className="space-y-4 sm:space-y-6 text-gray-300">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-base sm:text-lg leading-relaxed"
                >
                  Jesteśmy zespołem pasjonatów technologii, którzy wierzą, że dobre rozwiązania cyfrowe mogą zmienić świat na lepsze. Nasza historia zaczęła się od prostej idei: połączenia technologicznej precyzji z kreatywną ewolucją.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-base sm:text-lg leading-relaxed"
                >
                  W Kodevo nie tylko tworzymy strony i aplikacje – budujemy cyfrowe doświadczenia, które inspirują, angażują i przynoszą realne rezultaty. Każdy projekt traktujemy jako unikalną podróż, podczas której łączymy najnowsze technologie z innowacyjnym designem.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-4 sm:px-6 py-16 sm:py-20 md:px-12 lg:px-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 text-white">Czym się zajmujemy?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: <Globe2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#00E5FF]" />,
              title: "Strony internetowe",
              description: "Nowoczesne, responsywne i po prostu przyjemne w użyciu. Projektujemy z myślą o ludziach i Google'u – w tej kolejności."
            },
            {
              icon: <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-[#00E5FF]" />,
              title: "Marketing & social media",
              description: "Twoja marka potrzebuje głosu? My jej go damy. Prowadzimy konta, tworzymy content, robimy kampanie – z pomysłem i bez wstydu."
            },
            {
              icon: <Palette className="w-10 h-10 sm:w-12 sm:h-12 text-[#00E5FF]" />,
              title: "Branding & UX/UI",
              description: "Design, który nie tylko wygląda, ale i działa. UX, który nie wymaga instrukcji obsługi. Logo, które zapada w pamięć."
            },
            {
              icon: <KodevoLogo />,
              title: "Aplikacje webowe",
              description: "Od pomysłu do MVP – budujemy konfiguratory, systemy rezerwacji, panele klienta i inne rozwiązania, które automatyzują, ułatwiają i robią dobre wrażenie."
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:bg-black/40 group"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110 mb-4 sm:mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="portfolio">
        <PortfolioCarousel projects={portfolioProjects} />
      </section>

      <section id="contact" className="px-4 sm:px-6 py-16 sm:py-20 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">Skontaktuj się z nami</h2>
          <p className="text-center text-base sm:text-lg text-gray-300 mb-8 sm:mb-12">
            Nie musisz mieć gotowego briefu. Wystarczy pomysł, potrzeba albo pytanie.<br className="hidden sm:block" />
            My pomożemy to ułożyć w plan i kod.
          </p>
          <form className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Imię"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors text-white text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors text-white text-sm sm:text-base"
              />
            </div>
            <input
              type="text"
              placeholder="Temat"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors text-white text-sm sm:text-base"
            />
            <textarea
              placeholder="Wiadomość"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00E5FF] transition-colors text-white text-sm sm:text-base resize-none"
            ></textarea>
            <RainbowButton type="submit" className="w-full text-sm sm:text-base">
              Wyślij wiadomość
            </RainbowButton>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full">
        <BackgroundGradientAnimation
          gradientBackgroundStart="#001219"
          gradientBackgroundEnd="#000304"
          firstColor="0, 229, 255"
          secondColor="147, 51, 234"
          thirdColor="255, 255, 255"
          fourthColor="147, 51, 234"
          fifthColor="0, 229, 255"
          pointerColor="255, 255, 255"
          blendingValue="screen"
        />
      </div>
      <div className="relative">
        {children}
      </div>
      <CookieConsent />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;