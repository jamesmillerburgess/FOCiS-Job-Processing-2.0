import { connect } from 'react-redux';

import * as actions from '../../state/actions/quoteActions';
import EditQuoteHeader from './EditQuoteHeader.jsx';

const mapStateToProps = state => ({ quote: state.quote });
const mapDispatchToProps = dispatch => ({
  dispatchers: {
    onLoad: quote => dispatch(actions.loadQuote(quote)),

    onChangeCargoType: cargoType => dispatch(actions.setCargoType(cargoType)),
    onChangeRatedQuote: () => dispatch(actions.toggleRatedQuote()),
    onAddPackageLine: () => dispatch(actions.addPackageLine()),
    onRemovePackageLine: index => dispatch(actions.removePackageLine(index)),
    onChangePackageType: (index, packageType) =>
      dispatch(actions.setPackageLinePackageType(index, packageType)),
    onChangeNumPackages: (index, numPackages) =>
      dispatch(actions.setPackageLineNumPackages(index, numPackages)),

    onChangeLength: (index, length) =>
      dispatch(actions.setPackageLineLength(index, length)),
    onChangeWidth: (index, width) => dispatch(actions.setPackageLineWidth(
      index,
      width,
    )),
    onChangeHeight: (index, height) =>
      dispatch(actions.setPackageLineHeight(index, height)),
    onChangePackageLineUnitVolumeUOM: (index, unitVolumeUOM) =>
      dispatch(actions.setPackageLineUnitVolumeUOM(index, unitVolumeUOM)),
    onChangeWeight: (index, weight) =>
      dispatch(actions.setPackageLineWeight(index, weight)),
    onChangePackageLineWeightUOM: (index, weightUOM) =>
      dispatch(actions.setPackageLineWeightUOM(index, weightUOM)),

    onAddContainerLine: () => dispatch(actions.addContainerLine()),
    onRemoveContainerLine: index => dispatch(actions.removeContainerLine(
      index)),
    onChangeContainerLineNumContainers: (index, numContainers) =>
      dispatch(actions.setContainerLineNumContainers(
        index,
        numContainers,
      )),
    onChangeContainerLineContainerType: (index, containerType) =>
      dispatch(actions.setContainerLineContainerType(
        index,
        containerType,
      )),
    onClickContainerLineTemperatureControlled: index =>
      dispatch(actions.toggleContainerLineTemperatureControlled(index)),

    onClickHazardous: () => dispatch(actions.toggleHazardous()),
    onClickTemperatureControlled: () => dispatch(actions.toggleTemperatureControlled()),

    // MOVEMENT
    onChangeMovementMode: mode =>
      dispatch(actions.setMovementMode(mode)),
    onChangeMovementCommercialParty: commercialParty =>
      dispatch(actions.setMovementCommercialParty(commercialParty)),
    onChangeMovementTermsOfSale: termsOfSale =>
      dispatch(actions.setMovementTermsOfSale(termsOfSale)),
    onChangeReceipt: receipt => dispatch(actions.setReceipt(receipt)),
    onChangeDeparture: departure => dispatch(actions.setDeparture(departure)),
    onChangeArrival: arrival => dispatch(actions.setArrival(arrival)),
    onChangeDelivery: delivery => dispatch(actions.setDelivery(delivery)),


    onChangePickupLocationType: locationType =>
      dispatch(actions.setPickupLocationType(locationType)),
    onChangePickupLocationName: locationName =>
      dispatch(actions.setPickupLocationName(locationName)),
    onChangePickupCountry: country => dispatch(actions.setPickupCountry(
      country)),
    onChangePickupLocation: location => dispatch(actions.setPickupLocation(
      location)),
    onChangeDeliveryLocationType: locationType =>
      dispatch(actions.setDeliveryLocationType(locationType)),
    onChangeDeliveryLocationName: locationName =>
      dispatch(actions.setDeliveryLocationName(locationName)),
    onChangeDeliveryCountry: country => dispatch(actions.setDeliveryCountry(
      country)),
    onChangeDeliveryLocation: location => dispatch(actions.setDeliveryLocation(
      location)),

    // OTHER SERVICES
    onClickInsurance: () => dispatch(actions.toggleInsurance()),
    onClickCustomsClearance: () =>
      dispatch(actions.toggleCustomsClearance()),

    // CHARGES
    onAddChargeLine: chargeLine => dispatch(actions.addChargeLine(chargeLine)),
  },
});

const EditQuoteHeaderConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  EditQuoteHeader);

export default EditQuoteHeaderConnect;
