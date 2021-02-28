"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const commander_1 = require("commander");
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const setup_1 = require("./setup");
const program = new commander_1.Command();
program.version(package_json_1.default.version, '-v, --version');
program.action(() => {
    console.log(program.helpInformation());
});
program.addCommand(setup_1.setup);
program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQW9DO0FBQ3BDLDJFQUFrQztBQUNsQyxtQ0FBZ0M7QUFFaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxtQkFBTyxFQUFFLENBQUM7QUFFOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxzQkFBRyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM5QyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFLLENBQUMsQ0FBQztBQUUxQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9