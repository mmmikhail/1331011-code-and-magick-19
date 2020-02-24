'use strict';

(function () {
  var uploadBlock = document.querySelector('.upload');
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var userNameInput = setup.querySelector('.setup-user-name');
  var colorCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var colorEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var colorFireball = setup.querySelector('.setup-fireball-wrap');
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  function onSetupEscPress(evt) {
    if (evt.key === 'Escape') {
      closeSetup();
    }
  }

  function openSetup() {
    setup.classList.remove('hidden');
    window.dialogPosition = {
      top: setup.offsetTop,
      left: setup.offsetLeft
    };
    document.addEventListener('keydown', onSetupEscPress);
  }

  function closeSetup() {
    setup.classList.add('hidden');
    setup.style.top = window.dialogPosition.top + 'px';
    setup.style.left = window.dialogPosition.left + 'px';
    document.removeEventListener('keydown', onSetupEscPress);
  }

  setupOpen.addEventListener('click', openSetup);

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterPress(evt, openSetup);
  });

  setupClose.addEventListener('click', closeSetup);

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEscPress(evt, closeSetup);
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  colorCoat.addEventListener('click', function (evt) {
    var element = window.util.getRandomElementFromArray(coatColors);
    evt.target.style.fill = element;
    document.forms[0]['coat-color'].value = element;
  });

  colorEyes.addEventListener('click', function (evt) {
    var element = window.util.getRandomElementFromArray(eyesColors);
    evt.target.style.fill = element;
    document.forms[0]['eyes-color'].value = element;
  });

  colorFireball.addEventListener('click', function (evt) {
    var element = window.util.getRandomElementFromArray(fireballColors);
    evt.target.style.backgroundColor = element;
    document.forms[0]['fireball-color'].value = element;
  });

  uploadBlock.addEventListener('mousedown', moveBlock);

  function moveBlock(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    }

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          uploadBlock.removeEventListener('click', onClickPreventDefault);
        };
        uploadBlock.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }
}());
