(function(root){
  var CHANGE_EVENT = "change";
  var _tracks = [];

  root.TrackStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _track.slice(0);
    },
    addChangeListener: function() {
      this.on(CHANGE_EVENT, callback);
    }
  })
})(this);
