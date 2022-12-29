import Head from 'next/head'
import { useState } from 'react'
import { BoxInput } from '../../components/BoxInput'
import { ButtonSystem } from '../../components/Buttons/ButtonSystem'
import { HeaderPersonal } from '../../components/Headers/Header'
import { HeaderInPage } from '../../components/Headers/HeaderInPage'
import styles from '../../styles/AtmAdd.module.css'

const AtmAdd = () => {

    const [idSystem, setIdSystem] = useState('')
    const [nameSystem, setNameSystem] = useState('')
    const [nameSystemReduz, setNameSystemReduz] = useState('')


    return(
        <div className={styles.container}>
             <Head>
                <title>CredNosso | Adicionar Atm</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <HeaderPersonal slug="atm" />

            <div className={styles.box}>
                <HeaderInPage text="Atm | Adicionar" slug="atm"  />

                <div className={styles.boxInputs}>
                    <h3>Informações</h3>
                    <div className={styles.boxItems}>
                        <h4>ID SISTEMA</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o ID que se encontra no sistema CredNosso'
                            value={idSystem}
                            onChange={setIdSystem}
                        />
                    </div>
                    <div className={styles.boxItems}>
                        <h4>NOME SISTEMA</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o nome do terminal'
                            value={nameSystem}
                            onChange={setNameSystem}
                        />
                    </div>
                    <div className={styles.boxItems}>
                        <h4>NOME REDUZIDO</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o nome reduzido do terminal'
                            value={nameSystemReduz}
                            onChange={setNameSystemReduz}
                        />
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

export default AtmAdd

