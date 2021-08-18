type RenderCountProp = {
    count: number
}

export default function RenderCount( {count}: RenderCountProp) {
    return <p>{count}</p>
}