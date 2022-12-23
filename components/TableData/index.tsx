import Link from 'next/link';
import styles from './style.module.css'

interface ObjectReturn  {
    id: string;
    name : string;
    saldo: string;
}

type Props = {
    dataHeader : string[];
    dataBody : [ObjectReturn];
    link: string;
}

export const TableData = ({ dataHeader, dataBody, link } : Props) => {

    let countBody = dataBody.length

    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    {dataHeader.map((item, index)=>(
                        <th key={index} >{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataBody.map((item, index)=>(
                    <tr key={index}>
                        <td  width={80} >{item.id}</td>
                        <td  >{item.name}</td>
                        <td width={400} >{item.saldo}</td>
                        <td width={200} >  
                            <Link className={styles.buttonTable} style={{backgroundColor : '#3483b0'}}  href={`${link}/edit/${item.id}`}>
                                <img className={styles.img} src="/assets/edit-white.png" />
                                Editar
                            </Link>
                            <Link className={styles.buttonTable} style={{backgroundColor : '#c33a3a'}} href={`${link}/del/${item.id}`}>
                                <img className={styles.img} src="/assets/delete-white.png" />
                                Deletar
                            </Link>
                        </td>
                    </tr>
                ))}  
            </tbody>
        </table>
    )
}