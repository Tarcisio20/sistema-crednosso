import Link from 'next/link'
import styles from './style.module.css'


type Props = {
    label : string;
    colorText : string;
    colorPrimary : string;
    colorSecondary : string;
    link : string;
    icon : string;
}

export const ButtonTables = ({ label, colorText, colorPrimary, colorSecondary, link, icon } : Props) => {
    return (
        <Link
            className={styles.container}
            style={{backgroundColor : colorPrimary, borderColor : colorSecondary, color: colorText}}
            href={`/${link}`}
        >
            <img className={styles.img} src={`/assets/${icon}.png`} />
            <label>{label}</label>
        </Link>
    )
}