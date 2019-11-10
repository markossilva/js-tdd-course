/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { describe, it } from 'mocha';
import spotify from '../src/utils/spotify';

describe('Spotify', () => {
  it('should be an OBJECT', () => {
    expect(spotify).to.be.an('object');
  });
  it('should have SEARCH methods', () => {
    expect(spotify.search).to.exist;
  });
  it('should have ALBUM methods', () => {
    expect(spotify.album).to.exist;
  });
});
