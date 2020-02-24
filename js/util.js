'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscPress: function (evt, action) {
      if (evt.keycode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterPress: function (evt, action) {
      if (evt.keycode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomInt: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    getRandomElementFromArray: function (array) {
      var index = window.util.getRandomInt(0, array.length - 1);
      return array[index];
    }

  };
}());
