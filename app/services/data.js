'use strict';

app.factory('Data', function() {
  return {
    prefix: 'pomodoro-',
    
    sync: function(model, collection) {
      localStorage.setItem(prefix + model, JSON.stringify(collection));
      return JSON.parse(localStorage.getItem(prefix + model));
    },
    
    fetch: function(model) {
      return JSON.parse(localStorage.getItem(prefix + model));
    }
  };
});