export function Card({
  title,
  subtitle,
  children,
  className = ""
}: {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft ${className}`}>
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {subtitle && <p className="mt-1 text-sm opacity-70">{subtitle}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
