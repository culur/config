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
            type: 'text',
            name: 'directory',
            initial: 'src',
            message: `Input directory:`,
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
