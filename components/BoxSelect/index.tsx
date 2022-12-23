import styles from './style.module.css'


type Props = {
    label : string;
    name: string;
    value: string;
    onChange: (newValue : string)=>void;
}

export const BoxSelect = ({ label, name, value, onChange } : Props) => {
    return(
        <div className={styles.container}>
         
        </div>
    )
}