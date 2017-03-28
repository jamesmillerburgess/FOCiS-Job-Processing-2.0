import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Offices } from '../../api/offices/offices';
import { Customers } from '../../api/customers/customers';
import { Jobs } from '../../api/jobs/jobs';

import { APIGlobals } from '../../api/api-globals';
import { UIGlobals } from '../ui-globals';

import './job.html';
import './job.less';

Template.job.onCreated(function onCreated() {
  this.data.APIGlobals = APIGlobals;
});

Template.job.onRendered(() => $(() => $('[data-toggle="tooltip"]').tooltip()));

Template.job.helpers({
  job() {
    return Jobs.findOne(this.job._id);
  },
  shipper() {
    return {
      type: 'reference',
      field: {
        label: 'Shipper',
        collection: Customers,
        id: this.job.shipper,
        display: 'name',
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'shipper',
      },
    };
  },
  consignee() {
    return {
      type: 'reference',
      field: {
        label: 'Consignee',
        collection: Customers,
        id: this.job.consignee,
        display: 'name',
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'consignee',
      },
    };
  },
  incoterm() {
    return {
      type: 'select',
      field: {
        label: 'Incoterm',
        options: APIGlobals.incotermOptions,
        value: this.job.incoterm,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'incoterm',
      },
    };
  },
  exportOffice() {
    return {
      type: 'reference',
      field: {
        label: 'Export Office',
        collection: Offices,
        id: this.job.exportOffice,
        display: 'name',
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'exportOffice',
      },
    };
  },
  importOffice() {
    return {
      type: 'reference',
      field: {
        label: 'Import Office',
        collection: Offices,
        id: this.job.importOffice,
        display: 'name',
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'importOffice',
      },
    };
  },
  physicalReceiptOfGoods() {
    return {
      type: 'event',
      field: {
        label: 'Physical Receipt of Goods',
        event: _.find(this.job.events, doc => doc.type === 'Physical Receipt of Goods'),
      },
      update: {
        method: 'jobs.updateEvent',
        id: this.job._id,
      },
    };
  },
  internationalDeparture() {
    return {
      type: 'event',
      field: {
        label: 'International Departure',
        event: _.find(this.job.events, doc => doc.type === 'International Departure'),
      },
      update: {
        method: 'jobs.updateEvent',
        id: this.job._id,
      },
    };
  },
  internationalArrival() {
    return {
      type: 'event',
      field: {
        label: 'International Arrival',
        event: _.find(this.job.events, doc => doc.type === 'International Arrival'),
      },
      update: {
        method: 'jobs.updateEvent',
        id: this.job._id,
      },
    };
  },
  proofOfDelivery() {
    return {
      type: 'event',
      field: {
        label: 'Proof of Delivery',
        event: _.find(this.job.events, doc => doc.type === 'Proof of Delivery'),
      },
      update: {
        method: 'jobs.updateEvent',
        id: this.job._id,
      },
    };
  },
  updateField() {
    return {
      method: 'jobs.addUpdate',
      id: this.job._id,
    };
  },
  updatesReversedAndTrimmed() {
    return _.first(this.job.updates.slice().reverse(), UIGlobals.listLimit);
  },
  updatesReversed() {
    return this.job.updates.slice().reverse();
  },
  shipmentMarksAndNumbers() {
    return {
      type: 'textarea',
      field: {
        label: 'Shipment Marks and Numbers',
        value: this.job.cargo.shipmentMarksAndNumbers,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.shipmentMarksAndNumbers',
      },
    };
  },
  shipmentDescriptionOfGoods() {
    return {
      type: 'textarea',
      field: {
        label: 'Shipment Description of Goods',
        value: this.job.cargo.shipmentDescriptionOfGoods,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.shipmentDescriptionOfGoods',
      },
    };
  },
  totalGrossWeightOverride() {
    return {
      type: 'text',
      field: {
        label: 'Total Gross Weight Override',
        value: this.job.cargo.totalGrossWeightOverride,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.totalGrossWeightOverride',
      },
    };
  },
  totalVolumeOverride() {
    return {
      type: 'text',
      field: {
        label: 'Total Volume Override',
        value: this.job.cargo.totalVolumeOverride,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.totalVolumeOverride',
      },
    };
  },
  totalChargeableWeightOverride() {
    return {
      type: 'text',
      field: {
        label: 'Total Chargeable Weight Override',
        value: this.job.cargo.totalChargeableWeightOverride,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.totalChargeableWeightOverride',
      },
    };
  },
  volumetricRatio() {
    return {
      type: 'select',
      field: {
        label: 'Volumetric Ratio',
        options: APIGlobals.volumetricRatioOptions,
        value: this.job.cargo.volumetricRatio,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.volumetricRatio',
      },
    };
  },
  measurementSystem() {
    return {
      type: 'select',
      field: {
        label: 'Measurement System',
        options: APIGlobals.measurementSystemOptions,
        value: this.job.cargo.measurementSystem,
      },
      update: {
        method: 'jobs.updateField',
        id: this.job._id,
        path: 'cargo.measurementSystem',
      },
    };
  },
  unallocatedPackages() {
    const unallocatedPackages = [];
    for (let i = 0, j = this.job.cargo.packages.length; i < j; i += 1) {
      if (!this.job.cargo.packages[i].allocatedUnit) {
        unallocatedPackages.push(this.job.cargo.packages[i]);
      }
    }
    return unallocatedPackages;
  },
});

Template.job.events({
  'click .shipping-instructions-task': function handleShippingInstructionsTaskClick() {
    const alert = $('#mbl-alerts').append(
      `<div class="alert alert-warning alert-dismissible fade show" role="alert" data-dismiss="alert">
      <strong>Booking</strong> must be completed before starting <strong>Master Bill of Lading</strong>!
      </div>`).children().last();
    setTimeout(() => alert.alert('close'), 5000);
  },
  'click .seaquest-draft-task': function handleSeaquestDraftTaskClick() {
    const alert = $('#seaquest-alerts').append(
      `<div class="alert alert-warning alert-dismissible fade show" role="alert" data-dismiss="alert">
      <strong>Booking</strong> must be completed before starting <strong>House Bill of Lading</strong>!
      </div>`).children().last();
    setTimeout(() => alert.alert('close'), 5000);
  },
  'click #add-unit': function handleSeeAllUpdates() {
    Meteor.call('jobs.addUnit', this.job._id);
  },
  'click #add-package': function handleSeeAllUpdates() {
    Meteor.call('jobs.addPackage', this.job._id);
  },
});
