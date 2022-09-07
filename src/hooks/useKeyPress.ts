import { useEffect, useState } from "react";

export default function useKeyPress() {
  const [keyPressed, setKeyPressed] = useState("");

  function downHandler({ key }: KeyboardEvent): void {
    setKeyPressed(key.toUpperCase());
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  return keyPressed;
}
