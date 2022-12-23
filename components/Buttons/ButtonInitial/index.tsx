import Link from 'next/link';
import styles from './style.module.css'

type Props = {
    slug : string;
    title : string;
}

export const ButtonInitial = ({ slug, title } : Props ) => {
    return(
        <Link className={styles.container} href={`/${slug}`}>{title}</Link>
    )
}