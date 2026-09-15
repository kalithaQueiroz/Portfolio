"use client";

import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { startNavigationLoader } from "@/components/layout/global-loader";

export default function HomeGateway({ children }: { children: ReactNode }) {
  const router = useRouter();
  const start = useRef<{ x: number; y: number } | null>(null);
  const [leaving, setLeaving] = useState(false);
  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    startNavigationLoader();
    window.setTimeout(() => router.push("/portfolio"), 500);
  };
  const isInteractive = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest("a,button"));
  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (!isInteractive(event.target))
      start.current = { x: event.clientX, y: event.clientY };
  };
  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (!start.current || isInteractive(event.target)) return;
    const distance = Math.hypot(
      event.clientX - start.current.x,
      event.clientY - start.current.y,
    );
    start.current = null;
    if (distance >= 28) enter();
  };
  return (
    <section
      className="hero full-screen home-gateway"
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") enter();
      }}
      onClick={(event) => {
        if (!isInteractive(event.target)) enter();
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      aria-label="Clique, toque ou arraste para entrar no portfólio"
    >
      {children}
    </section>
  );
}
