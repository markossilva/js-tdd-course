import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import SpotifyWrapper from '../src';
import { API_URL } from '../src/config';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });
  it('should receive apiURL as an option', () => {
    const options = {
      apiUrl: 'anyUrl',
    };
    const spotify = new SpotifyWrapper(options);
    expect(spotify.apiUrl).to.be.equal(options.apiUrl);
  });
  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiUrl).to.be.equal(API_URL);
  });
  it('should receive token as an option', () => {
    const options = {
      token: 'test',
    };
    const spotify = new SpotifyWrapper(options);
    expect(spotify.token).to.be.equal(options.token);
  });

  describe('request method', () => {
    let stubedFetch;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({ json: () => { } });
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      const spotify = new SpotifyWrapper({});
      // eslint-disable-next-line no-unused-expressions
      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      const options = {
        token: 'foo',
      };
      const spotify = new SpotifyWrapper(options);
      spotify.request('url');
      // eslint-disable-next-line no-unused-expressions
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      const options = {
        token: 'token',
      };
      const ulrTest = 'url';
      const spotify = new SpotifyWrapper(options);
      spotify.request(ulrTest);
      expect(stubedFetch).to.have.been.calledWith(ulrTest);
    });

    it('should call fetch with right headers passed', () => {
      const options = {
        token: 'token',
      };
      const headers = {
        headers: {
          Authorization: 'Bearer token',
        },
      };
      const ulrTest = 'url';
      const spotify = new SpotifyWrapper(options);
      spotify.request(ulrTest);
      expect(stubedFetch).to.have.been.calledWith(ulrTest, headers);
    });
  });
});
