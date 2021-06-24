import React from "react";
import PropTypes from "prop-types";
import style from "./Transactions.module.css";

const Transactions = ({ items }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr className={style.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((e) => (
          <tr key={e.id}>
            <td>{e.type}</td>
            <td>{e.amount}</td>
            <td>{e.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default Transactions;
