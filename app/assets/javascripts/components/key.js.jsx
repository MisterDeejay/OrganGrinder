var Key = React.createClass({
  componentDidMount: function(){
    this.note = new Note(Tones[this.props.noteName]);
    KeyStore.addChangeListener(this._onChange);
  },
  _onChange: function(){
    if ($.inArray(this.props.noteName, KeyStore.all()) > -1){
      $("#" + this.props.noteName).addClass("active");
      this.note.start();
    } else {
      $("#" + this.props.noteName).removeClass("active");
      this.note.stop();
    }
  },
  render: function(){
    var className = "";
    var regex = /sharp/;
    if (this.props.noteName.match(regex) != null) {
      className = "sharp";
    } else {
      className = "note";
    }

    return (
      <li>
        <div className={className} id={this.props.noteName}></div>
      </li>
    )
  },
});
