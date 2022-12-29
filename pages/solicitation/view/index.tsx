import Head from 'next/head'
import { BoxInput } from '../../../components/BoxInput'
import { ButtonTables } from '../../../components/Buttons/ButtonTables'
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
                <div className={styles.areaUp}>
                    <div className={styles.areaSearch}>
                        <div className={styles.boxLeft}>
                            <h4>Inicio</h4>
                            <BoxInput
                                type="date"
                                value={''}
                                onChange={()=>{}}
                            />
                        </div>
                        <div className={styles.boxRight}>
                            <h4>Fim</h4>
                                <BoxInput
                                    type="date"
                                    value={''}
                                    onChange={()=>{}}
                                />
                        </div>
                        <div className={styles.boxButton}>
                            <ButtonTables
                                label="pesquisar"
                                colorText="#ffffff"
                                colorPrimary="#74ea50"
                                colorSecondary="#6ebe55"
                                link={`atm/delete/1`}
                                icon="search-white"
                            /> 
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.areaButtons}>
                        <ButtonTables
                            label="confirmar parcial"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="partial-white"
                        /> 
                         <ButtonTables
                            label="confirmar total"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="confirmation-white"
                        /> 
                         <ButtonTables
                            label="gerar lançamento"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="release-white"
                        /> 
                         <ButtonTables
                            label="gerar pagamento"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="pay-white"
                        /> 
                         <ButtonTables
                            label="relançar pedido"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="reply-white"
                        /> 
                         <ButtonTables
                            label="gerar relatório"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="report-white"
                        /> 
            
                         <ButtonTables
                            label="enviar e-mail"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="email-white"
                        /> 
                         <ButtonTables
                            label="abrir OSs"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="open-white"
                        /> 
                         <ButtonTables
                            label="visualizar"
                            colorText="#ffffff"
                            colorPrimary="#007dc5"
                            colorSecondary="#1b1b54"
                            link={`atm/delete/1`}
                            icon="view-white"
                        /> 
                         <ButtonTables
                            label="excluir"
                            colorText="#ffffff"
                            colorPrimary="#c33a3a"
                            colorSecondary="#f12d2d"
                            link={`atm/delete/1`}
                            icon="delete-white"
                        /> 
                    </div>
                    <div className={styles.line}></div>
                </div>
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
                            <tr>
                                <td>15684</td>
                                <td>entre tesourarias</td>
                                <td>Mateus SUpermercados</td>
                                <td>Prosegur Fortaleza</td>
                                <td>R$ 1.000.000,00</td>
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

export default ViewSolicitation