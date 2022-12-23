import styles from './style.module.css'

type Props = {
    label?:string;
    placeholder?: string;
    type: string;
    value: string | number;
    onChange: (newValue : string)=>void;
}

export  const BoxInput = ({label, placeholder, type, value, onChange} : Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <label>{label}</label>
                <input 
                    type={type}
                    value={value}
                    onChange={e=>onChange(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}