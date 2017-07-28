/* eslint-env mocha */
/* eslint-disable func-names, prefer-arrow-callback */

import { chai } from 'meteor/practicalmeteor:chai';
import { Meteor } from 'meteor/meteor';

import { Shipments } from './shipmentsCollection';
import { Quotes } from '../quotes/quotesCollection';
import { Customers } from '../customers/customersCollection';

import './shipmentMethods';

chai.should();

if (Meteor.isServer) {
  describe('Shipment Methods', () => {
    beforeEach(() => {
      Shipments.remove({});
      Quotes.remove({});
      Customers.remove({});
      Quotes.insert({
        _id: 'a',
        customerId: 'b',
        cargo: 'c',
        movement: 'd',
        otherServices: 'e',
        charges: 'f',
      });
      Customers.insert({ _id: 'b', quotes: 'a' });
    });
    describe('shipment.new', () => {
      it('inserts a shipment into the collection', () => {
        Shipments.find({}).count().should.equal(0);
        Meteor.call('shipment.new', 'a');

        Shipments.find({}).count().should.equal(1);
      });
      it('returns the id of the new shipment', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Shipments.findOne()._id.should.equal(shipmentId);
      });
      it('inserts a shipment with the given quoteId', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Shipments.findOne(shipmentId).quoteId.should.equal('a');
      });
      it('updates the given customer with the new shipment id', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Customers.findOne('b').shipments[0].should.equal(shipmentId);
      });
      it('sets the created on date', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Shipments.findOne(shipmentId).createdOn.should.be.instanceof(Date);
      });
      it('sets the status to \'Draft\'', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Shipments.findOne(shipmentId).status.should.equal('Draft');
      });
      it('sets active to true', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Shipments.findOne(shipmentId).active.should.equal(true);
      });
      it('copies the quote data into the shipment', () => {
        const shipmentId = Meteor.call('shipment.new', 'a');
        Shipments.findOne(shipmentId).cargo.should.equal('c');
        Shipments.findOne(shipmentId).movement.should.equal('d');
        Shipments.findOne(shipmentId).otherServices.should.equal('e');
        Shipments.findOne(shipmentId).charges.should.equal('f');
      });
    });
    describe('shipment.save', () => {
      it('saves changes to the shipment', () => {
        const shipmentId = Shipments.insert({
          cargo: {},
          movement: {},
        });
        Meteor.call(
          'shipment.save',
          {
            _id: shipmentId,
            cargo: { a: 'a' },
            movement: { b: 'b' },
          },
        );
        const shipment = Shipments.findOne(shipmentId);

        shipment.cargo.a.should.equal('a');
        shipment.movement.b.should.equal('b');
      });
      it('ignores changes to the status', () => {
        const shipmentId = Shipments.insert({
          status: 'Draft',
        });
        Meteor.call(
          'shipment.save',
          {
            _id: shipmentId,
            status: 'Different Status',
            cargo: {},
          },
        );
        const shipment = Shipments.findOne(shipmentId);

        shipment.status.should.equal('Draft');
      });
    });
    describe('shipment.archive', () => {
      it('sets active to false', () => {
        const shipmentId = Shipments.insert({ active: true });
        Meteor.call('shipment.archive', shipmentId);
        Shipments.findOne(shipmentId).active.should.equal(false);
      });
      it('sets status to \'Archived\'', () => {
        const shipmentId = Shipments.insert({ status: 'Draft' });
        Meteor.call('shipment.archive', shipmentId);
        Shipments.findOne(shipmentId).status.should.equal('Archived');
      });
    });
  });
}