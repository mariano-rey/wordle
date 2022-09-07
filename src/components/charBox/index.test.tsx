import "@testing-library/jest-dom";
import { render, screen } from "../../utils/test-setup";
import CharBox from "./index";

describe("Charbox component", () => {
  it("Should render empty CharBox", () => {
    render(<CharBox />);
    expect(screen.getByTestId("char_box_container")).toBeInTheDocument();
  });

  it("Should render success CharBox", () => {
    render(<CharBox status="success" value="H" />);
    const charBox = screen.getByTestId("char_box_container");
    expect(charBox).toBeInTheDocument();
    expect(charBox).toHaveClass("bg-green-300");
    expect(charBox).toHaveTextContent("H");
  });

  it("Should render wrong CharBox", () => {
    render(<CharBox status="wrong" value="H" />);
    const charBox = screen.getByTestId("char_box_container");
    expect(charBox).toBeInTheDocument();
    expect(charBox).toHaveClass("bg-gray-500");
    expect(charBox).toHaveTextContent("H");
  });

  it("Should render near CharBox", () => {
    render(<CharBox status="near" value="H" />);
    const charBox = screen.getByTestId("char_box_container");
    expect(charBox).toBeInTheDocument();
    expect(charBox).toHaveClass("bg-orange-400");
    expect(charBox).toHaveTextContent("H");
  });
});
