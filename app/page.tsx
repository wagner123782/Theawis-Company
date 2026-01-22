import Image from "next/image";
import Header from "./sections/Header";
import Inicio from "./sections/Inicio";
import VideoCEO from "./sections/Section-youtube";
import Footer from "./sections/Footer";
import Servicos from "./sections/Services";
import WhatsAppFloatingButton from "./sections/WhatsAppFloatingButton";
import PorqueEscolher from "./sections/Empresas";
import CatalogoServicos from "./sections/CatalogoServicos";
import ProjetosDestaque from "./sections/ProjetosDestaque";

import FrasesRodandoSimples from "./components/FrasesRodandoSimples";
import DepoimentosCompacto from "./sections/Depoimentos";
import PartnersSection from "./sections/PartnersSection";
export default function Home() {
  return (
    <div className="main">
      <Header></Header>
      <Inicio></Inicio>
      <FrasesRodandoSimples></FrasesRodandoSimples>
      <PorqueEscolher></PorqueEscolher>
      <DepoimentosCompacto></DepoimentosCompacto>
      <VideoCEO></VideoCEO>
      <Servicos></Servicos>
      <CatalogoServicos></CatalogoServicos>
      <ProjetosDestaque></ProjetosDestaque>
      <Footer></Footer>
      <WhatsAppFloatingButton></WhatsAppFloatingButton>
    </div>
  );
}
