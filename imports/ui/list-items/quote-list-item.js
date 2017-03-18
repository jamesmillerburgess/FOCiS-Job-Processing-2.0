import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './quote-list-item.html';
import './quote-list-item.less';

Template.quoteListItem.onCreated(function onCreated() {
  //console.log(this.data);
});

Template.quoteListItem.helpers({
  modeIconClass() {
    if (this.mode === 'Air') {
      return 'fa-plane';
    }
    if (this.mode === 'Ocean') {
      return 'fa-ship';
    }
    if (this.mode === 'Road') {
      return 'fa-truck';
    }
  },
});

Template.quoteListItem.events({
  'click .card': function handleClickCard() {
    FlowRouter.go(`/quote/${this._id}`);
  },
});