function createMarkUp(data) {
  return data.map((album) => `
      <div class="list-item-${album.id}">
        <img src="${album.images[2].url}" alt="${album.name}" class="list-image">
        <div class="list-description">
          <p class="list-title">${album.name}</p>
          <p class="list-subtitle">${album.artists[0].name}</p>
        </div>
      </div>
  `).join('');
}
export default function renderAlbums(data, element) {
  const markup = createMarkUp(data);
  const e = element;
  e.innerHTML = markup;
}