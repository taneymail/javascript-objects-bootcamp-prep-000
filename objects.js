var playlist = new Object ({artistName : 'songTitle'});


var updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName] : songTitle})
}