import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Desabilita a restauração automática de scroll do navegador
  useEffect(() => {
    const hasScrollRestoration = "scrollRestoration" in window.history;
    const prev = hasScrollRestoration
      ? (window.history as any).scrollRestoration
      : undefined;
    try {
      if (hasScrollRestoration) {
        (window.history as any).scrollRestoration = "manual";
      }
    } catch {}

    return () => {
      try {
        if (hasScrollRestoration && prev) {
          (window.history as any).scrollRestoration = prev;
        }
      } catch {}
    };
  }, []);

  useEffect(() => {
    const scrollToTopNow = () => {
      // Janela
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      // Elementos de documento (alguns navegadores usam esses valores)
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      // Caso o container rolável seja um <main> com overflow
      const main = document.querySelector("main");
      if (main) (main as HTMLElement).scrollTop = 0;
    };

    // Executa após o paint e novamente após um pequeno delay para sobrepor
    // a restauração de scroll em mobile (Safari/Android)
    requestAnimationFrame(() => {
      scrollToTopNow();
      setTimeout(scrollToTopNow, 50);
    });
  }, [pathname]);

  return null;
}

