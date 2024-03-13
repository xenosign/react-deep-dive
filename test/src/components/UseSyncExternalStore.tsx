import { useSyncExternalStore } from "react";

function subscribe(callback: (this: Window, ev: UIEvent) => void) {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
}

function useWindowWidth() {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => 0 // 서버 사이드 렌더링 시 제공되는 기본값
  );
}

export default function UseSyncExternalStore() {
  const windowSize = useWindowWidth();

  return <>{windowSize}</>;
}
