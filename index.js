const CommerceSDK = require("@chec/commerce.js");

const VueCommerceJS = {
  install: (Vue, ...options) => {
    const commercejs = new CommerceSDK(...options);

    Object.defineProperties(Vue.prototype, {
      $commercejs: {
        get: () => commercejs,
      },
    });

    Vue.commercejs = commercejs;
  },
};

module.exports = VueCommerceJS;
