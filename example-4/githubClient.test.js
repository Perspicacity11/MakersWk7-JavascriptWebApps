
const GithubClient = require('./githubClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('GithubClient class', () => {
  it('calls fetch and loads repo info', (done) => {
    const client = new GithubClient();
    fetch.mockResponseOnce(JSON.stringify({
      name: 'rails/rails',
      description: 'Ruby on Rails'
    }));

    client.getRepoInfo('rails/rails', (repoInfo) => {
      expect(repoInfo.description).toBe('Ruby on Rails');

      // Refer to
      // https://github.com/makersacademy/javascript-fundamentals/blob/main/pills/testing_asynchronous_code.md#testing-callbacks
      // if you're unsure why we are using this done() function.
      done();
    });
  });
});