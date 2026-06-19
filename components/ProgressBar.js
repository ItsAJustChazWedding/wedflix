"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Counter from "./Counter.js";

const ProgressBar = ({
  value,
  color = "#D6111E",
  extraCls,
  emptyFill,
  withoutCounter = true,
}) => {
  return (
    <div
      className={`circle-bar ${extraCls ? extraCls : "one"}`}
      style={{ width: 100, height: 100 }}
    >
      <CircularProgressbar
        width={100}
        value={value}
        strokeWidth={6}
        styles={buildStyles({
          pathColor: color,
          trailColor: emptyFill ? emptyFill : "#F6F3EE",
        })}
      />{" "}
      <div className="position-absolute top-50 start-50 translate-middle">
        {withoutCounter ? (
          <span className="position-absolute top-50 start-50 translate-middle">
            {value}%
          </span>
        ) : (
          <span className="position-absolute top-50 start-50 translate-middle">
            <Counter end={value} />%
          </span>
        )}
      </div>
    </div>
  );
};
export default ProgressBar;
