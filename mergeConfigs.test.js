const mergeConfigs = require('./mergeConfigs.js');

describe('mergeConfigs tests', () => {

  it('should get empty object, return empty object', () => {

    expect(mergeConfigs()).toEqual({});

  });

  it('should get 2 empty objects, return empty object', () => {

    expect(mergeConfigs([{}, {}])).toEqual({});

  });

  it('should get not empty object, return the same object', () => {

    const config = {
      env: {
        node: true,
      },
      extends: ['eslint:recommended'],
      rules: {
        'no-shadow': 'error',
      },
    };
    expect(mergeConfigs([config])).toEqual(config);

  });

  it('should get 3 not empty objects, return merged object', () => {

    const configs = [
      {
        env: {
          node: true,
        },
        extends: ['eslint:recommended'],
      },
      {
        env: {
          browser: true,
        },
        rules: {
          'no-shadow': 'error',
        },
      },
      {
        extends: ['prettier'],
        rules: {
          'prettier/prettier': 'error',
        },
      },
    ];

    const finalConfig = {
      env: {
        node: true,
        browser: true,
      },
      extends: ['eslint:recommended', 'prettier'],
      rules: {
        'no-shadow': 'error',
        'prettier/prettier': 'error',
      },
    };

    expect(mergeConfigs(configs)).toEqual(finalConfig);

  });

});
