/**
 * Holds the properties for all the interfaces
 */
const interfaceProps = {
    atom: {
        name: 'Atom',
        type: 'editor',
        shortcuts: {
            sc1: 'Duplicate Line',
            sc2: 'Move Line',
            sc3: 'Cut Line',
            sc4: 'Delete from cursor onward',
            sc5: 'Multiple cursors',
        }
    }
};

// TODO: Change interface props to this model & all props to follow new object
// const interfaceProps = {
//     editor: {
//         names: ['Atom', 'VS Code', 'Sublime Text', 'Webstorm'],
//         type: 'editor',
//         shortcuts: {
//             sc1: 'Duplicate Line',
//             sc2: 'Move Line',
//             sc3: 'Cut Line',
//             sc4: 'Delete from cursor onward',
//             sc5: 'Multiple cursors',
//         },
//
//     },
//     browser: {
//
//     }
// };

export default interfaceProps;
