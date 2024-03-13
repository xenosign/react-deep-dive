import { useEffect, useInsertionEffect, useLayoutEffect } from "react";

export default function useEffectSeries() {
  useEffect(() => {
    console.log("useEffect!"); // 3
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect!"); // 2
  });
  useInsertionEffect(() => {
    console.log("useInsertionEffect!"); // 1
  });

  return <></>;
}
