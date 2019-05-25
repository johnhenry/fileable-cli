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
