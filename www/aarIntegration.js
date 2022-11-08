var aarintegration = {
  greet: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "AarIntegration", "greet", []);
  },
};

cordova.addConstructor(function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.aarintegration = aarintegration;
  return window.plugins.aarintegration;
});
