import Head from 'next/head'
import Select from 'react-select'
import { BoxInput } from '../../components/BoxInput'
import { HeaderPersonal } from '../../components/Headers/Header'
import { HeaderInPage } from '../../components/Headers/HeaderInPage'
import styles from '../../styles/ImagesAdd.module.css'

const ImagesAdd = () => {

    const options = [
        { value: '1', label: 'Opção 1' },
        { value: '1', label: 'Opção 2' },
        { value: '3', label: 'Opção 3' }
      ]

    return (
        <div className={styles.container}>
            <Head>
                <title>CredNosso | Adicionar Solicitação Imagens</title>
                <meta name="description" content="Sistema Institucional" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 

            <HeaderPersonal slug="imagens" />   
            <div className={styles.box}>
                <HeaderInPage text="Imagens | Adicionar " slug="images"  />

                <div className={styles.boxInputs}>
                    <h3>Informações</h3>
                    <div className={styles.boxItems}>
                        <h4>CARTÃO</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o ID que se encontra no sistema CredNosso'
                            value={''}
                            onChange={()=>{}}
                        />
                    </div>

                    <div className={styles.boxItems}>
                        <h4>ID TERMINAL</h4>
                        <BoxInput
                            type='text'
                            placeholder='Digite o ID que se encontra no sistema CredNosso'
                            value={''}
                            onChange={()=>{}}
                        />
                    </div>

                    <div className={styles.boxItems}>
                        <h4>TERMINAL</h4>
                        <Select className={styles.boxSelect} options={options} placeholder="Transportadora de origem" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ImagesAdd