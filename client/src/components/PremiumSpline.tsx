import Spline from '@splinetool/react-spline';

export type SplineType = 'orb' | 'diagram' | 'hacker' | 'cyber';

const SPLINE_URLS: Record<SplineType, string> = {
  orb: 'https://prod.spline.design/DnbfKtN1EqOD6acE/scene.splinecode',
  diagram: 'https://prod.spline.design/4BQyfdtUZkZJQrYO/scene.splinecode',
  hacker: 'https://prod.spline.design/gS4ZXUhzoyfQ4rNV/scene.splinecode',
  cyber: 'https://prod.spline.design/x0YivLkKQnxQUsi9/scene.splinecode'
};

export function PremiumSpline({ type, className = '' }: { type: SplineType, className?: string }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'auto', background: 'transparent' }}>
      <Spline scene={SPLINE_URLS[type]} />
    </div>
  );
}
