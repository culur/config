import { green } from 'chalk';
import { Command } from 'commander';
import prompts from 'prompts';

export const setup = new Command('setup');

setup.action(async () => {
    console.log(
        `Initial your ${green('TypeScript')} library with ${green(
            '@culur/culur',
        )}`,
    );

    const abc = await prompts([
        {
            type: 'select',
            name: 'value',
            message: 'Root directory:',
            choices: [
                { title: 'Current working directory', value: 'current' },
                { title: 'Create a new directory', value: 'new' },
            ],
            initial: 1,
        },
    ]);

    console.log('current', process.cwd());

    const answers: { src: string; lib: string } = await prompts([
        {
            type: 'text',
            name: 'src',
            initial: 'src',
            message: `Input directory:`,
        },
        {
            type: 'text',
            name: 'lib',
            initial: 'lib',
            message: `Output directory:`,
        },
    ]);

    console.log(answers);
});
