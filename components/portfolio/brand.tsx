import Link from "next/link";

export default function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Ir para a Home">
      <span>&lt;/&gt;</span>
    </Link>
  );
}
