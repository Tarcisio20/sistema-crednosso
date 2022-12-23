import Head from 'next/head'
import { useState } from 'react'
import { BoxInput } from '../../../components/BoxInput'
import { ButtonSystem } from '../../../components/Buttons/ButtonSystem'
import { HeaderPersonal } from '../../../components/Headers/Header'
import { HeaderInPage } from '../../../components/Headers/HeaderInPage'
import styles from '../../../styles/AtmEdit.module.css'

const AtmEdit = () => {

    const [idSystem, setIdSystem] = useState('')
    const [nameSystem, setNameSystem] = useState('')
    const [nameSystemReduz, setNameSystemReduz] = useState('')

    const [valueCass10, setValueCass10] = useState('0')
    const [valueReject10, setValueReject10] = useState('0')
    const [valueCass20, setValueCass20] = useState('0')
    const [valueReject20, setValueReject20] = useState('0')
    const [valueCass50, setValueCass50] = useState('0')
    const [valueReject50, setValueReject50] = useState('0')
    const [valueCass100, setValueCass100] = useState('0')
    const [valueReject100, setValueReject100] = useState('0')

    const [totalCass, setTotalCass] = useState('0')
    const [totalReject, setTotalRejectCass] = useState('0')

    const handleCalcCassInReject = (cass : string, valueCass : string, valueReject : string) => {
        return (parseInt(valueCass) + parseInt(valueReject)) * parseInt(cass)
    }

    const handleTransforInReal = (value : number) => {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

    const handleCalcTotal = () => {
        let cass10 = handleCalcCassInReject('10', valueCass10, valueReject10)
        let cass20 = handleCalcCassInReject('20', valueCass20, valueReject20)
        let cass50 = handleCalcCassInReject('50', valueCass50, valueReject50)
        let cass100 = handleCalcCassInReject('100', valueCass100, valueReject100)

        return cass10 + cass20 + cass50 + cass100
    }
    
    return(
        <div className={styles.container}>
            <Head>
                <title>CredNosso | Editar Tesouraria</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <HeaderPersonal slug="atm" />

            <div className={styles.box}>
                
                <HeaderInPage text="Atm | Editar" slug="atm"  />
                <div className={styles.boxInputs}>
                    <h3>Informações</h3>
                    <BoxInput
                        type='text'
                        label="ID SISTEMA"
                        value={idSystem}
                        onChange={setIdSystem}
                    />
                    <BoxInput
                        type='text'
                        label="NOME"
                        value={nameSystem}
                        onChange={setNameSystem}
                    />
                    <BoxInput
                        type='text'
                        label="N REDUZIDO"
                        value={nameSystemReduz}
                        onChange={setNameSystemReduz}
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
                           <BoxInput
                            type='text'
                            label="REJEIÇÃO"
                            value={valueReject10}
                            onChange={setValueReject10}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >
                                {handleTransforInReal(handleCalcCassInReject('10', valueCass10, valueReject10))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 20,00"
                            value={valueCass20}
                            onChange={setValueCass20}
                        />
                           <BoxInput
                            type='text'
                            label="REJEIÇÃO"
                            value={valueReject20}
                            onChange={setValueReject20}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >
                                {handleTransforInReal(handleCalcCassInReject('20', valueCass20, valueReject20))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 50,00"
                            value={valueCass50}
                            onChange={setValueCass50}
                        />
                           <BoxInput
                            type='text'
                            label="REJEIÇÃO"
                            value={valueReject50}
                            onChange={setValueReject50}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >
                                {handleTransforInReal(handleCalcCassInReject('50', valueCass50, valueReject50))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.boxCustody}>
                        <BoxInput
                            type='text'
                            label="R$ 100,00"
                            value={valueCass100}
                            onChange={setValueCass100}
                        />
                           <BoxInput
                            type='text'
                            label="REJEIÇÃO"
                            value={valueReject100}
                            onChange={setValueReject100}
                        />
                        <div className={styles.containerValueReal}>
                            <div className={styles.valueReal} >
                                {handleTransforInReal(handleCalcCassInReject('100', valueCass100, valueReject100))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.valuesTotal}>
                        {handleTransforInReal(handleCalcTotal())}
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

export default AtmEdit