import Head from "next/head";
import { useState } from "react";
import { BoxInput } from "../../../components/BoxInput";
import { ButtonSystem } from "../../../components/Buttons/ButtonSystem";
import { HeaderPersonal } from "../../../components/Headers/Header";
import { HeaderInPage } from "../../../components/Headers/HeaderInPage";
import styles from "./style.module.css";

const ViewDate = () => {
  const [dateSolicitation, setDateSolicitation] = useState("0000/00/00");

  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Head>
          <title>CredNosso | Visualizar Solicitação</title>
          <meta name="description" content="Sistema Institucional" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeaderPersonal slug="solicitation" />

        <div className={styles.box}>
          <HeaderInPage text="Solicitação | Visualizar" slug="solicitation" />
          <div className={styles.areaDate}>
            <BoxInput
              type="date"
              label="DATA"
              value={dateSolicitation}
              onChange={setDateSolicitation}
            />
            <ButtonSystem label="Carregar" icon="loading-white" />

            <div className={styles.boxList}>
              <table>
                <thead>
                  <td>
                    <th>LOTE</th>
                    <th>DATA</th>
                    <th>TIPO</th>
                    <th>ORIGEM</th>
                    <th>DESTINO</th>
                  </td>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDate;
