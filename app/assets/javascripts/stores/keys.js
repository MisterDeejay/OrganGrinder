(function(root){
  var CHANGE_EVENT = "change";
  var _keysBeingPlayed = [];
  var addKey = function(noteName){
    if ($.inArray(noteName, _keysBeingPlayed) === -1){
      _keysBeingPlayed.push(noteName);
      return true;
    }
    return false;
  };
  var removeKey = function(noteName){
    var idx = _keysBeingPlayed.indexOf(noteName);
    if (idx > -1){
      _keysBeingPlayed.splice(idx, 1);
      return true;
    }
    return false;
  };

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _keysBeingPlayed.slice(0);
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case KeyConstants.KEY_DOWN:
          if (addKey(payload.noteName)) {
            KeyStore.emit(CHANGE_EVENT);
          };
          break;
        case KeyConstants.KEY_UP:
          if (removeKey(payload.noteName)) {
            KeyStore.emit(CHANGE_EVENT);
          };
          break;
      }
    })
  });
    KeyStore.setMaxListeners(50);
})(this);
