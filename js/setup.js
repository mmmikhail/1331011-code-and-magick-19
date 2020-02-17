'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var wizardsList = document.querySelector('.setup-similar-list');
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var magicArray = function () {
  var array = [];
  for (var i = 0; i <= 3; i++) {
    var name = firstNames[getRandomInt(0, firstNames.length - 1)] + lastNames[getRandomInt(0, lastNames.length - 1)];
    var coatColor = coatColors[getRandomInt(0, coatColors.length - 1)];
    var eyesColor = eyesColors[getRandomInt(0, eyesColors.length - 1)];
    array.push({'name': name, 'coatColor': coatColor, 'eyesColor': eyesColor});
  }
  return array;
};

var makeElement = function (obj) {
  var wizardTemplate = document.querySelector('#similar-wizard-template');
  var wizard = wizardTemplate.content.cloneNode(true);
  var name = wizard.classList.add('.setup-similar-label');
  name.textContent = obj.name;
  var coat = wizard.querySelector('.wizard-coat');
  coat.setAttribute('style', 'fill:' + obj.coatColor);
  var eyes = wizard.querySelector('.wizard-eyes');
  eyes.setAttribute('style', 'fill:' + obj.eyesColor);
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
