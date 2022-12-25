import Head from "next/head";
import { useState } from "react";
import { BoxInput } from "../../../components/BoxInput";
import { ButtonSystem } from "../../../components/Buttons/ButtonSystem";
import { HeaderPersonal } from "../../../components/Headers/Header";
import { HeaderInPage } from "../../../components/Headers/HeaderInPage";
import { useHelppers } from "../../../libs/useHelppers";
import styles from "./style.module.css";

const View = () => {
  const helppers = useHelppers();

  const [idSolicitation, setIdSolicitation] = useState("");
  const [nameSolicitation, setNameSolicitation] = useState("");
  const [dateSolicitation, setDateSolicitation] = useState("00/00/0000");

  const [value10, setValue10] = useState("0");
  const [value20, setValue20] = useState("0");
  const [value50, setValue50] = useState("0");
  const [value100, setValue100] = useState("0");
  const [valueTotal, setValueTotal] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>CredNosso | Ver Solicitação individual</title>
        <meta name="description" content="Sistema Institucional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPersonal slug="solicitation" />

      <div className={styles.box}>
        <HeaderInPage text="Solicitação | Editar" slug="solicitation" />
        <div className={styles.areaLeft}>
          <h3>Area Pedido</h3>
          <div className={styles.areaBox}>
            <BoxInput
              type="number"
              label="ID"
              value={idSolicitation}
              onChange={setIdSolicitation}
            />

            <BoxInput
              type="text"
              label="NOME"
              value={nameSolicitation}
              onChange={setNameSolicitation}
            />

            <BoxInput
              type="date"
              label="DATA"
              value={dateSolicitation}
              onChange={setDateSolicitation}
            />
          </div>
          <div className={styles.line}></div>
          <div className={styles.boxCustody}>
            <BoxInput
              type="text"
              label="R$ 10,00"
              value={value10}
              onChange={setValue10}
            />
            <div className={styles.containerValueReal}>
              <div className={styles.valueReal}>
                {helppers.handleTransforInReal(
                  helppers.handleCalcCassInReject("10", value10, 0)
                )}
              </div>
            </div>
          </div>

          <div className={styles.boxCustody}>
            <BoxInput
              type="text"
              label="R$ 20,00"
              value={value20}
              onChange={setValue20}
            />
            <div className={styles.containerValueReal}>
              <div className={styles.valueReal}>
                {helppers.handleTransforInReal(
                  helppers.handleCalcCassInReject("20", value20, 0)
                )}
              </div>
            </div>
          </div>

          <div className={styles.boxCustody}>
            <BoxInput
              type="text"
              label="R$ 50,00"
              value={value50}
              onChange={setValue50}
            />
            <div className={styles.containerValueReal}>
              <div className={styles.valueReal}>
                {helppers.handleTransforInReal(
                  helppers.handleCalcCassInReject("50", value50, 0)
                )}
              </div>
            </div>
          </div>

          <div className={styles.boxCustody}>
            <BoxInput
              type="text"
              label="R$ 100,00"
              value={value100}
              onChange={setValue100}
            />
            <div className={styles.containerValueReal}>
              <div className={styles.valueReal}>
                {helppers.handleTransforInReal(
                  helppers.handleCalcCassInReject("100", value100, 0)
                )}
              </div>
            </div>
          </div>
          <div className={styles.valuesTotal}>
            {helppers.handleTransforInReal(
              helppers.handleCalcTotal(value10, value20, value50, value100)
            )}
          </div>
          <div className={styles.observation}>
            <h3>Observação</h3>
            <textarea></textarea>
          </div>
          <div className={styles.areaButton}>
            <ButtonSystem label="Editar" icon="edit-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
