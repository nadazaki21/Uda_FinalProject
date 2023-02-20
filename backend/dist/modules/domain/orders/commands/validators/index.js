"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandValidators = void 0;
const createOrderCompositeValidator_1 = require("./forCreateOrder/createOrderCompositeValidator");
const checkProductExist_1 = require("./forCreateOrder/checkProductExist");
const checkPropertiesValue_1 = require("./forCreateOrder/checkPropertiesValue");
exports.CommandValidators = [
    checkProductExist_1.CheckProductExist,
    checkPropertiesValue_1.CheckPropertiesValue,
    createOrderCompositeValidator_1.CreateOrderCompositeValidator,
];
//# sourceMappingURL=index.js.map