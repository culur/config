import { Command } from 'commander';
import prompts from 'prompts';
import fse from 'fs-extra';
import lodash from 'lodash';

export const setup = new Command('setup');

setup.action(async () => {
    const response = await prompts([
        {
            type: 'text',
            name: '',
        },
    ]);

    // const data = await fse.readJson('./package.json', { throws: false });
    // console.log(data);

    var unsorted = { c: 'crane', b: 'boy', a: 'ant' };
    var sorted = lodash(unsorted).toPairs().sortBy(0).fromPairs().value();

    console.log(sorted);
});
