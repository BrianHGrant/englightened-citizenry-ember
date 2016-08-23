import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
      var url = "http://congress.api.sunlightfoundation.com/committees?apikey=42b1bb92d794449693ab3438a2c7dce0&parent_committee_id=" + params.committee_id + "&per_page=all";
      debugger;
      return Ember.$.getJSON(url).then(function(responseJSON) {

        return responseJSON.results;
    });
  }
});
