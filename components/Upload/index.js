import { useForm } from "@formspree/react";
import styles from "../../styles/Home.module.scss";
export default function Upload() {
  const [state, handleSubmit] = useForm("xzbojrke");

  return (
    <>
      <form
        id="fs-frm"
        acceptCharset="utf-8"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xzbojrke"
        method="POST"
        encType="multipart/form-data"
      >
        <label htmlFor="Nome">Nome</label>
        <input
          id="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="Email">Email corporativo</label>
        <input
          type="text"
          name="email"
          id="Email"
          placeholder="Digite seu e-mail corporativo"
          required
          pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)(?!icloud.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
          oninvalid="setCustomValidity('Please enter business email')"
          onchange="try{setCustomValidity('')}catch(e){}')"
        />
        <label htmlFor="Telefone">Telefone</label>
        <input
          id="Telefone"
          placeholder="55 11 98876-5432"
          type="number"
          name="phone"
          required
        />

        <label htmlFor="Mensagem">Mensagem</label>
        <textarea id="Mensagem" type="text" name="message" required />

        {state.succeeded ? (
          <>
            {" "}
            <p>Obrigado! Nós entraremos em contato em breve</p>
            <p>
              {" "}
              Clique{" "}
              <a
                href="/CATALOGO_FTM_2022.pdf"
                download
                className={styles.btnClick}
              >
                aqui{" "}
              </a>
              para fazer o download do nosso Catálogo de vendas 2022 !
            </p>
          </>
        ) : (
          <button
            type="submit"
            disabled={state.submitting}
            className={styles.btnDefault}
          >
            Enviar
          </button>
        )}
      </form>
    </>
  );
}
