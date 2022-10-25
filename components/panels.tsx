import React, { useRef } from "react";

const Panel = (props: any) => {
  const [height, setHeight] = React.useState(0);

  const myRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    window.setTimeout(() => {
      const height = myRef.current?.scrollHeight || 0;
      setHeight(height);
    }, 333);
  });

  const { label, content, activeTab, index, activateTab } = props;
  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button
        className="panel__label border-t-2 border-gray-400 text-gray-400 py-4"
        role="tab"
        onClick={activateTab}
      >
        {label}
      </button>
      <div
        ref={myRef}
        className="panel__inner text-gray-500 text-base text-justify"
        style={innerStyle}
        aria-hidden={!isActive}
      >
        <p className="panel__content mb-4">{content}</p>
      </div>
    </div>
  );
};

const Accordion = (props: any) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const activateTab = (index: any) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };
  const { panels } = props;

  return (
    <div className="accordion" role="tablist">
      {panels.map((panel: any, index: React.Key) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
