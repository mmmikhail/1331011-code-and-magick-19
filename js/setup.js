'use strict';

(function () {
  var wizardsList = document.querySelector('.setup-similar-list');

  var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  function magicArray() {
    var array = [];
    for (var i = 0; i <= 3; i++) {
      var name = window.util.getRandomElementFromArray(firstNames) + ' ' + window.util.getRandomElementFromArray(lastNames);
      var coatColor = window.util.getRandomElementFromArray(coatColors);
      var eyesColor = window.util.getRandomElementFromArray(eyesColors);
      array.push({'name': name, 'coatColor': coatColor, 'eyesColor': eyesColor});
    }
    return array;
  }

  function makeElement(obj) {
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    var wizard = wizardTemplate.content.cloneNode(true);
    var name = wizard.querySelector('.setup-similar-label');
    var coat = wizard.querySelector('.wizard-coat');
    var eyes = wizard.querySelector('.wizard-eyes');

    name.textContent = obj.name;
    coat.style.fill = obj.coatColor;
    eyes.style.fill = obj.eyesColor;

    return wizard;
  }

  var collection = document.createDocumentFragment();
  var wizards = magicArray();

  for (var j = 0; j <= 3; j++) {
    var wizard = makeElement(wizards[j]);
    collection.appendChild(wizard);
  }

  wizardsList.appendChild(collection);

  var setupSim = document.querySelector('.setup-similar');
  setupSim.classList.remove('hidden');
}());
