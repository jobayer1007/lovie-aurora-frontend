import React from "react";

const tabs = [
  { text: "Description" },
  { text: "Reviews" },
  // { text: "Shipping & Returns" },
];

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="mb-10">
      {tabs.map((tab) => (
        <button
          onClick={() => setSelected(tab.text)}
          key={tab.text}
          className={`${selected === tab.text ? "text-coolOrange" : "text-coolBlack"
            } text-xl mr-10 transition duration-150 font-semibold`}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
