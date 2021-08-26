import { render, screen } from "@testing-library/react";
import RenderCount from './RenderCount'

describe('Count display component', () => {
    it.each`
        count | expectedValue
        ${10} | ${'10'}
        ${20} | ${'20'}
        ${30} | ${'30'}
        ${40} | ${'40'}
    
    `('should render the value $expectedValue given in the count prop "$count"', ({ count, expectedValue }) => {
        const { container: element } = render(<RenderCount count={count} />)
    
        expect(screen.getByText(expectedValue)).toBeInTheDocument()
        expect(element).toMatchSnapshot();
    })
});
