import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.scss";
import Link from "next/link";
import { withRouter } from "next/router";
import Image from "next/image";

function Details(props) {
  console.log("props", props);
  return (
    <>
      <section className={styles.sessaoLocacao}>
        <div className={styles.indice}>
          <h2>{props.router.query.nome}</h2>

          <li className={styles.navItem}>
            <Link href="/">Home</Link> <span>{"»"}</span>
            <Link href="/locacao">Locação</Link>
            <span>{` » `}</span>
            <span>{props.router.query.nome}</span>
          </li>
        </div>

        <div className={styles.boxDescricao}>
          <h3>Descrição:</h3>
          <p>{props.router.query.descricao}</p>
          <h3>Ficha Técnica:</h3>
          <div className={styles.boxFicha}>
            <Image
              className={styles.cardsContentImg}
              src={
                props.router.query.imagem !== undefined
                  ? props.router.query.imagem
                  : "/"
              }
              alt={props.router.query.nome}
              width={500}
              height={500}
            />
            {props.router.query.fichaTecnica !== undefined ? (
              <ul className={styles.detail}>
                <li className={styles.topic}>
                  Pressao: {JSON.parse(props.router.query.fichaTecnica).pressao}
                </li>
                <li className={styles.topic}>
                  Saidas: {JSON.parse(props.router.query.fichaTecnica).saidas}
                </li>
                <li className={styles.topic}>
                  Acionamento:{" "}
                  {JSON.parse(props.router.query.fichaTecnica).acionamento}
                </li>
                <li className={styles.topic}>
                  Motor: {JSON.parse(props.router.query.fichaTecnica).motor}
                </li>
                <li className={styles.topic}>
                  Tensao: {JSON.parse(props.router.query.fichaTecnica).tensao}
                </li>
                <li className={styles.topic}>
                  Peso: {JSON.parse(props.router.query.fichaTecnica).peso}
                </li>
                <li className={styles.topic}>
                  Dimensoes:{" "}
                  {JSON.parse(props.router.query.fichaTecnica).dimensoes}
                </li>
                <li className={styles.topic}>
                  Vazao: {JSON.parse(props.router.query.fichaTecnica).vazao}
                </li>
                <li className={styles.topic}>
                  Capacidade:{" "}
                  {JSON.parse(props.router.query.fichaTecnica).capacidade}
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <Image
              src={
                props.router.query.imagem !== undefined
                  ? props.router.query.imagemTabela
                  : "/"
              }
              alt={props.router.query.nome}
              width={800}
              height={440}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default withRouter(Details);
