export const command = 'template <path>';
export const describe = 'Create template from file tree';
export const builder = {
    interactive: {
        type: 'boolean',
        default: false,
        desc: 'Create template interactively'
    },
    binary: {
        type: 'string',
        default: true,
        desc: 'Algroithm used to handle binary files [auto|ask|base64|src|raw|skip]'
    }
};
export const handler = async ({ path, interactive }) => {
    console.log('NOT IMPLEMENTED!!!');
};
