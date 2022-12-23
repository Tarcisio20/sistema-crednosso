import Link from 'next/link';
import styles from './style.module.css'

type Props = {
    slug?: string;
    label : string;
    icon : string;
}

export const ButtonSystem = ({ label, icon, slug } : Props) => {
    return(
        <Link href={`${slug}`}  className={styles.container}>
            <img
                className={styles.img}
                src={`/assets/${icon}.png`} />
            {label}
        </Link>
    )
}