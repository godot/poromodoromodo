'use strict';

app.factory('TasksWindow', function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();

    var showTray = function() {
        var tray = new gui.Tray({ title: 'Tray', icon: 'img/app-icon.png' });
        var menu = new gui.Menu();
        var menuItem = new gui.MenuItem( {
            label: 'show tasks',
            click: function() { win.restore(); tray.remove(); }
        });

        menu.append( menuItem );
        tray.menu = menu;
    };

    var service = {
        minimize: function() {
            //win.minimize();
            win.hide();
            showTray();
        },
        show: function() {
            console.log('tasks-window-show');
            win.show();
        },

        close : function() {
            win.close();
        }
    };

    return service;
});


app.factory('TimerWindow', function() {
    var gui = require('nw.gui');

    var getTimerWindow = function() {
        return gui.Window.get(window.open('file://' + window.location.pathname + '#/timer', {
            position: 'top',
            width: 390,
            height: 200,
            toolbar: true,
            frame: true,
            min_width: 390,
            min_height: 200,
            max_width: 390,
            max_height: 200,
            x: 1000,
            y: 100,
            resize: false,
            drag: true
        }));
    };

    var service = {
        close : function() {
            getTimerWindow().close();
        },
        show : function() {
            getTimerWindow();
        }
    };

    return service;
});
