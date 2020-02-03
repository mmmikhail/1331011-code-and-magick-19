window.renderStatistics = function (ctx, names, times) {
  var width = 420;
  var height = 270;
  var x = 100;
  var y = 10;

  var congrats = 'Ура вы победили! \nСписок результатов: ';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x + 10, y + 10, width, height);
  ctx.fillStyle = 'white';
  ctx.fillRect(x, y, width, height);
  ctx.font = '16px pt monospace';
  ctx.fillStyle = 'black';
  ctx.fillText(congrats.split('\n')[0], x + 30, y + 30);
  ctx.fillText(congrats.split('\n')[1], x + 30, y + 40);

  var intervalHist = 50;
  var hTime = 150;
  var shiftX = 120;
  var shiftY = 70;
  for (var i = 0; i <= names.length - 1; i++) {
    if (names[i] == 'Вы') {
      hTime = 150;
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.random();
      ctx.fillStyle = 'hsl(246, 100%, 44%, ' + saturation + ')';
    }
    ctx.fillRect(x + i * intervalHist + shiftX, y + shiftY + 10, 40, hTime);
    //ctx.fillStyle = 'black';
    ctx.fillText(names[i], x + i * intervalHist + shiftX, y + shiftY);
    ctx.fillText(Math.round(times[i]), x + i * intervalHist + shiftX, y + shiftY + 180);
  }
};
