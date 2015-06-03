(function(root){
  var CHANGE_EVENT = "change";
  var _tracks = [];
  var addTrack = function(track) {
    _tracks.push(track);
  };
  var removeTrack = function(track) {
    idx = _tracks.indexOf(track._name);
    _tracks.splice(idx, 1);
  };

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _tracks.slice(0);
    },
    addChangeListener: function() {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case TrackConstants.SAVE_TRACK:
          addTrack(payload.track);
          KeyStore.emit(CHANGE_EVENT);
          break;
        case TrackConstants.DELETE_TRACK:
          removeTrack(payload.track);
          KeyStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
