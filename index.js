'use strict';
var util = require( 'util' );
var Base = require( 'temporary' ).Dir;
var rmrf = require( 'rmrf' );

function Workspace() {
  Base.call( this );
}

util.inherits( Workspace, Base );

Workspace.prototype.remove = function() {
  var path = this.path;
  rmrf( path );
  return path;
};

module.exports = Workspace;

