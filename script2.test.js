const fetch = require('node-fetch');
const swapi = require('./script2');

// Async test using done() function call
it('Calls SWAPI to get people', done => {
  expect.assertions(1);
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  });
});

// Async test by returning the promise from the test (Jest knows then to wait)
it('Calls SWAPI to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it('getPeople returns count asnd results', () => {
  expect.assertions(4);

  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );
  return swapi.getPeoplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});