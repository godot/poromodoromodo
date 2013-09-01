if (!global.WindowManager) {
  global.WindowManager = {
    MainWindow: {
      window: null,
      tray: null,
    
      assign: function(win) {
        this.window = win;
      },
    
      minimize: function() {
        this.window.minimize();
        this.showTray();
      },
      
      close: function() {
        this.window.close();
      },
      
      restore: function() {
        this.window.restore();
        this.tray.remove();
      },
      
      showTray: function() {
        // TODO: tray should be created via constructor
        var _this = this;
        if (this.tray) { this.tray.remove() } // be sure old tray is removed
        this.tray = new gui.Tray({icon: 'img/app-icon-19x19.png'});
        var menu = new gui.Menu();
        var menuItem = new gui.MenuItem( {
            label: 'show tasks',
            click: function() { _this.restore(); }
        });

        menu.append( menuItem );
        this.tray.menu = menu;
      }
    },
  
    TimerWindow: {
      window: null,
      url: 'file://' + window.location.pathname + '#/timer',
      task: null,
      windowOptions: {
        position: 'center',
        width: 390,
        height: 200,
        toolbar: true,
        frame: false,
        min_width: 390,
        min_height: 200,
        max_width: 390,
        max_height: 200,
        x: 1000,
        y: 100,
        resize: false,
        drag: true
      },
    
      open: function(options, callback) {
        if (this.window) { this.close(); }
        if (options.task) { this.task = options.task; }
      
        this.window = gui.Window.open(this.url, this.windowOptions);
        
        if (callback) { callback(); }
      },
    
      minimize: function() {
        this.window.minimize();
      },
    
      close: function() {
        this.window.close();
        this.window = null;
      }
    }
  }
}