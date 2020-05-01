/* eslint-env browser */
import React, { useEffect, useMemo, useState } from 'react';
import StockTableRow from './StockTableRow';
import upArrow from '../assets/up.png';
import downArrow from '../assets/down.png';
import upDownArrow from '../assets/up_down.png';

/* eslint-disable */
const initialStocks = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO', 'KO', 'DOW', 'XOM',
				'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE',
				'PFE', 'PG', 'LMT', 'TRV', 'UNH', 'VZ', 'V', 'WMT', 'WBA', 'DIS'];
/* eslint-enable */

function StockTable() {
	const [stocks, setStocks] = useState(initialStocks.map((s) => ({ sym: s })));
	const [sortConfig, setSortConfig] = useState({ key: 'symbol', order: 'desc' });

	function doSort(key, items) {
		const order = sortConfig.key === key && sortConfig.order === 'asc' ? 'desc' : 'asc';
		console.log(`sorting ${key} with order ${order}`);
		setSortConfig({ key, order });
		items.sort((a, b) => {
			if (a[key] < b[key]) {
				return order === 'asc' ? -1 : 1;
			}
			if (a[key] > b[key]) {
				return order === 'asc' ? 1 : -1;
			}
			return 0;
		});
		setStocks(items);
	}

	async function fetchData() {
		const response = await fetch(
			`https://financialmodelingprep.com/api/v3/quote/${stocks.map((s) => s.sym).join()}`,
		);
		const data = await response.json();
		doSort(sortConfig.key, data);
	}

	useEffect(() => {
		fetchData();
	}, []);

	function getHeader(key) {
		if (sortConfig.key === key) {
			return key + (sortConfig.order === 'asc' ? '⬆' : '⬇');
		}
		return key;
	}

	function getHeaderBtn(key) {
		return (
			<button
				onClick={() => {
					doSort(key, stocks);
				}}
			>
				<img
					src={sortConfig.key === key ? (sortConfig.order === 'asc' ? upArrow : downArrow) : upDownArrow}
					alt="Sort"
				/>
			</button>
		);
	}

	return (
		<div className="StockTable">
			<table>
				<thead>
					<tr>
						<th>Symbol {getHeaderBtn('symbol')}</th>
						<th> Company Name {getHeaderBtn('name')}</th>
						<th> Price {getHeaderBtn('price')}</th>
						<th> % Change {getHeaderBtn('changesPercentage')}</th>
						<th> Day Low {getHeaderBtn('dayLow')}</th>
						<th> Day High {getHeaderBtn('dayHigh')}</th>
					</tr>
				</thead>
				<tbody>
					{stocks.map((stock) => (
						<StockTableRow stock={stock} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StockTable;
