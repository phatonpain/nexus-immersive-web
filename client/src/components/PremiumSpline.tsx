import { lazy, Suspense, useEffect, useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const Spline = lazy(() => import('@splinetool/react-spline'));

export type SplineType = 'orb' | 'diagram' | 'hacker' | 'cyber';

const SPLINE_URLS: Record<SplineType, string> = {
  orb: 'https://prod.spline.design/DnbfKtN1EqOD6acE/scene.splinecode',
  diagram: 'https://prod.spline.design/4BQyfdtUZkZJQrYO/scene.splinecode',
  hacker: 'https://prod.spline.design/gS4ZXUhzoyfQ4rNV/scene.splinecode',
  cyber: 'https://prod.spline.design/x0YivLkKQnxQUsi9/scene.splinecode'
};

export function PremiumSpline({ type, className = '' }: { type: SplineType, className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <div
      className={`global-spline-background ${className}`}
      data-spline-type={type}
      data-spline-state={failed ? 'error' : enabled ? loaded ? 'ready' : 'loading' : 'static'}
      aria-hidden="true"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10, pointerEvents: 'auto' }}
    >
      <div className="global-spline-fallback" />
      {enabled && (
        <ErrorBoundary key={type} fallback={null} onError={() => setFailed(true)}>
          <Suspense fallback={null}>
            <Spline
              className="global-spline-canvas"
              scene={SPLINE_URLS[type]}
              renderOnDemand
              onLoad={application => {
                application.setGlobalEvents(false);
                setFailed(false);
                setLoaded(true);
              }}
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
