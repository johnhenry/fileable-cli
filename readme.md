![fileable logo](./static/docs/logo.png)

# Fileable

Render a file tree using a JSX template.

Inspired by [React FS Renderer](https://github.com/ericvicenti/react-fs-renderer)

## API -- Template

Fileable can render [functional components](https://reactjs.org/docs/components-and-props.html) built with the following components:

### Component: React.Fragment

React.Fragment can be used to group files and folders

```javascript
import {Fragment} from 'react';
const template = ()=><>
    <File name='empty_file'/>
    <Folder name='empty_folder'/>
</>;
```

## API -- CLI

Fileable's renderer's can be used from the command line

### CLI Installation

```sh
npm install --global fileable
```

### CLI Usage

#### fileable

##### --help

Try `fileable --help` for more options

```javascript
import React, {Fragment} from 'react';
export default ()=><>...</>
```

#### fileable build

```sh
fileable build <template> <destination>
```

```sh
fileable build ./template.jsx ./dist
```

Local files or remote files (beginning with 'http://', 'https://', or 'ftp://') can be used as template and input files.

```sh
fileable build https://raw.githubusercontent.com/johnhenry/fileable/master/test/example/template.jsx here
```

It is not necessary to install fileable-components or react when using templates. However, the references to their components must be included.

```javascript
import React, { Fragment } from "react"; //React, and any used React components must be required
import { File, Clear, Folder } from 'fileable-components';// Any used fileable-components must be required
```

##### --test/--no-test flag

```sh
fileable build ./template.jsx ./dist --no-test
```

##### --input flag

```sh
fileable build ./template.jsx ./dist --no-test
```

#### fileable dependencies

#### fileable install

#### fileable uninstall

#### fileable template
## API

### Table of contents

## Todo

- Asynchronous content
- Document newline trickiness
    - inability to insert new lines easily
    - must manually add "{'\n'}" or enclose entirely witin backticks ({"``"})
- Separate docummetation fileable, fileable-components
- Eventually, get remote files working with using dynamic imports
- add "reverse-build"
- test multiple scenarious:
     - local input + remote templated
     - local input + local templated
     - remote input + remote templated
     - local input + local templated
     - no input + remote templated
     - no input + local templated
- remote template context
- extract from fileable-components -> fileable-file, fileable-folder, fileable-clear => fileable-core?
- generate included versions of components and include in documentation
