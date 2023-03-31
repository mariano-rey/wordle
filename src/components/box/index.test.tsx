import { render } from "@/utils/test-setup";
import Box, { CharStatus } from "./index";

describe("Box component", () => {
  it("Should render empty Box", () => {
    const { getByRole } = render(<Box />);
    const box = getByRole("box");
    expect(box).toBeInTheDocument();
    expect(box).toHaveTextContent("");
  });

  it("Should render success Box", () => {
    const { getByRole } = render(<Box status={CharStatus.SUCCESS} value="S" />);
    const box = getByRole("box");
    expect(box).toBeInTheDocument();
    expect(box).toHaveClass("bg-green-300");
    expect(box).toHaveTextContent("S");
  });

  it("Should render wrong Box", () => {
    const { getByRole } = render(<Box status={CharStatus.WRONG} value="W" />);
    const box = getByRole("box");
    expect(box).toBeInTheDocument();
    expect(box).toHaveClass("bg-gray-400");
    expect(box).toHaveTextContent("W");
  });

  it("Should render near Box", () => {
    const { getByRole } = render(<Box status={CharStatus.NEAR} value="N" />);
    const box = getByRole("box");
    expect(box).toBeInTheDocument();
    expect(box).toHaveClass("bg-orange-400");
    expect(box).toHaveTextContent("N");
  });
});
