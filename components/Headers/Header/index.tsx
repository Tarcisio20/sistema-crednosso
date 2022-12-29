import Link from 'next/link'
import { useState } from 'react'
import styles from './style.module.css'

type Props = {
    slug: string;
}

export const HeaderPersonal = ({ slug } : Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.boxLogo}>
                <img src="/assets/logo.png" alt="" />
            </div>
            <div className={styles.menu}>
                <ul>
                    <li>
                        <Link 
                            href="/"
                        >Inicio</Link>
                    </li>
                    <li>
                        <Link href="/treasury">Tesourarias</Link>
                    </li>
                    <li>
                        <Link href="/atm">Atms</Link>
                    </li>
                    <li>
                        <Link href="/solicitation">Solicitações</Link>
                    </li>
                    <li>
                        <Link href="/images">Imagens</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}