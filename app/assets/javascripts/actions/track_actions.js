TrackActions = {
  addTrack: function() {
    AppDispatcher.dispatch({
      actionType: TrackConstants.SAVE_TRACK,
      track: track
    });
  },
  removeTrack: function() {
    AppDispatcher.dispatch({
      actionType: TrackConstants.DELETE_TRACK,
      track: track
    });
  }
}
