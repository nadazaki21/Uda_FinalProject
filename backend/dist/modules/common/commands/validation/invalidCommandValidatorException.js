"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCommandValidatorException = void 0;
class InvalidCommandValidatorException extends Error {
    constructor() {
        super(`Invalid command validation exception. Define command validation using @CommandValidator() decorator`);
    }
}
exports.InvalidCommandValidatorException = InvalidCommandValidatorException;
//# sourceMappingURL=invalidCommandValidatorException.js.map