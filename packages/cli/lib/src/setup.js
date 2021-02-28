"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const tslib_1 = require("tslib");
const chalk_1 = require("chalk");
const commander_1 = require("commander");
const prompts_1 = tslib_1.__importDefault(require("prompts"));
exports.setup = new commander_1.Command('setup');
exports.setup.action(async () => {
    console.log(`Initial your ${chalk_1.green('TypeScript')} library with ${chalk_1.green('@culur/culur')}`);
    console.log('current', process.cwd());
    const answers = await prompts_1.default([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2V0dXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlDQUE4QjtBQUM5Qix5Q0FBb0M7QUFDcEMsOERBQThCO0FBRWpCLFFBQUEsS0FBSyxHQUFHLElBQUksbUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUxQyxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQ1AsZ0JBQWdCLGFBQUssQ0FBQyxZQUFZLENBQUMsaUJBQWlCLGFBQUssQ0FDckQsY0FBYyxDQUNqQixFQUFFLENBQ04sQ0FBQztJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRXRDLE1BQU0sT0FBTyxHQUFpQyxNQUFNLGlCQUFPLENBQUM7UUFDeEQ7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsa0JBQWtCO1NBQzlCO1FBQ0Q7WUFDSSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxLQUFLO1lBQ1gsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsbUJBQW1CO1NBQy9CO0tBQ0osQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQyJ9