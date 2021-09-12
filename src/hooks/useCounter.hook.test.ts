import { useCounter } from "./useCounter.hook";
import { act, renderHook } from "@testing-library/react-hooks";

describe("The hook", () => {
  it("should increment the counter so that its value is 1", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.state.count).toBe(1);
  });

  it("should decrement the counter so that its value is -1", () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.state.count).toBe(-1);
  });
});
