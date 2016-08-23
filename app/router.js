import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee-list');
  this.route('committee', {path: '/committee/:committee_id'});
  this.route('bill-list');
  this.route('upcoming-bills');
});

export default Router;
