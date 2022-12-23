import Head from 'next/head'
import { ButtonSystem } from '../../components/Buttons/ButtonSystem'
import { ButtonTables } from '../../components/Buttons/ButtonTables'
import { HeaderPersonal } from '../../components/Headers/Header'
import { HeaderInPage } from '../../components/Headers/HeaderInPage'
import { TableData } from '../../components/TableData'
import styles from '../../styles/Atm.module.css'

const Atms = () => {


    const dataH = ['ID', 'NOME', 'N REDUZIDO', 'AÇÕES']
    const dataB = [
        {id:'1', name:'terminal 1', name_red:'terminal_1'},
        {id:'2', name:'terminal 2', name_red:'terminal_2'}
    ]

    return(
        <div className={styles.container}>
             <Head>
                <title>CredNosso | Atms</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <HeaderPersonal slug="atm" />

            <div className={styles.box}>
                
                <HeaderInPage text="Atms | Home" slug="atm" end="/" />
                <div className={styles.boxButtons}>
                    <ButtonSystem slug="atm/add" label="Adicionar" icon="add-white" />
                </div>

                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>NOME REDUZIDO</th>
                                <th>SALDO</th>
                                <th width="250px">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tesouraria 1</td>
                                <td>Tesouraria_1</td>
                                <td>R$ 00,00</td>
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

export default Atms