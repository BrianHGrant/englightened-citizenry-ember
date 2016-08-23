import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    console.log(key);
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&history.active=true&order=last_action_at';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
