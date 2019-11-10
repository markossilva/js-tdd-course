import spotify from './spotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';

const albums = spotify.search.albums('Incubus');
const albumsList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums.then((data) => renderAlbums(data.albums.items, albumsList));
album.then((data) => renderAlbumInfo(data, albumInfo));
