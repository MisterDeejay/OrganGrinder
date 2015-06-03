window.Track = function(name, roll) {
  this._name = name;
  this._roll = roll;
  this._recording = false;
};

Track.prototype = {
  record: function() {
    this._recording = true;
    this._startTime = Date.now();
  },
  stop: function() {
    this._recording = false;
  },
  save: function() {
    var name = prompt("Please enter your track name");
    if (name != null) {
      this.name = name;
      // next need to add a li to the track list which plays back this track
    }
  },
  play: function() {
    var that = this;
    this._roll.forEach(function(el) {
      var play = function() {
        that.playNotes(el);
      };
      setTimeout(play, el.time);
    });
  },
  playNotes: function(rollEl) {
    var notesBeingPlayed = KeyStore.all();
    notesBeingPlayed.forEach(this.triggerKeyUpAction);
    rollEl.notes.forEach(this.triggerKeyDownAction);
  },
  stopPlayingNote: function(note) {
    if(!newNotes.includes(note)){
      triggerKeyUp(note);
    }
  },
  triggerKeyUpAction: function(note) {
    KeyActions.removeKey(note);
  },
  triggerKeyDownAction: function(note) {
    KeyActions.addKey(note);
  },
  addNotes: function(notes) {
    if (this._recording === true) {
      var rollEl = { time: (Date.now() - this._startTime), notes: notes }
      this._roll.push(rollEl);
    }
  }
};
