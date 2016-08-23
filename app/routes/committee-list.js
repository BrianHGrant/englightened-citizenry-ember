import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=' +key+ '&subcommittee=false&per_page=all';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
