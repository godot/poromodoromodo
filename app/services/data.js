'use strict';

app.factory('Data', function() {
  return {
    prefix: 'pomodoro-',

    sync: function(model, collection) {
      localStorage.setItem(this.prefix + model, JSON.stringify(collection));
      return JSON.parse(localStorage.getItem(this.prefix + model));
    },

    fetch: function(model) {
      return JSON.parse(localStorage.getItem(this.prefix + model));
    }
  };
});
