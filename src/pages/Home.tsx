import heroBg from "../assets/images/home_background_2.png"; // Upewnij się, że dodałeś plik hero-bg.jpg do /assets/images/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachographDigital,
  faDownload,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Encouragers from "../components/Encouragers";

const Home = () => {
  return (
    <main>
      {/** sekcja 1 */}
      <div className="bg-blue-900 p-8 text-center text-white">
        <h2 className=" text-3xl pb-3 font-goldman tracking-wide">
          Serwis
          <br /> Tachografów
          <br /> Skrzeszew
        </h2>
      </div>

      {/** encouragers */}
      <Encouragers text='Najlepsze ceny'/>
      <Encouragers text="Szybko" />
      <Encouragers text="24h / 7" />
      <Encouragers text="Duży parking, łatwy zjazd z drogi krajowej nr 631"/>
      <Encouragers text="Na miejscu sklep spożywczo - przemysłowy"/>
      <Encouragers text="Zaplecze kuchenne darmowa kawa / herbata"/>

      {/* Sekcja "Dlaczego my?" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faTachographDigital}
                    className="text-blue-500 text-7xl mb-4"
                  />
                ),
                title: "kalibracja tachografu",
                desc: "wykonujemy kalibrację tachografów cyfrowych",
              },
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-blue-500 text-7xl mb-4"
                  />
                ),
                title: "pobieranie danych",
                desc: "pobieramy dane z karty kierowcy oraz tachografu",
              },
              {
                icon: (
                  <FontAwesomeIcon
                    icon={faWrench}
                    className="text-blue-500 text-7xl mb-4"
                  />
                ),
                title: "naprawy",
                desc: "naprawimy uszkodzony tachograf szybko i tanio",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center shadow-md "
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja Hero (baner główny) */}
      <section
        className="py-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></section>
    </main>
  );
};

export default Home;
