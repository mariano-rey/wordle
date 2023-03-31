export enum CharStatus {
  WRONG = "wrong",
  SUCCESS = "success",
  NEAR = "near",
  DEFAULT = "default"
}

type Props = {
  value?: string;
  status?: CharStatus;
};

export const CharStatusColor = {
  [CharStatus.SUCCESS]: "bg-green-300",
  [CharStatus.NEAR]: "bg-orange-400",
  [CharStatus.WRONG]: "bg-gray-400",
  [CharStatus.DEFAULT]: "bg-gray-200"
}

export default function Box(props: Props) {
  const { value, status = CharStatus.DEFAULT } = props
  const bgColor = CharStatusColor[status]

  return (
    <div
      className={`${bgColor} w-12 h-12 flex justify-center items-center rounded font-bold`}
      role="box"
    >
      {value?.toUpperCase()}
    </div>
  );
}
