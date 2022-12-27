import { useEffect } from "react";
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
  let op;
  const handleFunctionOptions = (info : []) => {
    let opts = ''
    if(campNull != null){
        opts+="<option value='null'><option>";
    }
    for(let x = 0; x > info.length; x++){
      opts+= `<option value='${info[x].id}'>${info[x].name}</option>`;
      console.log(info[x])
    }
    return opts
  }
  useEffect(()=>{
    let op = handleFunctionOptions(data)
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <label>{label}</label>
        <select>
         {op}
        </select>
      </div>
    </div>
  );
};
