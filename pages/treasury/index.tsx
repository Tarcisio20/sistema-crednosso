import Head from 'next/head'
import { ButtonTables } from '../../components/Buttons/ButtonTables'
import { ButtonSystem } from '../../components/Buttons/ButtonSystem'
import { HeaderPersonal } from '../../components/Headers/Header'
import { HeaderInPage } from '../../components/Headers/HeaderInPage'
import styles from '../../styles/Treasury.module.css'


const Treasury = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>CredNosso | Tesourarias</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderPersonal slug="treasury" />

            <div className={styles.box}>
                <HeaderInPage text="Tesourarias | Home" slug="treasury" end="/" />
                <div className={styles.boxButtons}>
                    <ButtonSystem slug="treasury/add" label="Adicionar" icon="add-white" />
                </div>
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>SALDO</th>
                                <th width="250px">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tesouraria 1</td>
                                <td>R$ 00,00</td>
                                <td className={styles.boxButtonsInTable} > 
                                   <ButtonTables
                                        label="Editar"
                                        colorText="#ffffff"
                                        colorPrimary="#007dc5"
                                        colorSecondary="#007dc5"
                                        link={`treasury/edit/1`}
                                        icon="edit-white"
                                   /> 
                                     <ButtonTables
                                        label="Deletar"
                                        colorText="#ffffff"
                                        colorPrimary="#c33a3a"
                                        colorSecondary="#f12d2d"
                                        link={`treasury/delete/1`}
                                        icon="delete-white"
                                   /> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
} 

export default Treasury