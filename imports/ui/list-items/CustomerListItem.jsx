import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { currencyFormat } from '../formatters/numberFormatters';

const CustomerListItem = ({ customer, history }) => {
  const creditUsageStyle = () => ({
    width: `${Math.round((customer.credit.used / customer.credit.total) * 100)}%`,
    height: '20px',
  });

  return (
    <button onClick={() => history.push(`/customer/${customer._id}/quotes`)} className="card">
      <div className="card-inner">
        <div className="container card-content">
          <div className="row">
            <div className="col-6">
              <span className="customer-name">{customer.name}</span>
              <br />
              <span className="customer-active-quotes">
                {customer.quotes.length} QUOTES
              </span>
            </div>
            <div className="col-6">
              <span className="customer-industry">Pharmaceuticals</span><br />
              <span className="customer-credit">
                {currencyFormat(customer.credit.used)}
                / {currencyFormat(customer.credit.total)} {customer.credit.currency} credit
              </span>
              <br />
              <div className="progress">
                <div className="progress-bar" role="progressbar"
                     style={creditUsageStyle()} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

CustomerListItem.propTypes = {
  customer: PropTypes.object,
};

export default CustomerListItem;
