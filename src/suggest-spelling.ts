import { RuleModule } from '@typescript-eslint/utils/ts-eslint';
import { StringNode } from '@humanwhocodes/momoa';
import Typo from 'typo-js';

let cc: any;
import('change-case').then(e => cc = e);

const rule: RuleModule<'suggest-spelling'> = {
    meta: {
        messages: {
            'suggest-spelling': 'Your string contains a spelling error.'
        },
        schema: [],
        type: 'problem',
        fixable: 'code'
    },
    defaultOptions: [],
    create: context => ({
        async String(node: StringNode) {
            const { value, range } = node;

            const words = cc.split(value);

            const indexes: number[] = [];
            let i = 0;
            for (const word of words) {
                const pos = value.indexOf(word, i);
                indexes.push(pos);
                i = pos + word.length;
            }

            const typo = new Typo('en_US');
            for (let i = 0, e = words.length; i < e; i++) {
                const word = words[i];
                const index = indexes[i];
                if (typo.check(word)) {
                    // spelling is correct
                    continue;
                }

                const [suggest] = typo.suggest(word);
                const begin = range![0] + 1 + index;
                const end = begin + word.length;
                context.report({
                    messageId: 'suggest-spelling',
                    node: node as any,
                    fix: fixer => [
                        fixer.removeRange([begin, end]),
                        fixer.insertTextAfterRange([begin, begin], suggest),
                    ]
                });
            }

        }
    })
};

export default rule;