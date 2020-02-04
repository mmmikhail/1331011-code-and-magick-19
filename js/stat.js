window.renderStatistics = function (ctx, names, times) {
  var WIDTH = 420;
  var HEIGHT = 270;
  var X = 100;
  var Y = 10;

  var CONGRATS = 'Ура вы победили! \nСписок результатов: ';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(X + 10, Y + 10, WIDTH, HEIGHT);
  ctx.fillStyle = 'white';
  ctx.fillRect(X, Y, WIDTH, HEIGHT);
  ctx.font = '16px PT mono';
  ctx.fillStyle = 'black';
  ctx.fillText(CONGRATS.split('\n')[0], X + 30, Y + 30);
  ctx.fillText(CONGRATS.split('\n')[1], X + 30, Y + 50);

  var INTERVALHIST = 50;
  var COL_WIDTH = 40;
  var HTIME = 150;
  var SHIFTX = 60;
  var SHIFTY = 80;
  var MAX_TIME = times[0];
  // Array of histogram heights
  for (var i = 1; i <= times.length - 1; i++) {
    if ( times[i] > MAX_TIME ) {
        MAX_TIME = times[i];
    }
  }
  for (var i = 0; i <= names.length - 1; i++) {
    if (names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(246, 100%, ' + Math.random() * 100 + '%, 1)';
    }
    ctx.fillRect(X + i * (COL_WIDTH + INTERVALHIST) + SHIFTX, Y + SHIFTY + 10 + HTIME - HTIME * times[i] / MAX_TIME, COL_WIDTH, HTIME * times[i] / MAX_TIME);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], X + i * (COL_WIDTH + INTERVALHIST) + SHIFTX, Y + SHIFTY);
    ctx.fillText(Math.round(times[i]), X + i * (COL_WIDTH + INTERVALHIST) + SHIFTX, Y + SHIFTY + 180);
  }
};
