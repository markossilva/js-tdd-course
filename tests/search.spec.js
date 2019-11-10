/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import SpotifyWrapper from '../src';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Search', () => {
  let spotify;
  let stubedFetch;
  let promise;

  beforeEach(() => {
    spotify = new SpotifyWrapper({ token: 'token' });
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returns();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exist the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Search Artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });

  describe('Search Playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });
});
