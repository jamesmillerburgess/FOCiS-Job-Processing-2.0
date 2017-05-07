/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import deepFreeze from 'deep-freeze';

import { movement } from './movementReducers';
import * as ACTION_TYPES from '../actions/actionTypes';

if (Meteor.isClient) {
  describe('Movement Reducer', () => {
    chai.should();

    it('sets the pickup location type', () => {
      const stateBefore = { pickup: { locationType: 'port' } };
      const action = { type: ACTION_TYPES.SET_PICKUP_LOCATION_TYPE, locationType: 'address' };
      const stateAfter = { pickup: { locationType: 'address' } };
      deepFreeze(stateBefore);

      movement(stateBefore, action).should.eql(stateAfter);
    });

    it('sets the pickup country', () => {
      const stateBefore = { pickup: { country: 'India' } };
      const action = { type: ACTION_TYPES.SET_PICKUP_COUNTRY, country: 'China' };
      deepFreeze(stateBefore);

      movement(stateBefore, action).pickup.country.should.equal('China');
    });

    it('clears the pickup location if the pickup country changes', () => {
      const stateBefore = { pickup: { country: 'India', location: 'NSA' } };
      const action = { type: ACTION_TYPES.SET_PICKUP_COUNTRY, country: 'China' };
      deepFreeze(stateBefore);

      movement(stateBefore, action).pickup.location.should.equal('');
    });

    it('sets the pickup location', () => {
      const stateBefore = { pickup: { location: '000000' } };
      const action = { type: ACTION_TYPES.SET_PICKUP_LOCATION, location: '111111' };
      deepFreeze(stateBefore);

      movement(stateBefore, action).pickup.location.should.eql('111111');
    });

    it('sets the delivery location type', () => {
      const stateBefore = { delivery: { locationType: 'port' } };
      const action = { type: ACTION_TYPES.SET_DELIVERY_LOCATION_TYPE, locationType: 'address' };
      const stateAfter = { delivery: { locationType: 'address' } };
      deepFreeze(stateBefore);

      movement(stateBefore, action).should.eql(stateAfter);
    });

    it('sets the delivery country', () => {
      const stateBefore = { delivery: { country: 'India' } };
      const action = { type: ACTION_TYPES.SET_DELIVERY_COUNTRY, country: 'China' };
      deepFreeze(stateBefore);

      movement(stateBefore, action).delivery.country.should.equal('China');
    });

    it('clears the delivery location if the delivery country changes', () => {
      const stateBefore = { delivery: { country: 'India', location: 'NSA' } };
      const action = { type: ACTION_TYPES.SET_DELIVERY_COUNTRY, country: 'China' };
      deepFreeze(stateBefore);

      movement(stateBefore, action).delivery.location.should.equal('');
    });

    it('sets the delivery location', () => {
      const stateBefore = { delivery: { location: '000000' } };
      const action = { type: ACTION_TYPES.SET_DELIVERY_LOCATION, location: '111111' };
      deepFreeze(stateBefore);

      movement(stateBefore, action).delivery.location.should.eql('111111');
    });
  });
}
