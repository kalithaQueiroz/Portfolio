"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "@/components/home/loading-screen";

export const NAVIGATION_START_EVENT = "app:navigation-start";

export function startNavigationLoader() {
  window.dispatchEvent(new Event(NAVIGATION_START_EVENT));
}

export default function GlobalLoader() {
  const pathname = usePathname();
  const [loadingFromPath, setLoadingFromPath] = useState<string | null>(null);

  useEffect(() => {
    const start = () => setLoadingFromPath(pathname);
    const handleLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download"))
        return;
      const url = new URL(link.href, window.location.href);
      const samePageAnchor =
        url.pathname === window.location.pathname && url.hash;
      const newPage = url.pathname !== window.location.pathname;
      if (url.origin === window.location.origin && newPage && !samePageAnchor)
        start();
    };

    window.addEventListener(NAVIGATION_START_EVENT, start);
    document.addEventListener("click", handleLink);
    return () => {
      window.removeEventListener(NAVIGATION_START_EVENT, start);
      document.removeEventListener("click", handleLink);
    };
  }, [pathname]);

  return <LoadingScreen active={loadingFromPath === pathname} />;
}
