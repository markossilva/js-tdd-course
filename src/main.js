import spotify from './utils/spotify';
import albumInfoComponent from './album/album-info.component';
import albumListComponent from './album/album-list.component';

const albums = spotify.search.albums('Incubus');
const albumsList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
const albumInfo = document.getElementById('album-info');

albums.then((data) => albumListComponent(data.albums.items, albumsList));
album.then((data) => albumInfoComponent(data, albumInfo));
