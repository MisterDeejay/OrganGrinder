(function(root){
  var CHANGE_EVENT = "change";
  var _tracks = [];

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _track.slice(0);
    },
    addChangeListener: function() {
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case TrackConstants.SAVE_TRACK:
          KeyStore.emit(CHANGE_EVENT);
          break;
        case TrackConstants.DELETE_TRACK:
          KeyStore.emit(CHANGE_EVENT);
          break;
      }
    });
  })
})(this);
