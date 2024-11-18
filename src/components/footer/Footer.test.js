import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test('contains the right top-level CSS class', () =>{
  render(<Footer/>)

  const footerElement = screen.getByText(/chartcaster/i);

  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toHaveClass('app-footer');
});