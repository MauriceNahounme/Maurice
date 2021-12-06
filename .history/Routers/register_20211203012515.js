/* eslint-env node, es6 */

const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

module.exports = async() => {
    const contenu = await readFileAsync('C:\Users\Etudiant/Desktop/Maurice/register.html', encoding = 'UTF-8');

    return contenu;
};