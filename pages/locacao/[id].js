import { locacaoMock } from "./mock";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { withRouter } from "next/router";
import Image from "next/image";

function Details(props) {
  return (
    <section className={styles.sessaoSobre}>
      <div className={styles.contentPresentation}>
        <div className={styles.sessaoContent}>
          <section className={styles.sessaoLocacao}>
            <div>
              <h2>Locação</h2>
            </div>

            <li className={styles.navItem}>
              <Link href="/">Home</Link> <span>{"»"}</span>
              <Link href="/locacao">Locação</Link>
              <span>{"»"}</span>
              <Link href={`locacao/${props.router.query.id}`}>
                <span>{props.router.query.nome}</span>
              </Link>
            </li>
          </section>
        </div>
      </div>
    </section>
  );
}
export default withRouter(Details);
