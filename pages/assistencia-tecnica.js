import styles from "../styles/Home.module.scss";

import Image from "next/image";
import Link from "next/link";

export default function AssistenciaTecnica() {
  return (
    <>
      <div>
        <section className={styles.sessaoLocacao}>
          <div className={styles.indice}>
            <h2>Assistência Técnica</h2>

            <li className={styles.navItem}>
              <Link href="/">Home</Link> <span>{"»"}</span>
              <Link href="/assistencia-tecnica">Assistencia Técnica</Link>
            </li>
          </div>
        </section>

        <section className={styles.sessaoAssistencia}>
          <div className={styles.sessaoContent}>
            <p className={styles.description}>
              A FTM conta com uma equipe técnica altamente qualificada para
              manutenção de máquinas e ferramentas do segmento hidráulico,
              mecânico, elétrico, pneumático e manual, nossa oficina está
              devidamente equipada com ferramentas tecnológicas para realizarmos
              a desmontagem, o diagnóstico e a perfeita manutenção, que tem
              garantia completa de mão de obra e peças. Todos os orçamentos são
              encaminhados aos clientes juntamente com o Relatório técnico com
              foto evidenciando o problema e a solução do mesmo.
            </p>
          </div>
          <div style={{ marginTop: "6em" }}>
            <div className={styles.contentBanner}>
              <Image
                src="https://res.cloudinary.com/aguadeira/image/upload/v1648581119/FTM/calibra%C3%A7%C3%A3o_qqp1ku.jpg"
                alt="Calibração"
                width={438.08}
                height={350.38}
              />
            </div>
            <div className={styles.sessaoContent}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Calibração</h2>
              <p className={styles.description}>
                Sempre que aplicável, os equipamentos fornecidos pela FTM para
                locação ou venda são calibrados com padroes nacionais de medida
                rastreáveis à Rede Brasileira de Calibração (RBC) em
                laboratórios qualificados e independentes.
              </p>
            </div>

            <div className={styles.sessaoContent} style={{ marginTop: "10em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Manutenção</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1648581940/FTM/WhatsApp_Image_2022-03-29_at_16.23.58_pvk2br.jpg"
                  alt="Manutenção"
                  width={905}
                  height={768}
                />
              </div>

              <p className={styles.description}>
                Prestamos assistência técnica e manutenção em: - Chaves de
                torque e link`s hidraulicos (independente da marca, modelo ou
                capacidade fornecemos peças e serviços.) - Multiplicadores de
                torque - Tensionadores hidráulicos -Torqueadores Elétricos ou
                pneumáticos , Torquímetros de estalo, Unidades Hidraulicas
                Elétricas e Pneumáticas (Bombas ) para chave de torque.
              </p>
            </div>
            <div className={styles.sessaoContent} style={{ marginTop: "12em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Treinamentos</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1636990367/FTM/83e540ab-c0b6-4393-a21a-a747945fe95d_2_q2s7u0.jpg"
                  alt="Treinamentos"
                  width={905}
                  height={768}
                />
              </div>

              <p className={styles.description}>
                A FTM oferece treinamento operacional com o objetivo de
                capacitar operadores para utilização de equipamentos hidráulicos
                e acessórios (chaves de torque, unidades de bombeio,
                tensionadores hidraulicos,multiplicadores, torquímetros de
                estalo, etc). O treinamento traz inúmeros benefícios para sua
                empresa, aprimora o desempenho do trabalhador e do equipamento,
                reduz o tempo de operação e oferece segurança ao operador. Os
                alunos recebem material de apoio com o conteúdo das aulas e
                complementações. O curso é desenvolvido através de apresentações
                multimídia, discussões e prática de conceitos e exercícios. Ao
                final do curso, o aluno recebe certificação individual.
              </p>
            </div>
            <div className={styles.sessaoContent} style={{ marginTop: "10em" }}>
              <div className={styles.borderStyle}></div>
              <h2 className={styles.title}>Projetos Especiais</h2>
              <div className={styles.contentBanner}>
                <Image
                  src="https://res.cloudinary.com/aguadeira/image/upload/v1648581302/FTM/projetos-especiais-2_1_wlrbus.jpg"
                  alt="Projetos Especiais"
                  width={958}
                  height={768}
                />
              </div>

              <p className={styles.description}>
                Projetamos e fabricamos projetos especiais sob encomenda de
                acordo com as necessidades de aplicação.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
