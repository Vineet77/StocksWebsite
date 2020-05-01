/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/StockTable.css';

function StockTableRow({ stock }) {
	return (
		<tr>
			<td className="TextCell">{stock.symbol}</td>
			{stock.price ? (
				<>
					<td className="TextCell"> {stock.name} </td>
					<td className="PriceCell"> ${stock.price.toFixed(2)} </td>
					<td className="PriceCell" style={{ color: stock.changesPercentage >= 0 ? 'green' : 'red' }}>
						{stock.changesPercentage.toFixed(2)}%
					</td>
					<td className="PriceCell"> ${stock.dayLow.toFixed(2)} </td>
					<td className="PriceCell"> ${stock.dayHigh.toFixed(2)} </td>
				</>
			) : (
				<>
					<td> Loading ... </td>
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
	stock: PropTypes.object,
};

export default StockTableRow;
