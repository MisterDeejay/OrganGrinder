var Organ = React.createClass({
  getInitialState: function(){
    return ({ noteNames: Object.keys(Tones) });
  },
  render: function(){
    var view = this.state.noteNames.map(function(noteName, index){
      return <Key key={index + 1} noteName={noteName}/>
    });

    return (
        <ul className="organ">{view}</ul>
    );
  }
});
