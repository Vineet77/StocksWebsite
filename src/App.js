import React from 'react';
import './App.css';
import StockTable from './Components/StockTable';

function App() {
	return (
		<div className="App">
			<header>
				<h1>Stocks</h1>
			</header>

			<StockTable />
		</div>
	);
}

export default App;
