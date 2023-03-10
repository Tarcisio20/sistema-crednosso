import Head from 'next/head'
import { useState } from 'react'
import { BoxInput } from '../../components/BoxInput'
import { ButtonSystem } from '../../components/Buttons/ButtonSystem'
import { HeaderPersonal } from '../../components/Headers/Header'
import { HeaderInPage } from '../../components/Headers/HeaderInPage'
import styles from '../../styles/TreasuryAdd.module.css'

const TreasuryAdd = () => {

    //
    const [idSytem, setIdSystem] = useState('')
    const [nameSytem, setNameSystem] = useState('')


    return(
        <div className={styles.container}>
            <Head>
                <title>CredNosso | Adicionar Tesouraria</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <HeaderPersonal slug="treasury" />
            <div className={styles.box}>
                <HeaderInPage text="Tesouraria | Adicionar" slug="treasury"  />
                <div className={styles.boxInputs}>
                    <h3>Informações</h3>
                    <div className={styles.boxItems}>
                        <h4>ID SISTEMA</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o ID que se encontra no sistema CredNosso'
                            value={idSytem}
                            onChange={setIdSystem}
                        />
                    </div>
                    <div className={styles.boxItems}>
                        <h4>NOME SISTEMA</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o nome da Transportadora'
                            value={nameSytem}
                            onChange={setNameSystem}
                        />
                    </div>
                    <div className={styles.boxItems}>
                        <h4>E-MAILS</h4>
                        <p>Colocar os e-mails separados por virgula</p>
                        <textarea></textarea>
                    </div>
                </div>
                <div className={styles.boxButton}>
                    <ButtonSystem
                        label="Salvar"
                        icon="save-white"
                    />
                </div>
            </div>

        </div>
    )
}

export default TreasuryAdd