KeyListener = {
  keyCodes: {
    81: "c4",
    50: "c4_sharp",
    87: "d4",
    51: "d4_sharp",
    69: "e4",
    82: "f4",
    53: "f4_sharp",
    84: "g4",
    54: "g4_sharp",
    89: "a4",
    55: "a4_sharp",
    85: "b4",

    90: "c5",
    83: "c5_sharp",
    88: "d5",
    68: "d5_sharp",
    67: "e5",
    86: "f5",
    71: "f5_sharp",
    66: "g5",
    72: "g5_sharp",
    78: "a5",
    74: "a5_sharp",
    77: "b5"
  },
  createKeyDownAction: function(e){
    // e.preventDefault();
    console.log(e.keyCode);
    var noteName = KeyListener.keyCodes[e.keyCode];
    KeyActions.addKey(noteName);
  },
  createKeyUpAction: function(e){
    // e.preventDefault();
    var noteName = KeyListener.keyCodes[e.keyCode];
    KeyActions.removeKey(noteName);
  }
};

$(document).keydown(KeyListener.createKeyDownAction);
$(document).keyup(KeyListener.createKeyUpAction);
