/* eslint-disable no-unused-expressions */
import 'jsdom-global/register';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import albumListComponent from '../src/album/album-list.component';

describe('AlbumList', () => {
  it('should exist', () => {
    expect(albumListComponent).to.exist;
  });

  const data = [
    {
      album_type: 'album',
      artists: [{
        name: 'Incubus',
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640,
      }, {
        height: 300,
        url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
        width: 300,
      }, {
        height: 64,
        url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
        width: 64,
      }],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const data2 = [
    {
      album_type: 'album',
      artists: [{
        name: 'Incubus',
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640,
      }, {
        height: 300,
        url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
        width: 300,
      }, {
        height: 64,
        url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
        width: 64,
      }],
      name: 'The Essential Incubus',
      type: 'album',
    },
    {
      album_type: 'album',
      artists: [{
        name: 'Incubus',
      }],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [{
        height: 640,
        url: 'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
        width: 640,
      }, {
        height: 300,
        url: 'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
        width: 300,
      }, {
        height: 64,
        url: 'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
        width: 64,
      }],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const markup = `
      <div class="list-item-${data[0].id}">
        <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image">
        <div class="list-description">
          <p class="list-title">${data[0].name}</p>
          <p class="list-subtitle">${data[0].artists[0].name}</p>
        </div>
      </div>
  `;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    albumListComponent(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append one more than 1 album', () => {
    const element2 = document.createElement('div');
    albumListComponent(data2, element2);
  });
});
