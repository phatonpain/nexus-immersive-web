import Spline from '@splinetool/react-spline';

export function CyberSpline() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'auto',
        opacity: 0.8,
        mixBlendMode: 'screen'
      }}
    >
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  );
}
