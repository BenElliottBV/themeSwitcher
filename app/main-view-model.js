var Observable = require("data/observable").Observable;
var application = require("application");
var frameModule = require("ui/frame");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.darkTheme = function() {
        application.cssSelectorsCache = application.loadCss("./app-dark.css");
        application.cssFile = ("./app-dark.css");
        this.reload();
    };

    viewModel.lightTheme = function() {
        application.cssSelectorsCache = application.loadCss("./app.css");
        application.cssFile = ("./app.css");
        this.reload();
    };

    viewModel.reload = function(){
      var topmost = frameModule.topmost();
      topmost.navigate("main-page");
    };

    return viewModel;
}

exports.createViewModel = createViewModel;
