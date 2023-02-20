# drive - an UnoCSS preset

## use

## plugin API

### usePreflight

- `boolean`
- Forces preflights to be included

### development

- `boolean`
- Will include preflights and base classes when true. These would be 'externalized' to Eik in production builds.

### usePixels

- `boolean`
- Internal use only, for use on sites that are incompatible with root REM/`font-size` changes

## migration development

## checking fabric classes

1. Check out the `parity` project from warp-ds, get dependencies for the project
2. Link to the `parity` project from the `plugin` folder (this folder): `pnpm link ../parity`
3. Run `node checkFabricClasses.js`
