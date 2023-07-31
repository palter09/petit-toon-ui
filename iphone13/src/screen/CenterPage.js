import React from 'react';
import { useState } from 'react'
import ToonPage from './ToonPage';
import SettingPage from './SettingPage';


const CenterPage = () => {
	const [index, setPage] = useState(0);
	const pages = [ ToonPage, SettingPage ]
	
	return (
			<div>
				{React.createElement(pages[index])}
			</div>
	);
};

export default CenterPage;