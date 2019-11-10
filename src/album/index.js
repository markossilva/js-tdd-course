export default function album() {
  return {
    getAlbum: (id) => this.request(`${this.apiUrl}/albums/${id}`),
    getAlbums: (id) => this.request(`${this.apiUrl}/albums/?ids=${id}`),
    getTracks: (id) => this.request(`${this.apiUrl}/albums/${id}/tracks`),
  };
}
