# drive - an UnoCSS preset

## use

## plugin API

### development

- `boolean`
- Internal use only - force preflights to be excluded and no externalized classes will be processed

### usePixels

- `boolean`
- Internal use only, for use on sites that are incompatible with root REM/`font-size` changes

## migration development

## checking fabric classes

1. Check out the `parity` project from warp-ds, get dependencies for the project
2. Link to the `parity` project from the `plugin` folder (this folder): `pnpm link ../parity`
3. Run `node checkFabricClasses.js`

## generating warp classes using command line

Run `node dev.js` or `pnpm dev`

Usage: node dev.js [-c <string> | --cliClasses=<string>] [--usePixels] [--development] [--externalClasses] [--externalizeClasses] [--usePreflight]

Example: `node dev.js --usePixels --development --cliClasses=m-2`
! Do not use shortcut when passing negative values, e.g. `node dev.js --cliClasses='-m-2! gap-2'`

## Contributing

We use [commitizen](https://github.com/commitizen/cz-cli) to ensure coherent commit message structure, used by [semantic release](#releases) to generate change logs and handle versioning.

```
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes (replacing
`git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)


## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate package
publishing when making changes to the `master` or `alpha` branch.

It is recommended to branch off the `alpha` branch and follow
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) when making changes. When your
changes are ready for pull request, this should be opened against the `alpha` branch.

Please note that the version published will depend on your commit message structure. Make sure to use commitizen (see [Development section](#Contributing)).