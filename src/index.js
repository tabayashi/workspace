'use strict';
var util = require('util');
var Base = require('temporary').Dir;
var rmrf = require('rimraf');

function Workspace() {
  if (!(this instanceof Workspace)) {
    return new Workspace();
  }
  Base.call(this);
}
util.inherits(Workspace, Base);

Object.defineProperties(Workspace.prototype, {
  remove: {
    value: function() {
      var path = this.path;
      rmrf(path);
      return path;
    },
  },
});

module.exports = Workspace;
