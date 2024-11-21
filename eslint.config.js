
const { default: spellchecker } = require('./dist');
const { default: json } = require('@eslint/json');

module.exports = [
    {
        plugins: {
            json,
            'spellchecker': spellchecker,
        }
    }, {
        files: ['sample.json'],
        language: 'json/json',
        rules: {
            'spellchecker/suggest-spelling': 'warn'
        }
    }
]