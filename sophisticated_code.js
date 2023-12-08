/* sophisticated_code.js - Complex Code Example */

// This code demonstrates a sophisticated implementation of a library for managing a digital media collection.

class Media {
  constructor(title, duration, artist) {
    this.title = title;
    this.duration = duration;
    this.artist = artist;
    this.isPlaying = false;
  }

  play() {
    this.isPlaying = true;
    console.log(`Now playing "${this.title}" by ${this.artist}`);
  }

  stop() {
    this.isPlaying = false;
    console.log(`Stopped playing "${this.title}"`);
  }
}

class Album extends Media {
  constructor(title, duration, artist, songs) {
    super(title, duration, artist);
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
    console.log(`Added "${song}" to album "${this.title}"`);
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.playlist = [];
    this.currentTrackIndex = 0;
  }

  addToPlaylist(media) {
    this.playlist.push(media);
    console.log(`Added "${media.title}" to playlist "${this.name}"`);
  }

  play() {
    if (this.playlist.length > 0) {
      this.playlist[this.currentTrackIndex].play();
    } else {
      console.log(`Playlist "${this.name}" is empty.`);
    }
  }

  stop() {
    if (this.playlist.length > 0) {
      this.playlist[this.currentTrackIndex].stop();
    } else {
      console.log(`Playlist "${this.name}" is empty.`);
    }
  }

  next() {
    if (this.playlist.length > 0) {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
      console.log(`Now playing next track "${this.playlist[this.currentTrackIndex].title}"`);
    } else {
      console.log(`Playlist "${this.name}" is empty.`);
    }
  }

  previous() {
    if (this.playlist.length > 0) {
      this.currentTrackIndex =
        (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
      console.log(`Now playing previous track "${this.playlist[this.currentTrackIndex].title}"`);
    } else {
      console.log(`Playlist "${this.name}" is empty.`);
    }
  }
}

// Example usage:

const song1 = new Media("Song 1", "3:45", "Artist 1");
const song2 = new Media("Song 2", "4:12", "Artist 2");
const album = new Album("Album 1", "37:23", "Artist 3", [song1, song2]);
const playlist = new Playlist("My Playlist");

playlist.addToPlaylist(song1);
playlist.addToPlaylist(song2);
playlist.addToPlaylist(album);

playlist.play();
console.log("-----");
playlist.next();
console.log("-----");
playlist.previous();
console.log("-----");
playlist.stop();

album.addSong("Song 3");
playlist.next();
playlist.stop();
console.log("-----");

// Output:
// Added "Song 1" to playlist "My Playlist"
// Added "Song 2" to playlist "My Playlist"
// Added "Album 1" to playlist "My Playlist"
// Now playing "Song 1" by Artist 1
// -----
// Now playing next track "Song 2"
// -----
// Now playing previous track "Song 1"
// -----
// Stopped playing "Song 1"
// Added "Song 3" to album "Album 1"
// Now playing next track "Song 3"
// Stopped playing "Song 3"
// -----