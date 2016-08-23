import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      var url = "http://congress.api.sunlightfoundation.com/upcoming_bills?apikey=42b1bb92d794449693ab3438a2c7dce0&chamber=house&range=week&per_page=all";
      debugger;
      return Ember.$.getJSON(url).then(function(responseJSON) {

        return responseJSON.results;
    });
  }
});
