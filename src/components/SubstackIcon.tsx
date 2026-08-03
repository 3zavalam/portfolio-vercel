// lucide-react no incluye el logo de Substack y un icono genérico quedaría ambiguo
// en una fila de puros logos, así que va inline. Usa currentColor y el tamaño se
// controla con className, igual que los iconos de lucide.
const SubstackIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

export default SubstackIcon;
