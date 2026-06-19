"use client";

import useClickOutside from "@/utility/useClickOutside";
import { useState } from "react";

const NiceSelect = ({ items, customClass = "country-select" }) => {
  const defaultItems = items
    ? items
    : [
        { id: 1, value: "USA" },
        { id: 2, value: "AUS" },
        { id: 3, value: "UK" },
        { id: 4, value: "NED" },
      ];
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(defaultItems[0].value);

  const domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <div
      className={`nice-select ${customClass} ${toggle ? "open" : ""}`}
      onClick={() => setToggle(!toggle)}
      ref={domNode}
      tabindex="0"
    >
      <span className="current">{current}</span>
      <ul className="list">
        {defaultItems.map((item) => (
          <li
            data-value={item.value}
            className={`option ${
              item.value == current ? "selected focus" : ""
            }`}
            key={item.id}
            onClick={() => setCurrent(item.value)}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NiceSelect;
