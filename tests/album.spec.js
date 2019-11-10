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

describe('Album', () => {
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
    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });
    it('should have getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });
  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });
  describe('getTracks', () => {
    it('should call fetch method', () => {
      const tracks = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
  });
});
