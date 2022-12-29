import Head from 'next/head'
import { ButtonSystem } from '../../components/Buttons/ButtonSystem'
import { ButtonTables } from '../../components/Buttons/ButtonTables'
import { HeaderPersonal } from '../../components/Headers/Header'
import { HeaderInPage } from '../../components/Headers/HeaderInPage'
import styles from '../../styles/Images.module.css'

const Images = () => {
    return(
        <div className={styles.container}>
              <Head>
                <title>CredNosso | Imagens</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HeaderPersonal slug="images" />

            <div className={styles.box}>
                <HeaderInPage text="Imagens | Home" slug="images" end="/" />
                <div className={styles.boxButtons}>
                    <ButtonSystem slug="images/add" label="Adicionar" icon="add-white" />
                </div>

                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>CARTAO</th>
                                <th>TERMINAL</th>
                                <th>STATUS</th>
                                <th width="250px">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>3333 3333 3333 3333</td>
                                <td>Tesouraria_1</td>
                                <td>Aguardando</td>
                                <td className={styles.boxButtonsInTable} > 
                                   <ButtonTables
                                        label="Editar"
                                        colorText="#ffffff"
                                        colorPrimary="#007dc5"
                                        colorSecondary="#007dc5"
                                        link={`atm/edit/1`}
                                        icon="edit-white"
                                   /> 
                            
                                     <ButtonTables
                                        label="Deletar"
                                        colorText="#ffffff"
                                        colorPrimary="#c33a3a"
                                        colorSecondary="#f12d2d"
                                        link={`atm/delete/1`}
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

export default Images