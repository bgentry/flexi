import Ember from 'ember';
import layout from './template';

const component = Ember.Component.extend({
  layout
});

component.reopenClass({
  positionalParams: ['task']
});

export default component;
