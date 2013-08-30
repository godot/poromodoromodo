'use strict';

app.factory('TasksManager', function() {
    var service = {
        tasks : [],
        get : function() { return this.tasks; },
        set : function(tasks){ this.tasks = tasks; }
    };

    return service;
});
