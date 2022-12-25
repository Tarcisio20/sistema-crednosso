import Head from "next/head";
import { ButtonSystem } from "../../components/Buttons/ButtonSystem";
import { ButtonTables } from "../../components/Buttons/ButtonTables";
import { HeaderPersonal } from "../../components/Headers/Header";
import { HeaderInPage } from "../../components/Headers/HeaderInPage";
import styles from "../../styles/Solicitation.module.css";

const Solicitation = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CredNosso | Solicitações</title>
        <meta name="description" content="Sistema Institucional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderPersonal slug="solicitation" />

      <div className={styles.box}>
        <HeaderInPage text="Solicitações | Home" slug="solicitation" end="/" />

        <div className={styles.boxButtons}>
          <ButtonSystem
            slug="solicitation/add"
            label="Adicionar"
            icon="add-white"
          />
        </div>

        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>LOTE</th>
                <th>DATA</th>
                <th>TOTAL</th>
                <th width="250px">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1234554</td>
                <td>17/12/2022</td>
                <td>R$ 00,00</td>
                <td className={styles.boxButtonsInTable}>
                  <ButtonTables
                    label="Ver"
                    colorText="#ffffff"
                    colorPrimary="#007dc5"
                    colorSecondary="#007dc5"
                    link={`solicitation/view/1`}
                    icon="view-white"
                  />
                  <ButtonTables
                    label="Deletar"
                    colorText="#ffffff"
                    colorPrimary="#c33a3a"
                    colorSecondary="#f12d2d"
                    link={`solicitation/delete/1`}
                    icon="delete-white"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Solicitation;
