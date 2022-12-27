import Head from 'next/head'
import { HeaderPersonal } from '../../../components/Headers/Header'
import { HeaderInPage } from '../../../components/Headers/HeaderInPage'
import styles from './style.module.css'

const ViewSolicitation = () => {
    return(
        <div className={styles.container}>
            <Head>
                <title>CredNosso | Ver Solicitação</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderPersonal slug="solicitation" />

            <div className={styles.box}>
                <HeaderInPage text="Solicitação | Ver" slug="solicitation" />

                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>LOTE</th>
                                <th>TIPO</th>
                                <th>ORIGEM</th>
                                <th>DESTINO</th>
                                <th>TOTAL</th>
                                <th width="250px">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewSolicitation