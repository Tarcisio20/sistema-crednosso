import Head from "next/head";
import { useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ButtonSystem } from "../../components/Buttons/ButtonSystem";
import { ButtonTables } from "../../components/Buttons/ButtonTables";
import { HeaderPersonal } from "../../components/Headers/Header";
import { HeaderInPage } from "../../components/Headers/HeaderInPage";
import { LineList } from "../../components/LineList";

import { useHelppers } from "../../libs/useHelppers";
import styles from "../../styles/SolicitationAdd.module.css";

const SolicitationAdd = () => {
  const helppers = useHelppers();

  const [idSolicitation, setIdSolicitation] = useState("");
  const [nameSolicitation, setNameSolicitation] = useState("");
  const [dateSolicitation, setDateSolicitation] = useState("00/00/0000");
  const [dateSolicitationSearch, setDateSolicitationSearch] =
    useState("00/00/0000");

  const [value10, setValue10] = useState("0");
  const [value20, setValue20] = useState("0");
  const [value50, setValue50] = useState("0");
  const [value100, setValue100] = useState("0");
  const [valueTotal, setValueTotal] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>CredNosso | Adicionar Solicitação</title>
        <meta name="description" content="Sistema Institucional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPersonal slug="solicitation" />

      <div className={styles.box}>
        <HeaderInPage text="Solicitação | Adicionar" slug="solicitation" />

        <div className={styles.areaTotal}>
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
              <ButtonSystem label="Adicionar" icon="save-white" />
            </div>
          </div>
          <div className={styles.areaRight}>
            <h3>Pedidos Realizados</h3>
            <div className={styles.list}>
              <LineList id="1" label="Transportadora 1" value="R$ 18.000,00" />
              <LineList id="2" label="Transportadora 2" value="R$ 250.000,00" />
              <LineList
                id="3"
                label="Transportadora 3"
                value="R$ 1.000.000,00"
              />
              <LineList id="4" label="Transportadora 4" value="R$ 18.000,00" />
            </div>
            <div className={styles.boxButtons}>
              <ButtonTables
                label="Excluir"
                colorText="#FFFFFF"
                colorPrimary="#c33a3a"
                colorSecondary="#f12d2d"
                link={`solicitation/delete/1`}
                icon="delete-white"
              />

              <BoxInput
                type="date"
                label="DATA"
                value={dateSolicitationSearch}
                onChange={setDateSolicitationSearch}
              />

              <ButtonTables
                label="Carregar"
                colorText="#FFFFFF"
                colorPrimary="#38e808"
                colorSecondary="#44c521"
                link={`solicitation/view-date/0000-00-00`}
                icon="loading-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitationAdd;
