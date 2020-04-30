/* eslint-env browser */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/StockTable.css';

function StockTableRow({ sym }) {
	const [stockInfo, setStockInfo] = useState({});

	async function fetchData() {
		const response = await fetch(`https://financialmodelingprep.com/api/v3/quote/${sym}`);
		const data = await response.json();

		setStockInfo(data[0]);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<tr>
			<td>{sym}</td>
			{stockInfo.price ? (
				<>
					<td> {stockInfo.name} </td>
					<td> {stockInfo.price} </td>
					<td> {stockInfo.dayLow} </td>
					<td> {stockInfo.dayHigh} </td>
				</>
			) : (
				<>
					<td> Loading ... </td>
					<td> Loading ... </td>
					<td> Loading ... </td>
					<td> Loading ... </td>
				</>
			)}
		</tr>
	);
}

StockTableRow.propTypes = {
	sym: PropTypes.string,
};

export default StockTableRow;
