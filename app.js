var bs = require("browser-sync").create();

bs.watch(['*.*', 'css/*.css', 'js/*.js']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "sass-theme"
});