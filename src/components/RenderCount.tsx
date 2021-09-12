type RenderCountProp = {
  count: number;
};

export default function RenderCount(state: RenderCountProp) {
  return <p>{state.count}</p>;
}
