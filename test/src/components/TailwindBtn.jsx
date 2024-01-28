import classNames from "classnames";

export default function TailwindBtn({ color }) {
  const btnColors = {
    blue: {
      bgColor: "bg-blue-color",
    },
    green: {
      bgColor: "bg-green-color",
    },
  };

  return (
    <button
      className={classNames(
        `px-10 py-3 rounded-full font-bold text-center text-white tracking-widest cursor-pointer outline-none hover:scale-110`,
        Boolean(color) === false
          ? btnColors["green"].bgColor
          : btnColors[color].bgColor
      )}
    >
      TailwindBtn
    </button>
  );
}
