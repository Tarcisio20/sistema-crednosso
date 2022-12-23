import Link from 'next/link';
import styles from './style.module.css'

type Props = {
    icon : string;
    slug: string;
}

export const BackButton = ({ icon, slug } : Props) => {
    return(
        <Link href={`/${slug}`}>
            <img className={styles.img} src={`/assets/${icon}.png`} alt="" />
        </Link>
    )
}