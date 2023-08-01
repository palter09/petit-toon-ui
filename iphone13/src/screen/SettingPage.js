import React from 'react';

const SettingPage = ({renderPage}) => {
	return (
		<div>
			sample
			<button onClick={() => {renderPage('ToonPage')}}>ToonPage</button>
		</div>
	);
};

export default SettingPage;