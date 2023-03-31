import Row from "@/components/row";
import CONSTANTS from "@/constants";
import { useGame } from "./useGame";

export default function Game() {
  const { attemps } = useGame()

  return (
    <>
      {Array.from({ length: CONSTANTS.ATTEMPS_LENGTH }, (_, index) => {
        const chars = attemps[index] ?? [];
        return <Row key={index} rows={chars} />;
      })}
    </>
  );
}
