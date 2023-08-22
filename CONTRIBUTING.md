# Contributing to @warp-ds/drive

Welcome to the [@warp-ds/drive](https://github.com/warp-ds/drive) repository!
We're glad you're interested in contributing.

This repository is mastertained by the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team)
and is home to a UnoCSS plugin which defines rules, theme, preflights and other settings used for generating styles within the
[Warp Design System](https://github.com/warp-ds/).

To get an overview of the project, read the [README](README.md).


## Development Setup

To get started with developing [@warp-ds/drive](https://github.com/warp-ds/drive), follow the instructions below.
This will walk you through setting up your development environment and running the tests.


### Cloning the repository

Start by cloning the repository to your dev environment by running:

```sh
git clone https://github.com/warp-ds/drive
```


### pnpm

We use [pnpm](https://pnpm.io/) as package manager for Node.js.
Install it by running:

```sh
npm install -g pnpm
```


### Dependencies

Install dependencies by running:

```sh
pnpm install
```


### Run the plugin

You can use the plugin from your teminal to generate CSS for utility classes.
Run `pnpm dev` using the following instructions:

Usage: node dev.js [--cliClasses=string | -c string] [--usePixels] [--externalClasses=string] [--externalizeClasses]

Example: 
```sh
pnpm dev -c m-2
```

! Do not use `-c` when passing negative values, e.g. `pnpm dev --cliClasses='-m-2! gap-2'`

## Contributing

### Branching

There are two branches to keep in mind:
- `next` : used for pre-releases.
- `master` : the master branch, used for stable releases.

When adding a new feature, fixing a bug, or adding to the repository in any other way,
you should always do this in a feature branch that is branched off the `next` branch.

### Committing

It is important to follow [Conventional Commits](https://www.conventionalcommits.org/) when making changes ([Commitizen](#commitizen) to the rescue),
as this is used in the [automated release process](#releases).

### Pull Request

When your changes are ready for pull request, this should be opened against the `next` branch.
Add the [Warp Core Team](https://github.com/orgs/warp-ds/teams/warp-core-team) as reviewer.

Pull request to the `next` branch should always be set to *squash*.
Make sure that the squash commit message follows the instructions in the [Committing](#committing) section before squash merging the pull request.

### Commitizen

We use [commitizen](https://github.com/commitizen/cz-cli) to ensure coherent commit message structure.
This is used to automatically generate change logs and handle versioning when [releasing](#releases).

```sh
npm install -g commitizen
```

When installed, you should be able to type `cz` or `git cz` in your terminal to commit your changes (replacing
`git commit`).

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)


## Releases

This project uses [Semantic Release](https://github.com/semantic-release/semantic-release) to automate package
publishing when making changes to the `master` or `next` branch.

Please note that the version published will depend on your commit message structure.
Make sure to review and follow the instructions in the [Committing](#committing) section before committing.

This project is continuously published to [NPM](https://www.npmjs.com/package/@warp-ds/drive) using a `next` tag (e.g. `1.1.0-next.1`).
Anyone needing to use the latest changes of this package can install the `next` version while waiting for the stable release.

A stable release from the `master` branch is basically done by just opening a pull request from `next` to `master` and then making sure to *merge* commit the pull request.
NEVER SQUASH-MERGE TO `master` to prevent losing history and commit messages from all commits to `next`.

To avoid git history divergence between `next` and `master`,
when a stable release from `master` results in a semantic-release-bot commit being pushed to `master`,
a GitHub action automatically rebases `next` to `origin/master` after every release from `master`.

( For reference, see this rfc in Fabric-ds: [RFC: Fabric Releases and Release Schedule](https://github.com/fabric-ds/issues/blob/779d59723993c13d62374516259602d967da56ca/rfcs/0004-releases.md) )

## License

@warp-ds/drive is [Apache-2.0 licensed](https://github.com/warp-ds/react/blob/master/LICENSE).
By contributing to @warp-ds/react, you agree that your contributions will be licensed under its Apache-2.0 license.