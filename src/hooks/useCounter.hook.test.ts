import { useCounter } from "./useCounter.hook";
import { act, renderHook } from "@testing-library/react-hooks";

describe("The hook", () => {
  beforeAll(() => {});

  it("should increment the counter so that its value is 1", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it("should decrement the counter so that its value is -1", () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(-1);
  });
});
