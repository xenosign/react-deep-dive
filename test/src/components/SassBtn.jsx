import "./SassBtn.scss";
import classNames from "classnames";

export default function SassBtn({ variant }) {
  return (
    <button className={classNames("SassBtn", variant && variant)}>
      SASS BUTTON
    </button>
  );
}
