import { TSESLint } from '@typescript-eslint/utils';
import SuggestSpelling from './suggest-spelling';

const plugin: TSESLint.FlatConfig.Plugin = {
    rules: {
        'suggest-spelling': SuggestSpelling
    }
};

export default plugin;
