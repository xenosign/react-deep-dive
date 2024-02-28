import { renderHook } from "@testing-library/react";
import useEffectDebugger, { CONSOLE_PREFIX } from "./useEffectDebugger";

const consoleSpy = jest.spyOn(console, "log");
const componentName = "TestComponent";

describe("useEffectDebugger", () => {
  afterAll(() => {
    // eslint-disable-next-line
    // @ts-ignore
    process.env.NODE_ENV = "development";
  });

  it("props 가 없으면 호출되지 않는다", () => {
    renderHook(() => useEffectDebugger(componentName));

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("최초에는 호출되지 않는다", () => {
    const props = { hello: "world" };

    renderHook(() => useEffectDebugger(componentName, props));

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("props 가 변경되지 않으면 호출되지 않는다", () => {
    const props = { hello: "world" };

    const { rerender } = renderHook(() =>
      useEffectDebugger(componentName, props)
    );

    expect(consoleSpy).not.toHaveBeenCalled();

    rerender();

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("props 가 변경되면 다시 호출한다", () => {
    const props = { hello: "world" };

    const { rerender } = renderHook(
      () => useEffectDebugger(componentName, props),
      {
        initialProps: {
          componentName,
          props,
        },
      }
    );

    const newProps = { hello: "world2" };

    rerender({ componentName, props: newProps });

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("process.env.NODE_ENV 가 production 이면 호출되지 않는다", () => {
    // eslint-disable-next-line
    // @ts-ignore
    process.env.NODE_ENV = "production";

    const props = { hello: "world" };

    const { rerender } = renderHook(
      () => useEffectDebugger(componentName, props),
      {
        initialProps: {
          componentName,
          props,
        },
      }
    );

    const newProps = { hello: "world2" };

    rerender({ componentName, props: newProps });

    expect(consoleSpy).not.toHaveBeenCalled();
  });
});
