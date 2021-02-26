import { Command } from 'commander';
import pkg from '../package.json';
import { setup } from './setup';

const program = new Command();

program.version(pkg.version, '-v, --version');
program.action(() => {
    console.log(program.helpInformation());
});
program.addCommand(setup);

program.parse(process.argv);
