import CONSTANTS from "@/constants";
import Box from "../box";
import type { CharStatus } from "../box";

export type CharProps = { value: string; status?: CharStatus };
export type RowProps = {
  rows: CharProps[];
};

export default function Row({ rows: chars }: Partial<RowProps>) {
  return (
    <div className="flex gap-2 p-2" role="row">
      {Array.from({ length: CONSTANTS.WORD_LENGTH }, (_, index) => {
        const rowData = chars?.[index] || {};
        return <Box key={index} {...rowData} />;
      })}
    </div>
  );
}
