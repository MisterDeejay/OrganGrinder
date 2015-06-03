var Recorder = React.createClass({
  componentDidMount: function() {
    this.track = new Track("newTrack", []);
    KeyStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.track.addNotes(KeyStore.all());
  },
  toggleRecording: function() {
    if (this.track._recording === false) {
      this.track.record();
      var recordButton = document.getElementById("record");
      recordButton.innerText = "Stop";
    } else {
      this.track.stop();
      var recordButton = document.getElementById("record");
      recordButton.innerText = "Record";
      this.track.save();
    }
  },
  playTrack: function() {
    this.track.play();
  },
  render: function() {
    return (
      <div className="recorder">
        <button id="record" onClick={this.toggleRecording}>Record</button>
        <button id="play" onClick={this.playTrack}>Play</button>
      </div>
    );
  }
});
