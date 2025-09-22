import heroBg from "../assets/images/home_background_2.png"; // Upewnij się, że dodałeś plik hero-bg.jpg do /assets/images/

import {
  faTachographDigital,
  faDownload,
  faWrench,
  faGears,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import Encouragers from "../components/Encouragers";
import InfoBox from "../components/InfoBox";
import TachografCalibrationInfo from "../components/TachografCalibrationInfo";
import TachografDataDownloadInfo from "../components/TachografDataDownloadInfo";
import TachografRepairInfo from "../components/TachografRepairInfo";
import TachografPartsInfo from "../components/TachografPartsInfo";
import FreeLegalAdvice from "../components/FreeLegalAdvece";

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
      <Encouragers text="Najlepsze ceny" />
      <Encouragers text="Szybko" />
      <Encouragers text="24h / 7" />
      <Encouragers text="Duży parking, łatwy zjazd z drogi krajowej nr 631" />
      <Encouragers text="Możesz zrobić pauzę" />
      <Encouragers text="Na miejscu sklep spożywczo - przemysłowy" />
      <Encouragers text="Zaplecze kuchenne darmowa kawa / herbata" />
      <Encouragers text="Zniżki dla stałych klientów" />

      {/** boxes */}
      <InfoBox text="kalibracja tachografu" icon={faTachographDigital}>
        <TachografCalibrationInfo />
      </InfoBox>
      <InfoBox text="pobieranie danch" icon={faDownload}>
        <TachografDataDownloadInfo />
      </InfoBox>
      <InfoBox text="naprway" icon={faWrench}>
        <TachografRepairInfo />
      </InfoBox>
      <InfoBox text="części zamienne" icon={faGears}>
        <TachografPartsInfo />
      </InfoBox>
      <InfoBox text="doradztwo" icon={faComments}>
        <FreeLegalAdvice />
      </InfoBox>

      {/* photo at the end */}
      <section
        className="py-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></section>
    </main>
  );
};

export default Home;
