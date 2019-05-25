

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

The input flag is used to specify a file as inputs.

The input file must export an array or some other -- possibly asynchronous -- iterator.

```sh
fileable build ./path/to/template.jsx ./destination ./dist --input iterator.js
```

iterator.js
```javascript
export default ['first argumet', 'second-argument'];
```

async-iterator.js
```javascript
import { prompt } from 'node-popup';
export default (async function *{
    yield await prompt('first argumet?', 'first argumet');
    yield await prompt('second argumet?', 'second argumet');
})();
```

##### --args flag

The args flag is used to specify inputs via a comma-separated list of arguments.

To pass a string, use escaped backticks \\\`...\\\`

```sh
fileable build ./path/to/template.jsx ./destination ./dist --args \`$SOME_STRING\`,$SOME_NUMBER,{json:\`file\`}
```

#### fileable dependencies

List installed dependencies.
Any packages referenced within template, including components, must first be installed.
Packages references within files passed via --input flag must be referenced as well.

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
- implement fileable **template** to create template from directory
    ```sh
    npm run fileable template  --interactive . output.jsx
    Adding folder 'top'...
    Folder 'top' added.
    Adding file 'top/index.html'
    File 'top/index.html' added.
    Adding file 'img.png'...
    File 'img.png' appears to be a binary file. How would you like to handle this?
    >-encode file as base64
    - add as src
    - use raw data
    - skip
    Encoding 'img.png' as base 64
    File 'img.png' added
    Adding 'index.js'...
    File 'index.js' added
    Tree traversed.
    Writing 'output.jsx'
    Done.
    ```
`

- implement fileable install  **--check** to check before installing dependencies
- implement fileable build **--install** to automatically install dependencies
- implement fileable **cloud --service='asw|azure|gws'** to push to cloud
- implement fileable **compile** to turn .jsx module into .js modules
- implement variadic arguments for **fileable install** and **fileable uninstall**
- move console into this repo (not particularly useful outside)
    - use 'chalk' to color output
