import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pregled');
  this.route('dodavanje');
  this.route('kontakt');
  this.route('dodajucenika');
  this.route('dodajpredmet');
  this.route('dodajpredmetb', {path: '/dodajpredmetb/:class_id'});
  this.route('dodajucenikab', {path: '/dodajucenikab/:class_id'});
  this.route('pregleducenika', {path: '/pregleducenika/:class_id'});
});

export default Router;
