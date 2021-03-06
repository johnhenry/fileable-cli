const { execSync } = require('child_process');
const { join } = require('path');
const renderFS = (file, { template_context, folder_context }, input) => execSync(`npm run fileable -- build ${join(template_context, file)} ${folder_context} ${input ? `--input ${join(template_context, input)} `: ''}--no-test`);

const tester = require('../node_modules/fileable/test/tester.js');

const templateFile00 = 'file.00.jsx';
const templateFolder00 = 'folder.00.jsx';
const templateClear00 = 'clear.00.jsx';
const templateClear01 = 'clear.01.jsx';
const templateClear02 = 'clear.02.jsx';
const templateInput00 = 'input.00.jsx';

const input00 = '../inputs/00.js';

const templateFileValidation00 = require('../node_modules/fileable/test/validation/file.00.js');
const templateFolderValidation00 = require('../node_modules/fileable/test/validation/folder.00.js');
const templateClearValidation00 = require('../node_modules/fileable/test/validation/clear.00.js');
const templateClearValidation01 = require('../node_modules/fileable/test/validation/clear.01.js');
const templateClearValidation02 = require('../node_modules/fileable/test/validation/clear.02.js');
const templateInputValidation00 = require('../node_modules/fileable/test/validation/input.00.js');


const folder_context = './dist/temp';
const renderOptions = {
    folder_context,
    template_context: './node_modules/fileable/test/template'
};
const testafileOptions = {
    message: 'it should generate a given file tree'
};

tester('cli test: build file 00'
    , folder_context
    , async () => await renderFS(templateFile00, renderOptions)
    , templateFileValidation00
    , testafileOptions);

tester('cli test: build folder 00'
    , folder_context
    , async () => await renderFS(templateFolder00, renderOptions)
    , templateFolderValidation00
    , testafileOptions);

tester('cli test: build clear 00'
    , folder_context
    , async () => await renderFS(templateClear00, renderOptions)
    , templateClearValidation00
    , testafileOptions);

tester('cli test: build clear 01'
    , folder_context
    , async () => await renderFS(templateClear01, renderOptions)
    , templateClearValidation01
    , testafileOptions);

tester('cli test: build clear 02'
    , folder_context
    , async () => await renderFS(templateClear02, renderOptions)
    , templateClearValidation02
    , testafileOptions);

tester('cli test: build w/input 00'
    , folder_context
    , async () => await renderFS(templateInput00, renderOptions, input00)
    , templateInputValidation00
    , testafileOptions);
