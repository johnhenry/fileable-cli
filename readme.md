

![fileable logo](./static/docs/logo.png)

# Fileable-CLI

Render a file tree using a JSX template.

For the embeddable-library, see [fileable](https://github.com/johnhenry/fileable).


## Basic Usage without insallation

```sh
npx fileable-cli build ./path/to/template.jsx ./destination
```

## Installation

```sh
npm install --global fileable-cli
```

## Usage


## Basic Usage

```sh
fileable build ./path/to/template.jsx ./destination
```

### Templates Files

See [fileable](https://github.com/johnhenry/fileable) for a basick explanation of template files.

### Commands

##### --help

Try `fileable --help` to  see options

#### fileable build

Build a file tree from template into destination directory.

```sh
fileable build <template> <destination>
```

```sh
fileable build ./path/to/template.jsx ./destination
```

Local files or remote files (beginning with 'http://', 'https://', or 'ftp://') can be used as template and input files.

```sh
fileable build https://raw.githubusercontent.com/johnhenry/fileable/master/test/template/file.00.jsx ./destination
```

[fileable-component-file](https://github.com/johnhenry/fileable-component-file), [fileable-component-folder](https://github.com/johnhenry/fileable-component-folder) , and [fileable-component-clear](https://github.com/johnhenry/fileable-component-clear) components are included with fileable-cli by default. Other components may be installed separately.

See 'fileable install' below.


It is not necessary to install fileable-components or react when using templates. However, the references to their components must be included.

##### --test/--no-test flag

As a safety precaution, you must pass the '--no-test' flag to write to the file system. Otherwise, output will be written to the console.

```sh
fileable build ./path/to/template.jsx ./destination ./dist --no-test
```

##### --input flag

The input flag can be used to provide inputs. File must export an [asynchronous] iterator.

```sh
fileable build ./path/to/template.jsx ./destination ./dist --input async-iterator.js
```

#### fileable dependencies

List installed dependencies.
Any packages referenced within template, including components, must first be installed.

```sh
fileable dependencies
```

#### fileable install
Install NPM package.

```sh
fileable install <npm package>
```

#### fileable uninstall

Uninstall NPM package.
BE CAREFUL! UNINSTALLING PACKAGES MAY CAUSE FILEABLE-CLI TO STOP WORKING PROPERLY!!!

```sh
fileable uninstall <npm package>
```

#### fileable template

Create template from file or folder.

Note: Not yet implemented.

```sh
fileable template <folder> > template.jsx
```
## API

### Table of contents
## Todo

- remove unnecessary dependencies
- add proper typescript typeings
- included components versions in documentation
- implement 'template' sub-command
