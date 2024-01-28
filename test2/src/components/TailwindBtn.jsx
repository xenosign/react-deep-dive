import classNames from "classnames";

export default function TailwindBtn({ color }) {
  const btnColors = {
    red: "bg-red-color",
    blue: "bg-blue-color",
    green: "bg-green-color",
  };

  return (
    <button
      className={classNames(
        `px-10 py-3 rounded-full font-bold text-center text-white tracking-widest cursor-pointer outline-none hover:scale-110`,
        color ? btnColors[color] : btnColors["red"]
      )}
    >
      TailwindBtn
    </button>
  );
}
