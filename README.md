Flux Piano using React
======================

Flux Piano is a simple piano application using [ReactJS](https://facebook.github.io/react/)
and the [Flux](https://facebook.github.io/flux/) application architecture.

![screenshot](/screenshot.png)

### Motivation

This project was developed to demonstrate Flux's unidirectional flow. "Flux eschews MVC in favor of a unidirectional data flow." Instead of having data constantly flowing back and forth between models and views via the controller, "When a user interacts with a React view, the view propagates an action through a central dispatcher, to the various stores that hold the application's data and business logic, which updates all of the views that are affected."

In other words, when the user presses a key on the keyboard, interacting
 with the React view, the view creates an action for the key that corresponds to
 a note. The central dispatcher, a singleton model, propagates the action to the
 KeyStore which holds the keys that are currently being played. The KeyStore emits a CHANGE_EVENT, triggering a callback on a corresponding Key component allowing the
 key to emit it's proper note.

On the key up event, this process is almost identical;
 however, the Dispatcher propagates a different action, removing that the corresponding
 key from the KeyStore and eventually triggering a callback that stops the Key
 component from emitting a sound.

### Installation

Clone this repository:

    git clone https://github.com/misterdeejay/organgrinder

Install gems:

    cd organgrinder/
    bundle

Install node modules:

    npm install

_Optional_: Download and install the [postgress app](http://postgresapp.com/).

    rake db:setup

### Running

Make sure Postgres is running. Start a local server with:

    rails s

Then, visit localhost:3000 in your browser.

### License

(The MIT License)

Copyright (c) 2015 Khaaliq DeJan <khaaliqdejan@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
