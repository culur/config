"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = void 0;

var _chalk = require("chalk");

var _commander = require("commander");

var _prompts = _interopRequireDefault(require("prompts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setup = new _commander.Command('setup');
exports.setup = setup;
setup.action(async () => {
  console.log(`Initial your ${(0, _chalk.green)('TypeScript')} library with ${(0, _chalk.green)('@culur/culur')}`);
  console.log('current', process.cwd());
  const answers = await (0, _prompts.default)([{
    type: 'text',
    name: 'src',
    initial: 'src',
    message: `Input directory:`
  }, {
    type: 'text',
    name: 'lib',
    initial: 'lib',
    message: `Output directory:`
  }]);
  console.log(answers);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXR1cC50cyJdLCJuYW1lcyI6WyJzZXR1cCIsIkNvbW1hbmQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImN3ZCIsImFuc3dlcnMiLCJ0eXBlIiwibmFtZSIsImluaXRpYWwiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsa0JBQUosQ0FBWSxPQUFaLENBQWQ7O0FBRVBELEtBQUssQ0FBQ0UsTUFBTixDQUFhLFlBQVk7QUFDckJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNLLGdCQUFlLGtCQUFNLFlBQU4sQ0FBb0IsaUJBQWdCLGtCQUNoRCxjQURnRCxDQUVsRCxFQUhOO0FBTUFELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJDLE9BQU8sQ0FBQ0MsR0FBUixFQUF2QjtBQUVBLFFBQU1DLE9BQXFDLEdBQUcsTUFBTSxzQkFBUSxDQUN4RDtBQUNJQyxJQUFBQSxJQUFJLEVBQUUsTUFEVjtBQUVJQyxJQUFBQSxJQUFJLEVBQUUsS0FGVjtBQUdJQyxJQUFBQSxPQUFPLEVBQUUsS0FIYjtBQUlJQyxJQUFBQSxPQUFPLEVBQUc7QUFKZCxHQUR3RCxFQU94RDtBQUNJSCxJQUFBQSxJQUFJLEVBQUUsTUFEVjtBQUVJQyxJQUFBQSxJQUFJLEVBQUUsS0FGVjtBQUdJQyxJQUFBQSxPQUFPLEVBQUUsS0FIYjtBQUlJQyxJQUFBQSxPQUFPLEVBQUc7QUFKZCxHQVB3RCxDQUFSLENBQXBEO0FBZUFSLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxPQUFaO0FBQ0gsQ0F6QkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmVlbiB9IGZyb20gJ2NoYWxrJztcclxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ2NvbW1hbmRlcic7XHJcbmltcG9ydCBwcm9tcHRzIGZyb20gJ3Byb21wdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHVwID0gbmV3IENvbW1hbmQoJ3NldHVwJyk7XHJcblxyXG5zZXR1cC5hY3Rpb24oYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYEluaXRpYWwgeW91ciAke2dyZWVuKCdUeXBlU2NyaXB0Jyl9IGxpYnJhcnkgd2l0aCAke2dyZWVuKFxyXG4gICAgICAgICAgICAnQGN1bHVyL2N1bHVyJyxcclxuICAgICAgICApfWAsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50JywgcHJvY2Vzcy5jd2QoKSk7XHJcblxyXG4gICAgY29uc3QgYW5zd2VyczogeyBzcmM6IHN0cmluZzsgbGliOiBzdHJpbmcgfSA9IGF3YWl0IHByb21wdHMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc3JjJyxcclxuICAgICAgICAgICAgaW5pdGlhbDogJ3NyYycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBJbnB1dCBkaXJlY3Rvcnk6YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbGliJyxcclxuICAgICAgICAgICAgaW5pdGlhbDogJ2xpYicsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBPdXRwdXQgZGlyZWN0b3J5OmAsXHJcbiAgICAgICAgfSxcclxuICAgIF0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xyXG59KTtcclxuIl19