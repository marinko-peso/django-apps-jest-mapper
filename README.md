# Django Apps Jest Mapper
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![license](https://img.shields.io/github/license/marinko-peso/django-apps-jest-mapper.svg)](https://github.com/marinko-peso/django-apps-jest-mapper/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)
[![package version](https://img.shields.io/npm/v/django-apps-jest-mapper.svg)](https://npm.im/django-apps-jest-mapper)
[![install size](https://packagephobia.now.sh/badge?p=django-apps-jest-mapper)](https://packagephobia.now.sh/result?p=django-apps-jest-mapper)
[![dependecies](https://david-dm.org/marinko-peso/django-apps-jest-mapper.svg)](https://david-dm.org/marinko-peso/django-apps-jest-mapper)
[![codecov](https://codecov.io/gh/marinko-peso/django-apps-jest-mapper/branch/master/graph/badge.svg)](https://codecov.io/gh/marinko-peso/django-apps-jest-mapper)

Automatically discovery django apps and map jest names for them.

## Why?

If you need to start using Jest combined with Webpack on a Django organized project this package can work great together with [django-apps-webpack-alias](https://npm.im/django-apps-webpack-alias). Static files are usually organized per Django app, and communication between them using relative paths can soon become messy.
This way you can generate same Webpack alias for all Django apps automatically and follow the same naming in the jest configuration.


## Install

```ssh
npm i -D django-apps-jest-mapper
```


## Running

```js
const djangoAppsMapper = require('django-apps-jest-mapper');

// in jest moduleNameMapper config just spread it (or Object.assign with other entries)
moduleNameMapper: {
    ...djangoAppsMapper({ options })
},
```

Available options:
- dir [default 'apps'] path to directory holding the apps
- prefix [default '@app:'] each app prefix, for instance for auth app it will generate ``` @app:auth ```

All mappings point to app/static/app/js directory for each app.


## License

MIT.
