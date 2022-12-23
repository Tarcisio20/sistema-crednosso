import { BackButton } from '../../Buttons/BackButton'
import styles from './style.module.css'

type Props = {
    text: string;
    slug: string;
    end?: string;
}

export const HeaderInPage = ({ text, slug, end } : Props) => {

    if(end){
        slug = end
    }
    return(
        <div className={styles.container}>
             <BackButton icon="back" slug={slug}  />
             <h2>{text}</h2>
        </div>
    )
}