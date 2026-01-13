import styles from "../../styles/CookieBanner.module.scss";
function CookieBanner({ onClose }) {
  const acceptCookies = async () => {
    if (typeof window !== "undefined") {
      try {
        const posthog = (await import("posthog-js")).default;
        posthog.opt_in_capturing();
      } catch (e) {
        console.error("Error opting in to PostHog:", e);
      }
    }
    if (onClose) {
      onClose();
    }
  };

  const declineCookies = async () => {
    if (typeof window !== "undefined") {
      try {
        const posthog = (await import("posthog-js")).default;
        posthog.opt_out_capturing();
      } catch (e) {
        console.error("Error opting out of PostHog:", e);
      }
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.cookieContainer}>
          <p>
            Usamos cookies de rastreamento para entender como você usa o
            produto, ajudando-nos a melhorar. Aceite cookies para nos ajudar a
            melhorar.
          </p>

          <button
            className={styles.btnDefault}
            type="button"
            onClick={acceptCookies}
          >
            Aceitar Cookies
          </button>
          <button
            className={styles.btnDefault}
            type="button"
            onClick={declineCookies}
          >
            Negar Cookies
          </button>
        </div>
    </div>
  );
}

export default CookieBanner;
