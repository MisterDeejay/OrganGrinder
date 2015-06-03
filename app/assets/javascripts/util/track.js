window.Track = function(name, roll) {
  this.name = name;
  var _roll = [];
  var _startTime = (new Date()).getTime();

  // record: function() {
  //
  // },
  //
  // stopRecording: function() {
  //
  // },

  Track.prototype = {
    addNotes: function(notes) {
      if (_roll.length === 0) {
        rollEl = { time: 0, notes: notes };
      } else {
        currentTime = (new Date()).getTime() - _startTime;
        rollEl = { time: currentTime, notes: notes }
      }
      _roll.push(rollEl);
    },
  };
};
