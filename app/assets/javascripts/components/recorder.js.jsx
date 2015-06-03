var Recorder = React.createClass({
  componentDidMount: function() {
      this.track = new Track()
  },

  render: function() {
    return (
      <div className="recorder">
        <button id="record" onClick={this.startRecording()}></button>
        <button id="stop" onClick={this.stopRecording()}></button>
      </div>
    );
  }
});
