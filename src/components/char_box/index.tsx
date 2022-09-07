type Props = {
  value?: string;
  status?: "wrong" | "success" | "near";
};

export default function CharBox({ status, value }: Props) {
  const bgColor =
    status === "near"
      ? "bg-orange-400"
      : status === "success"
      ? "bg-green-300"
      : status === "wrong"
      ? "bg-gray-500"
      : "bg-gray-200";

  return (
    <div
      className={`${bgColor} w-12 h-12 flex justify-center items-center rounded font-sans font-bold`}
    >
      {value}
    </div>
  );
}
