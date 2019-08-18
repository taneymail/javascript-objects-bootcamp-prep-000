var playlist = {
  Beethoven : 'Symphony',
  Mozart: 'Concerto',
}

var updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName] : songTitle})
}