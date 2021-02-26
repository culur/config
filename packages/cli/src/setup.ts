import { Command } from 'commander';
import prompts from 'prompts';
export const setup = new Command('setup');

setup.action(async () => {
    console.log('do something here');
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: 'How old are you?',
        validate: value => (value < 18 ? `Nightclub is 18+ only` : true),
    });

    console.log(response);
});

setup.command('jug').action(() => {
    console.log('heat jug');
});

setup.command('pot').action(() => {
    console.log('heat pot');
});
