import React from "react";
import { Row as RowProps } from "../../App";
import CONSTANTS from "../../constants";
import CharBox from "../charBox";

export default function Row({ chars }: Partial<RowProps>) {
  function renderContent() {
    const boxes: React.ReactNode[] = [];
    for (let x = 0; x < CONSTANTS.WORD_LENGTH; x++) {
      const rowData = chars?.[x] || {};
      boxes.push(<CharBox key={x} {...rowData} />);
    }
    return boxes;
  }

  return <div className="flex gap-2 p-2">{renderContent()}</div>;
}
