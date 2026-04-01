import { useFadeIn } from "../hooks/useFadeIn";

export function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}
