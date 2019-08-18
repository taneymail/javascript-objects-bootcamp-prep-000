var playlist = new Object {
}

var updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName] : songTitle})
}