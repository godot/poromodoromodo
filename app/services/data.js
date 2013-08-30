'use strict';

app.factory('Data', function() {
  return {
    prefix: 'pomodoro-',

    sync: function(model, collection) {
      this.save(model, collection);
      return this.fetch(model);
    },
    
    save: function(model, collection) {
      localStorage.setItem(this.prefix + model, JSON.stringify(collection));
    },

    fetch: function(model) {
      return JSON.parse(localStorage.getItem(this.prefix + model)) || [];
    }
  };
});
