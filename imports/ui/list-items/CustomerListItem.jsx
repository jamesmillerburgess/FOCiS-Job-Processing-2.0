import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { currencyFormat } from '../formatters/numberFormatters';

const CustomerListItem = ({ customer, header }) => {
  const newQuote = (customerId) => {
    // TODO: Call new quote from scratch method
  };

  return (
    <Link to={`/customers/${customer._id}/overview`} className="list-item">
      <div className={`panel ${header ? 'header-panel' : ''}`}>
        <div className="icon-column">
          <Link to={`/customers/${customer._id}/quotes`}>
            <span className="fa fa-fw fa-file" />
          </Link>
          <span className="fa fa-fw fa-cubes" />
          <span className="fa fa-fw fa-dollar" />
        </div>
        <div className="container panel-body">
          <div className="row no-gutters">
            <div className="col-6">
              <span className="list-item-header">{customer.name.toUpperCase()} <span className="fa fa-fw fa-heart-o favorite-icon" /></span>
              <br />
              <span className="customer-active-quotes">
                {customer.quotes.length} QUOTES
              </span>
              <br />
              <span className="label">{customer.shipments.length} SHIPMENTS</span>
            </div>
            <div className="col-3">
              <span className="list-item-header">LOCAL ACCOUNT</span><br />
              Heavy Machinery<br />
              2.1 TEU/MO
            </div>
            <div className="col-3">
              <span className="label">13 k NR/MO</span><br />
              <span className="label">2 k UNBILLED</span><br />
              <span className="label">58 % CREDIT USAGE</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

CustomerListItem.propTypes = {
  customer: PropTypes.object.isRequired,
  header: PropTypes.bool,
};

CustomerListItem.defaultProps = {
  header: false,
};

export default CustomerListItem;
