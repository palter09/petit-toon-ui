import './Tabs.css'

import React from 'react';

const Tab = ({ isActive, title, content, onClick }) => (
    <button 
        className="tab-button"
        onClick={onClick}
        style={{
            flex: 1,
            borderBottom: isActive ? 'none' : '2px solid #DA5E9D',
            padding: '8px 16px',
            cursor: 'pointer',
        }}
    >
        {title}
    </button>
);

export default Tab;