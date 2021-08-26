import { render, screen, fireEvent } from "@testing-library/react";
import Button from './Button'

describe('Button component', () => {
    it('should apply the function when clicked', async () => {
        const onClickSpy = jest.fn();
        render(<Button text="add" onClick={onClickSpy} />);
    
        const addButton = await screen.findByRole("button", { name: "add" });
        fireEvent.click(addButton);
    
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenNthCalledWith(1);
    });
});