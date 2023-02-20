"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncEventDispatcher = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
let SyncEventDispatcher = class SyncEventDispatcher {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    publish(event) {
        this.eventBus.publish(event);
        const eb = this.eventBus;
        return new Promise(resolve => {
            eb.publish(event);
        });
    }
    register(handlers) {
        this.eventBus.register(handlers);
    }
};
SyncEventDispatcher = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.EventBus !== "undefined" && cqrs_1.EventBus) === "function" ? _a : Object])
], SyncEventDispatcher);
exports.SyncEventDispatcher = SyncEventDispatcher;
//# sourceMappingURL=syncEventDispatcher.js.map