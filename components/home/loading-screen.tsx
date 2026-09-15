export default function LoadingScreen({ active = true }: { active?: boolean }) {
  return (
    <div
      className={active ? "global-loading active" : "global-loading"}
      role={active ? "status" : undefined}
      aria-live="polite"
      aria-label="Carregando página"
    >
      <div className="loading-mark">
        <span>&lt;/&gt;</span>
        <i />
      </div>
    </div>
  );
}
