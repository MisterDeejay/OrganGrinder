TrackActions = {
  addTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.SAVE_TRACK,
      track: track
    });
  },
  removeTrack: function(track) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.DELETE_TRACK,
      track: track
    });
  }
}
