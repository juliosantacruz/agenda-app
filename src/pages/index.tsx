// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

const HeroImage = () => {
  return (
    <section className="Hero">
      <div className="Hero-Section">
        <div className="Hero-Text">
          <h1>Ayuno Intermitente</h1>
          <p>No es tan dificil como parece</p>
        </div>
      </div>
    </section>
  );
};

const Ventajas = () => {
  return (
    <section className="Ventajas">
      <div className="Ventajas-Title">
        <h2>Ventajas del Ayuno Intermitente</h2>
        <ul>
          <li>Bajas de peso</li>
          <li>Controlas el colesterol</li>
          <li>Duermes mejor</li>
          <li>Controlas la azucar</li>
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroImage />
      <Ventajas />
    </>
  );
}
