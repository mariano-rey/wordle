import CONSTANTS from "@/constants";
import { render } from "@/utils/test-setup";
import { CharStatus, CharStatusColor } from "../box";
import Row, { CharProps } from "./index";

describe("Row component", () => {
  it(`Should render Row with ${CONSTANTS.ATTEMPS_LENGTH} empty chars`, () => {
    const { getByRole, getAllByRole } = render(<Row />);

    expect(getByRole("row")).toBeInTheDocument();
    expect(getAllByRole("box").length).toEqual(CONSTANTS.ATTEMPS_LENGTH);
  });

  it("Should render Row with 1 letter without validation", () => {
    const chars: CharProps[] = [{ value: "W" }]
    const { getByRole, getAllByRole } = render(<Row rows={chars} />);

    expect(getByRole("row")).toBeInTheDocument();

    chars.forEach(({ status = CharStatus.DEFAULT, value }, index) => {
      expect(getAllByRole("box")[index]).toHaveTextContent(value);
      expect(getAllByRole("box")[index]).toHaveClass(CharStatusColor[status]);
    })
  })

  it("Should render Row with first letter success A, second letter wrong G and third letter I near", () => {
    const chars: CharProps[] = [
      { value: "A", status: CharStatus.SUCCESS },
      { value: "G", status: CharStatus.WRONG },
      { value: "I", status: CharStatus.NEAR }
    ]
    const { getByRole, getAllByRole } = render(<Row rows={chars} />);

    expect(getByRole("row")).toBeInTheDocument();

    chars.forEach(({ status = CharStatus.DEFAULT, value }, index) => {
      expect(getAllByRole("box")[index]).toHaveTextContent(value);
      expect(getAllByRole("box")[index]).toHaveClass(CharStatusColor[status]);
    })
  })
});
