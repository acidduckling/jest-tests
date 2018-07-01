const search = require('./script');

const dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

describe('search', () => {
  it('is a silly test', () => {
    // search('testtest', dbMock);
    expect('hello').toBe('hello');
  });

  it('is searching google', () => {
    expect(search('testtest', dbMock)).toEqual([]);
    expect(search('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
  });

  it('should work with undefined and null input', () => {
    expect(search(undefined, dbMock)).toEqual([]);
    expect(search(null, dbMock)).toEqual([]);
  });

  it('should return no more than 3 matches', () => {
    expect(search('.com', dbMock).length).toEqual(3);
  });
});
