'use strict';

app.factory('Data', function() {
  return {
    prefix: 'pomodoro-',
  
    add: function() {
      obj = {
        model: 'Task',
        item: {
          id: 1,
          status: dupa
        }
      }
      localStorage.setItem(prefix + obj.model + '-' + id, obj);
    },
    
    remove: function(obj) {
      localStorage.removeItem(prefix + obj.model + '-' + id);
    },
    
    update: function(obj) {
      this.add(obj);
      return true;
    },
    
    find: function(model, id) {
      this.
    },
    
    collection: function(model) {
      
    },
    
    sync: function(collection) {
      
    }
  };
});