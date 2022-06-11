function mergeConfigs(configs = []) {

  const resultConfig = {};

  configs.forEach((curConfig) => {

    Object.entries(curConfig).forEach(([key, value]) => {

      if (value instanceof Array) {

        resultConfig[key] ??= [];
        resultConfig[key] = resultConfig[key].concat(value);
        return;

      }

      if (value instanceof Object) {

        resultConfig[key] ??= {};
        resultConfig[key] = { ...resultConfig[key], ...value };
        return;

      }

      resultConfig[key] = value;

    });

  });

  return resultConfig;

}

module.exports = mergeConfigs;
