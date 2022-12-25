import styles from "./style.module.css";

type Props = {
  label?: string;
  data: [];
  campNull?: boolean;
  value: string;
  onChange: (newValue: string) => void;
};

export const BoxSelect = ({
  label,
  data,
  value,
  campNull,
  onChange,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <label>{label}</label>
        <select>
          {campNull != undefined && "<option value='null'><option>"}
          <option>VALOR 1</option>
          <option>VALOR 2</option>
          <option>VALOR 3</option>
        </select>
      </div>
    </div>
  );
};
