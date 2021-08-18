import { render, screen, fireEvent } from "@testing-library/react";
import Button from './Button'

it('should apply the function when clicked', () => {
    let watcher = 0;
    function add(){
        watcher++
    }
    render(<Button text="add" onClick={add} />)
    const addButton = screen.getByRole("button", { name: "add" });
    fireEvent.click(addButton);
    expect(watcher).toBe(1)
})