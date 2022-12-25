import Link from "next/link";
import styles from "./style.module.css";

type Props = {
  id: string;
  label: string;
  value: string;
};

export const LineList = ({ id, label, value }: Props) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" />
      <div>{label}</div>
      <div>{value}</div>
      <div>
        <Link href={`/solicitation/edit/${id}`}>VER</Link>
      </div>
    </div>
  );
};
