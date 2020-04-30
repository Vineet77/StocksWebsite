import React from 'react';
import StockTableRow from './StockTableRow';

/* eslint-disable */
const stocks = ['MMM', 'AXP', 'AAPL', 'BA', 'CAT', 'CVX', 'CSCO', 'KO', 'DOW', 'XOM',
				'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE',
				'PFE', 'PG', 'LMT', 'TRV', 'UNH', 'VZ', 'V', 'WMT', 'WBA', 'DIS'];
/* eslint-enable */

function StockTable() {
	return (
		<div className="StockTable">
			<table>
				<thead>
					<tr>
						<th> Symbol </th>
						<th> Company Name </th>
						<th> Price </th>
						<th> Day Low </th>
						<th> Day High </th>
					</tr>
				</thead>
				<tbody>
					{stocks.map((stock) => (
						<StockTableRow sym={stock} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default StockTable;
