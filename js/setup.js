'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var wizardsList = document.querySelector('.setup-similar-list');
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var colorCoat = setup.querySelector('.setup-wizard .wizard-coat');
var colorEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var colorFireball = setup.querySelector('.setup-fireball-wrap');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var magicArray = function () {
  var array = [];
  for (var i = 0; i <= 3; i++) {
    var name = firstNames[getRandomInt(0, firstNames.length - 1)] + ' ' + lastNames[getRandomInt(0, lastNames.length - 1)];
    var coatColor = coatColors[getRandomInt(0, coatColors.length - 1)];
    var eyesColor = eyesColors[getRandomInt(0, eyesColors.length - 1)];
    array.push({'name': name, 'coatColor': coatColor, 'eyesColor': eyesColor});
  }
  return array;
};

var makeElement = function (obj) {
  var wizardTemplate = document.querySelector('#similar-wizard-template');
  var wizard = wizardTemplate.content.cloneNode(true);
  var name = wizard.querySelector('.setup-similar-label');
  name.textContent = obj.name;
  var coat = wizard.querySelector('.wizard-coat');
  coat.style.fill = obj.coatColor;
  var eyes = wizard.querySelector('.wizard-eyes');
  eyes.style.fill = obj.eyesColor;
  return wizard;
};

var collection = document.createDocumentFragment();
var wizards = magicArray();

for (var j = 0; j <= 3; j++) {
  var wizard = makeElement(wizards[j]);
  collection.appendChild(wizard);
}

wizardsList.appendChild(collection);

var setupSim = document.querySelector('.setup-similar');
setupSim.classList.remove('hidden');

var onSetupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closeSetup();
  }
};

function openSetup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
}

function closeSetup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
}

setupOpen.addEventListener('click', openSetup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openSetup();
  }
});

setupClose.addEventListener('click', closeSetup);

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeSetup();
  }
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
  var num = getRandomInt(0, coatColors.length - 1);
  evt.target.style.fill = coatColors[num];
  document.forms[0]['coat-color'].value = coatColors[num];
});

colorEyes.addEventListener('click', function (evt) {
  var num = getRandomInt(0, eyesColors.length - 1);
  evt.target.style.fill = eyesColors[num];
  document.forms[0]['eyes-color'].value = eyesColors[num];
});

colorFireball.addEventListener('click', function (evt) {
  var num = getRandomInt(0, fireballColors.length - 1);
  evt.target.style.backgroundColor = fireballColors[num];
  document.forms[0]['fireball-color'].value = fireballColors[num];
});
