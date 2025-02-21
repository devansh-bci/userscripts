(() => {
  "use strict";
  console.log("index js loaded 1..."),
    window.enableFeature_1 && console.log("Feature 1 loaded successfully..."),
    window.enableFeature_2 && console.log("Feature 2 loaded successfully..."),
    (window.MyLibrary = {});
})();
