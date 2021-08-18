import { render, screen } from "@testing-library/react";
import RenderCount from './RenderCount'

it('should render the value given in the count prop', () => {
    render(<RenderCount count={10} />)
    expect(screen.getByText("10")).toBeInTheDocument()
})