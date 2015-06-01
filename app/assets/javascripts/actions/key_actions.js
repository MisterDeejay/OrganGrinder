KeyActions = {
  addKey: function(noteName){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_DOWN,
      noteName: noteName
    });
  },
  removeKey: function(noteName){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_UP,
      noteName: noteName
    });
  }
};
