import styles from './style.module.css'

type Props = {
    placeholder?: string;
    type: string;
    value: string | number;
    onChange: (newValue : string)=>void;
}

export  const BoxInput = ({ placeholder, type, value, onChange} : Props) => {
    return(
        <input className={styles.container}
            type={type}
            value={value}
            onChange={e=>onChange(e.target.value)}
            placeholder={placeholder}
        />

    )
}