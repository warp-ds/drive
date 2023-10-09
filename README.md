# drive - a UnoCSS preset

## How to contribute

If you'd like to contribute to `@warp-ds/drive`, start by reviewing the [contributing guidelines](https://github.com/warp-ds/drive/blob/main/CONTRIBUTING.md).


## Plugin API

### development

- `boolean`
- Internal use only - force preflights(resets.css + transform resets) to be excluded and no externalized classes will be processed

### usePixels

- `boolean`
- Internal use only, for use on sites that are incompatible with root REM/`font-size` changes

### externalizeClasses

- Forces classes in `externalClasses` to be removed from output

### externalClasses

- A list of CSS classes that should be removed from output


## Quick test of utility classes support

In order to generate CSS for utility classes from your terminal, run `pnpm dev` using the following instructions:

Usage: node dev.js [--cliClasses=string | -c string] [--usePixels] [--externalClasses=string] [--externalizeClasses]

Example: 
```sh
pnpm dev -c m-2
```
! Do not use `-c` when passing negative values, e.g. `pnpm dev --cliClasses='-m-2! gap-2'`

## Migration development

### checking fabric classes

1. Check out the `parity` project from warp-ds, get dependencies for the project
2. Link to the `parity` project from drive's root folder: `pnpm link ../parity`
3. Run `node checkFabricClasses.js`

## Releases

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/drive) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can install the `next` version while waiting for the stable release.


## Changelog

Detailed changes for each release can be found in the [CHANGELOG](CHANGELOG.md) file.


## License

@warp-ds/drive is available under the [Apache-2.0 software license](https://github.com/warp-ds/drive/blob/main/LICENSE).