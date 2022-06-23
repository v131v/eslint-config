# eslint-config

My eslint configs with typescript, react, jest and airbnb-config

## Usage

1. Install package

  ```sh
  npm i --save-dev https://github.com/v131v/eslint-config.git
  ```

2. Install peer dependencies that you need

  ```sh
    npx install-eslint-deps
  ```

  Options:
  * `--no-save` - not install, only write package.json and package-lock.json files
  * `--ts` - install typescript packages (eslint plugin, parser)
  * `--react` - install react packages (eslint airbnb config, plugins)
  * `--jest` - install jest packages (eslint plugin)

3. Add config to your `.eslintrc.json`

  ```json
  {
    "extends": ["@v131v"]
  }
  ```

  You can add configs what you need (base config must be the first):

  ```json
  {
    "extends": [
      "@v131v",
      "@v131v/eslint-config/jest"
      "@v131v/eslint-config/react",
      "@v131v/eslint-config/typescript"
    ]
  }
  ```
