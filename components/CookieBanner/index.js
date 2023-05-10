import posthog from "posthog-js";
import { useState } from "react";
import styles from "../../styles/CookieBanner.module.scss";
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  return (
    <div className={styles.cookieBanner}>
      {showBanner && (
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
      )}
    </div>
  );
}

export default CookieBanner;
