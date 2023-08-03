import React from 'react';

const SupportPage = ({renderPage}) => {
	return (
		<div>
			sample
			<button onClick={() => {renderPage('ToonPage')}}>ToonPage</button>
		</div>
	);
};

export default SupportPage;