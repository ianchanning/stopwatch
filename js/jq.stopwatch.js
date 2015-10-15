(function($) {
  $.fn.stopwatch = function(theme) {
    var stopwatch = $(this);
    stopwatch.addClass('stopwatch').addClass(theme);

    stopwatch.each(function() {
      var instance = $(this);
      var timer = 0;

      var stopwatchFace = $('<div>').addClass('the-time');
      var timeHour = $('<span>').addClass('hr').text('00');
      var timeMin = $('<span>').addClass('min').text('00');
      var timeSec = $('<span>').addClass('sec').text('00');
      var timeHSec = $('<span>').addClass('hsec').text('00');
      var startStopBtn = $('<a>').attr('href', '').addClass('start-stop').text('Start');
      var resetBtn = $('<a>').attr('href', '').addClass('reset').text('Reset');
      stopwatchFace = stopwatchFace.append(timeHour).append(timeMin).append(timeSec).append(timeHSec);
      instance.html('').append(stopwatchFace).append(startStopBtn).append(resetBtn);

      startStopBtn.bind('click', function(e) {
        e.preventDefault();
        var button = $(this);
        if(button.text() === 'Start') {
          timer = setInterval(runStopwatch, 10);
          button.text('Stop');
        } else {
          clearInterval(timer);
          button.text('Start');
        }
      });

      resetBtn.bind('click', function(e) {
          e.preventDefault();
          clearInterval(timer);
          startStopBtn.text('Start');
          timer = 0;
          timeHour.text('00');
          timeMin.text('00');
          timeSec.text('00');
          timeHSec.text('00');
      });

      function runStopwatch() {
        $(this).chkWatch().tick(timeHSec, 100).tick(timeSec, 60).tick(timeMin, 60).tick(timeHour, 24);
      }
    });
  };

  $.fn.chkWatch = function() {
    this.checkSum = null;

    this.tick = function(unitElement, limit, func) {
      var newHand = this.count(this.hand(unitElement), this.checkSum, limit, 0);
      this.update(unitElement, newHand, 0);
      return this;
    };

    this.count = function(unit, checkSum, limit, overflow) {
      if (this.check(checkSum)) {
        unit++;
      }
      if (unit >= limit) {
        return overflow;
      }
      return unit;
    };

    this.check = function(checkSum) {
      return typeof(checkSum) === undefined || checkSum === null || checkSum === 0;
    };

    this.update = function(unitElement, newHand, overflow) {
      unitElement.html(this.zeroPad(newHand));
      // this here is the bit that makes it all tick
      this.checkSum += (newHand - overflow);
    };

    this.zeroPad = function (newHand) {
      return "0".substring(newHand >= 10) + newHand;
    };

    this.hand = function(unitElement) {
      // parseInt() doesn't work here...
      return parseFloat(unitElement.text());
    };

    return this;
  };
})(jQuery);