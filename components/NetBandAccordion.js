"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const NetBandAccordion = ({
  items = [
    {
      id: 1,
      title: "What broadband packages are available?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "How can I find the best broadband deals in my area?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "Need help to choose the best broadband deal?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "How to experience the magic of internet?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit .",
      animationDelay: ".9s",
    },
  ],
  eventKey = "home1",
  activeKey,
}) => {
  const defaultActiveKey = activeKey ? activeKey : eventKey + items[0].id;
  const [active, setActive] = useState(defaultActiveKey);
  return (
    <Accordion defaultActiveKey={defaultActiveKey}>
      {items.map((item) => (
        <div
          className="accordion-item wow fadeInUp"
          data-wow-delay={item.animationDelay}
          key={item.id}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              eventKey={eventKey + item.id}
              className={`accordion-button ${
                active == eventKey + item.id ? "" : "collapsed"
              }`}
              onClick={() => setActive(eventKey + item.id)}
            >
              {item.title}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse
            className="accordion-collapse"
            eventKey={eventKey + item.id}
          >
            <div className="accordion-body">{item.content}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default NetBandAccordion;
