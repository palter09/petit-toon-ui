import React, { useState, useEffect } from 'react';
import './Tabs.css'

const TabWrapper = ({ children, initialTab= 0}) => {
  const [activeTab, setActiveTab] = useState(initialTab || 0);

  useEffect(() => {
    if (initialTab !== undefined) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className='tab-container' style={{ display: 'flex' }}>
        {React.Children.map(children, (child, index) => (
          React.cloneElement(child, {
            isActive: activeTab === index,
            onClick: () => handleTabClick(index),
          })
        ))}
      </div>
      <div>
        {React.Children.toArray(children)[activeTab].props.content}
      </div>
    </div>
  );
};

export default TabWrapper;
