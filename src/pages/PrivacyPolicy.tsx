import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="flex-grow bg-[#001219] text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-[#00E5FF] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Powrót do strony głównej
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Polityka prywatności</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">1. Informacje ogólne</h2>
            <p className="text-gray-300">
              Niniejsza polityka prywatności opisuje zasady przetwarzania danych osobowych na stronie internetowej <strong>Kodevo</strong>, prowadzonej przez firmę:
            </p>
            <div className="mt-4 text-gray-300">
              <p><strong>WebArt – Marcin Drabarek</strong></p>
              <p>ul. Prosta 5/5</p>
              <p>75-430 Koszalin</p>
              <p>NIP: 6692458645</p>
              <p>(dalej: <strong>Administrator</strong>)</p>
            </div>
            <p className="mt-4 text-gray-300">
              Ochrona prywatności i danych osobowych użytkowników naszej strony jest dla nas bardzo ważna. Dane przetwarzamy zgodnie z przepisami Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz ustawą o ochronie danych osobowych.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">2. Administrator danych osobowych</h2>
            <p className="text-gray-300">
              Administratorem danych osobowych jest:<br />
              <strong>WebArt – Marcin Drabarek</strong>, ul. Prosta 5/5, 75-430 Koszalin, NIP: 6692458645.<br />
              Z Administratorem możesz skontaktować się mailowo: <strong>kontakt@kodevo.pl</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">3. Zakres zbieranych danych</h2>
            <p className="text-gray-300 mb-4">
              Możemy przetwarzać następujące dane osobowe użytkowników:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Adres IP</li>
              <li>Dane dotyczące aktywności na stronie (np. kliknięcia, czas odwiedzin, typ przeglądarki)</li>
            </ul>
            <p className="text-gray-300">
              Dane te są zbierane:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Dobrowolnie poprzez formularz kontaktowy</li>
              <li>Automatycznie za pośrednictwem plików cookies i narzędzi analitycznych (np. Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">4. Cel przetwarzania danych</h2>
            <p className="text-gray-300">
              Dane osobowe przetwarzamy w następujących celach:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>udzielenia odpowiedzi na zapytania przesyłane przez formularz kontaktowy,</li>
              <li>prowadzenia komunikacji marketingowej (za zgodą użytkownika),</li>
              <li>zapewnienia prawidłowego działania strony internetowej,</li>
              <li>tworzenia statystyk i analiz na potrzeby ulepszania działania serwisu.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">5. Podstawa prawna przetwarzania</h2>
            <p className="text-gray-300">
              Dane przetwarzane są zgodnie z art. 6 RODO, tj.:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>na podstawie zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a),</li>
              <li>w celu realizacji umowy lub działań przedumownych (art. 6 ust. 1 lit. b),</li>
              <li>w uzasadnionym interesie administratora (art. 6 ust. 1 lit. f), np. w celach statystycznych lub marketingowych.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">6. Odbiorcy danych</h2>
            <p className="text-gray-300 mb-4">
              Dane mogą być udostępniane podmiotom wspierającym naszą działalność w zakresie hostingu, obsługi technicznej strony, a także dostawcom narzędzi analitycznych (np. Google).
            </p>
            <p className="text-gray-300">
              Nie przekazujemy danych osobowych poza Europejski Obszar Gospodarczy (EOG), chyba że jest to niezbędne i zabezpieczone odpowiednimi mechanizmami prawnymi (np. standardowe klauzule umowne UE).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">7. Czas przechowywania danych</h2>
            <p className="text-gray-300">
              Dane osobowe są przechowywane przez okres niezbędny do realizacji celu, w jakim zostały zebrane, lub do momentu wycofania zgody. Dane zawarte w korespondencji e-mailowej przechowywane są przez okres do 3 lat w celach archiwizacyjnych i dowodowych.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">8. Prawa użytkownika</h2>
            <p className="text-gray-300 mb-4">
              Każda osoba, której dane dotyczą, ma prawo do:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>dostępu do swoich danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych (prawo do bycia zapomnianym),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu,</li>
              <li>cofnięcia zgody w dowolnym momencie.</li>
            </ul>
            <p className="text-gray-300">
              W przypadku chęci skorzystania z tych praw – prosimy o kontakt na: <strong>kontakt@kodevo.pl</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">9. Pliki cookies</h2>
            <p className="text-gray-300">
              Strona używa plików cookies w celu poprawnego działania oraz analizy ruchu. Pliki cookies możesz samodzielnie kontrolować za pomocą ustawień przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">10. Zmiany polityki prywatności</h2>
            <p className="text-gray-300">
              Zastrzegamy sobie prawo do aktualizacji niniejszej polityki prywatności. Nowa wersja będzie publikowana na tej stronie.
            </p>
          </section>

          <section>
            <p className="text-gray-300 mt-8">
              <strong>Data ostatniej aktualizacji:</strong> 8 kwietnia 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;