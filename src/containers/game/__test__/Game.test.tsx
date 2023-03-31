import { CharStatusColor, CharStatus } from "@/components/box";
import { render, userEvent } from "@/utils/test-setup";
import Game from "../Game";

describe("Game component", () => {
  it("Should render char value on user press key", async () => {
    const user = userEvent.setup();
    const { getAllByRole } = render(<Game />);

    const emptyBox = getAllByRole("box")[0];
    expect(emptyBox).toHaveTextContent("");

    await user.keyboard("L");
    expect(emptyBox).toHaveTextContent("L");
    expect(emptyBox).toHaveClass(CharStatusColor[CharStatus.DEFAULT]);
  });
});
