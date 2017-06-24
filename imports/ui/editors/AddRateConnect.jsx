import { connect } from 'react-redux';

import AddRate from './AddRate.jsx';
import * as actions from '../../state/actions/rateActionCreators';

import { Rates } from '../../api/rates/rateCollection';

const mapStateToProps = ({ rate }) => ({ rate });

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.editMode) {
    const rate = {
      name: Rates.findOne(ownProps.match.params.rateId).name,
    };
    dispatch(actions.loadRate(rate));
  } else {
    dispatch(actions.loadRate({ type: 'sell' }));
  }
  return {
    dispatchers: {
      loadRate: rate => dispatch(actions.loadRate(rate)),
      onChangeRateType: type => dispatch(actions.setRateType(type)),
      onChangeRateChargeCode: chargeCode =>
        dispatch(actions.setRateChargeCode(chargeCode)),
      onChangeRateLevel: level => dispatch(actions.setRateLevel(level)),
      onChangeRateRoute: route => dispatch(actions.setRateRoute(route)),
      onChangeRateCarrier: carrier => dispatch(actions.setRateCarrier(carrier)),
      onChangeRateBasis: basis => dispatch(actions.setRateBasis(basis)),
      onChangeRateUnitPrice: unitPrice =>
        dispatch(actions.setRateUnitPrice(unitPrice)),
      onChangeRateCurrency: currency =>
        dispatch(actions.setRateCurrency(currency)),
    },
  };
};

const AddRateConnect = connect(mapStateToProps, mapDispatchToProps)(AddRate);

export default AddRateConnect;
