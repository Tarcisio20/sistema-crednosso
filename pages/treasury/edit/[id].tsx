import Head from 'next/head'
import {  useState } from 'react'
import { BoxInput } from '../../../components/BoxInput'
import { ButtonSystem } from '../../../components/Buttons/ButtonSystem'
import { HeaderPersonal } from '../../../components/Headers/Header'
import { HeaderInPage } from '../../../components/Headers/HeaderInPage'
import styles from '../../../styles/TreasuryEdit.module.css'

const TreasuryEdit = () => {

    const [idSytem, setIdSystem] = useState('')
    const [nameSytem, setNameSystem] = useState('')
    const [valueCass10, setValueCass10] = useState('0')
    const [valueCass20, setValueCass20] = useState('0')
    const [valueCass50, setValueCass50] = useState('0')
    const [valueCass100, setValueCass100] = useState('0')

    return(
        <div className={styles.container}>
            <Head>
                <title>CredNosso | Editar Tesouraria</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <HeaderPersonal slug="treasury" />
            <div className={styles.box}>
                <HeaderInPage text="Tesouraria | Editar" slug="treasury"  />
                <div className={styles.boxInputs}>
                <h3>Informações</h3>
                    <BoxInput
                        type='text'
                        label="ID SISTEMA"
                        value={idSytem}
                        onChange={setIdSystem}
                    />
                    <BoxInput
                        type='text'
                        label="NOME"
                        value={nameSytem}
                        onChange={setNameSystem}
                    />
                </div>
                <div className={styles.boxComposition}>
                    <h3>Custodia</h3>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 10,00"
                            value={valueCass10}
                            onChange={setValueCass10}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >{(parseInt(valueCass10) * 10).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                        </div>
                    </div>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 20,00"
                            value={valueCass20}
                            onChange={setValueCass20}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >{(parseInt(valueCass20) * 20).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                        </div>
                    </div>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 50,00"
                            value={valueCass50}
                            onChange={setValueCass50}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >{(parseInt(valueCass50) * 50).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                        </div>
                    </div>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 100,00"
                            value={valueCass100}
                            onChange={setValueCass100}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >{(parseInt(valueCass100) * 100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                        </div>
                    </div>
                    <div className={styles.valuesTotal}>
                        {((parseInt(valueCass10)*10)+(parseInt(valueCass20)*20)+(parseInt(valueCass50)*50)+(parseInt(valueCass100)*100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </div>
                </div>
                <div className={styles.boxButton}>

                    <ButtonSystem
                        label="Editar"
                        icon="edit-white"
                    />
                </div>
            </div>
        </div>
    )

}

export default TreasuryEdit