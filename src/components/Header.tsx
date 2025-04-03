import style from '../styles/Header.module.scss'
import Link from 'next/link'

export function Header() {
    return (
        <header className={style.headerContainer}>
            <img 
                src='/nextplay.svg'
                alt='nextplay logo'
            />

            <nav>
                <Link href="/">Página Inicial</Link>
                <Link href="/equipes">Equipes</Link>
                <Link href="/atletas">Atletas</Link>
                <Link href="/torneios">Torneios</Link>
            </nav>

            <Link href="">
                <img src="/user-icon.png" alt="Minha conta" />
            </Link>
        </header>
    )
}