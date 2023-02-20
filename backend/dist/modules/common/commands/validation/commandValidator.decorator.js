"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandValidator = void 0;
require("reflect-metadata");
const constants_1 = require("../constants");
const CommandValidator = (command) => {
    return (target) => {
        Reflect.defineMetadata(constants_1.COMMAND_VALIDATOR_METADATA, command, target);
    };
};
exports.CommandValidator = CommandValidator;
//# sourceMappingURL=commandValidator.decorator.js.map