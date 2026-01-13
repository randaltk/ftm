import React, { useState, useRef, useEffect } from "react";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import Head from "next/head";

// Components

import Header from "../components/Header";
import Backdrop from "../components/Backdrop";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import dynamic from "next/dynamic";

const ReactWhatsapp = dynamic(() => import("react-whatsapp"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [sideToggle, setSideToggle] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true); // Start with true - show by default
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Only check cookie preferences on the client side
    if (typeof window !== "undefined") {
      // First, check localStorage directly for any saved preference
      const checkLocalStorage = () => {
        try {
          // Check for PostHog opt-in/opt-out flags in localStorage
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.includes('posthog') || key.includes('ph_'))) {
              const value = localStorage.getItem(key);
              // If we find opt-in or opt-out, user has made a choice
              if (key.includes('opt_out') && value === 'true') {
                return false; // User opted out, don't show banner
              }
              if (key.includes('opt_in') && value === 'true') {
                return false; // User opted in, don't show banner
              }
            }
          }
        } catch (e) {
          console.error('Error checking localStorage:', e);
        }
        return true; // No preference found, show banner
      };

      // Check localStorage first
      const shouldShow = checkLocalStorage();
      if (!shouldShow) {
        setShowCookieBanner(false);
        return;
      }

      // Initialize PostHog in _app.js so it's available on all pages
      import("posthog-js").then((posthogModule) => {
        const posthog = posthogModule.default;
        
        // Initialize PostHog if not already initialized
        if (!posthog.__loaded) {
          posthog.init(
            "phc_iUCwqO9iWx1wUiUOsPDbcbJkoZ6xM4NaM0oNI31G9hE",
            {
              api_host: "https://app.posthog.com",
              loaded: (ph) => {
                // Check preferences after PostHog is loaded
                try {
                  const hasOptedOut = ph.has_opted_out_capturing();
                  const hasOptedIn = ph.has_opted_in_capturing();
                  // Only hide banner if user has made a choice
                  setShowCookieBanner(!hasOptedOut && !hasOptedIn);
                } catch (e) {
                  // If check fails, keep banner visible (default true)
                  console.error('Error checking PostHog preferences:', e);
                }
              }
            }
          );
        } else {
          // PostHog already loaded, check preferences immediately
          try {
            const hasOptedOut = posthog.has_opted_out_capturing();
            const hasOptedIn = posthog.has_opted_in_capturing();
            // Only hide banner if user has made a choice
            setShowCookieBanner(!hasOptedOut && !hasOptedIn);
          } catch (e) {
            // If check fails, keep banner visible (default true)
            console.error('Error checking PostHog preferences:', e);
          }
        }
      }).catch((e) => {
        // If PostHog fails to load, keep banner visible (default true)
        console.error('Error loading PostHog:', e);
      });
    }
  }, []);

  const handleCookieBannerClose = () => {
    setShowCookieBanner(false);
  };

  return (
    <>
      <Head>
        <title>FTM | Equipamentos Hidráulicos de Alta Pressão</title>
      </Head>

      <main className={styles.bodyContent}>
        <Topbar />
        <Header click={() => setSideToggle(true)} />
        {isClient && showCookieBanner && <CookieBanner onClose={handleCookieBannerClose} />}
        <ReactWhatsapp
          className={styles.wppAbsolute}
          number="55 11 99416-6042"
          message="Olá! Gostaria de obter mais informações"
          href="#"
        >
          <img
            alt="WhatsApp"
            width={55}
            height={55}
            src="https://res.cloudinary.com/aguadeira/image/upload/v1636221969/FTM/logo-whatsapp-png-46041_1_vtrevq.png"
          />
        </ReactWhatsapp>

        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

        <Component {...pageProps} />

        <Footer />
      </main>
    </>
  );
}

export default MyApp;
