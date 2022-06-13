# eslint-config

My eslint configs with typescript, react, jest and airbnb-config

## Usage

1. Install package

  ```sh
  npm i --save-dev https://github.com/v131v/eslint-config.git
  ```

2. Install peer dependencies

  If using npm 5+:

  ```sh
  npx install-peerdeps --dev 
  ```

  ### OR

  If using npm < 5, this show peer dependencies:

  ```sh
  npm info https://github.com/v131v/eslint-config.git peerDependencies
  ```

  Then install them manually by `npm i --save-dev`

3. Add config to your `.eslintrc.json`

  ```json
  {
    "extends": ["@v131v"]
  }
  ```
