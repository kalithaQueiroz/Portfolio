"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { startNavigationLoader } from "@/components/layout/global-loader";

export default function HomeEnterLink() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const enterPortfolio = () => {
    if (leaving) return;
    setLeaving(true);
    startNavigationLoader();
    window.setTimeout(() => router.push("/portfolio"), 650);
  };

  return (
    <button
      className="text-link home-enter"
      type="button"
      onClick={enterPortfolio}
    >
      Conheça meu trabalho <ArrowRight />
    </button>
  );
}
