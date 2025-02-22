(() => {
  "use strict";
  console.log("loader js loaded..."),
    window.ps_test_feature_1 &&
      (console.log("Test Feature 1 loaded successfully..."),
      setTimeout(() => {
        document.getElementsByTagName("html")[0].style.border =
          "10px solid blue";
      }, 5e3));
})();
