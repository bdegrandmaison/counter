import { useCounter } from "./useCounter.hook";
import { act, renderHook } from "@testing-library/react-hooks";

jest.mock("./useCounter.hook", () => ({
  __esModule: true,
  useCounter: (num: number) => ({
    state: { count: 0 },
    increment: jest.fn(),
    decrement: jest.fn(),
  }),
}));

describe("The hook", () => {
  const { result } = renderHook(() => useCounter(0));

  const increment = result.current.increment as jest.Mock;
  const decrement = result.current.decrement as jest.Mock;

  beforeEach(() => {
    increment.mockImplementation(() => () => {});
    decrement.mockImplementation(() => () => {});
  });

  afterEach(() => {
    increment.mockClear();
    decrement.mockClear();
  });

  it("should call the increment function once", () => {
    act(() => {
      increment();
    });

    expect(increment).toHaveBeenCalledTimes(1);
    expect(increment).toHaveBeenCalledWith();
  });

  it("should call the decrement function once", () => {
    act(() => {
      decrement();
    });

    expect(decrement).toHaveBeenCalledTimes(1);
    expect(decrement).toHaveBeenCalledWith();
  });
});
