'use strict';

app.factory('TasksWindow', function() {
    var gui = require('nw.gui');
    var win = gui.Window.get();

    var showTray = function() {
        var tray = new gui.Tray({ title: 'Tray', icon: 'img/app-icon.png' });
        var menu = new gui.Menu();
        var menuItem = new gui.MenuItem( {
            type: 'checkbox',
            label: 'box1',
            click: function() { win.show(); tray.remove(); }
        });

        menu.append( menuItem );
        tray.menu = menu;
        console.log( tray );
    };

    var service = {
        minimize: function() {
            win.minimize();
            win.hide();
            showTray();
        },

        close : function() {
            win.close();
        }
    };

    return service;
});


app.factory('TimerWindow', function(TasksWindow) {
    var gui = require('nw.gui');
    var timer = null;

    var showTimer = function() {
        TasksWindow.minimize();
        timer = gui.Window.open('file://' + window.location.pathname + '#/timer', {
            position: 'top',
            width: 390,
            height: 200,
            toolbar: false,
            frame: false,
            min_width: 390,
            min_height: 200,
            max_width: 390,
            max_height: 200,
            x: 1000,
            y: 100,
            resize: false,
            drag: true
        });
    };

    var service = {
        close : function() {
            timer.close();
        },
        show : function() {
            showTimer();
        }
    };

    return service;
});
