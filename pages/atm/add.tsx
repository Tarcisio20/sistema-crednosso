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
                    <BoxInput
                        type='text'
                        label="ID SISTEMA"
                        placeholder='Digite o ID que se encontra no sistema CredNosso'
                        value={idSystem}
                        onChange={setIdSystem}
                    />
                    <BoxInput
                        type='text'
                        label="NOME"
                        placeholder='Digite o nome do terminal'
                        value={nameSystem}
                        onChange={setNameSystem}
                    />
                    <BoxInput
                        type='text'
                        label="N REDUZIDO"
                        placeholder='Digite o nome reduzido do terminal'
                        value={nameSystemReduz}
                        onChange={setNameSystemReduz}
                    />
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

