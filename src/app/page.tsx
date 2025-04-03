import style from './page.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.pageContainer}>

     <div className={style.pageContent}>
      <img src="/home-logo.png" alt="nextplay-logo" />

      <h2>Dando visibilidade e crescimento para nossas maiores promessas.</h2>

      <ul>
        <li>Conheça as competições mais disputadas dos esportes.</li>
        <li>Conheça os atletas através de portfólios incríveis e completos, onde reúne conquistas individuais e em equipe.</li>
        <li>Conheça equipes formadas por diversos atletas promissores.</li>
      </ul>

      <div className={style.buttonContainer}>
        <Link href='#'>Equipes</Link>
        <Link href='#'>Atletas</Link>
      </div>
      
     </div>

     <div className={style.imageContainer}>
      <img src="/homepage-image.jpg" alt="Imagem de atleta" />
      <div className={style.backgroundShape}></div>
     </div>

    </div>
  );
}
