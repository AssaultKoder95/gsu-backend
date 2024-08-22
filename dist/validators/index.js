"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStatus = exports.validateTaskUpdate = exports.validateTask = void 0;
const joi_1 = __importDefault(require("joi"));
const validateTask = (task) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string().min(1).max(50).required(),
        description: joi_1.default.string().max(500).optional(),
        status: joi_1.default.string()
            .valid("todo", "inprogress", "complete", "backlog", "blocked")
            .required(),
    });
    return schema.validate(task);
};
exports.validateTask = validateTask;
const validateTaskUpdate = (task) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string().min(1).max(50).optional(),
        description: joi_1.default.string().max(500).optional(),
        status: joi_1.default.string()
            .valid("todo", "inprogress", "complete", "backlog", "blocked")
            .optional(),
    });
    return schema.validate(task);
};
exports.validateTaskUpdate = validateTaskUpdate;
const validateStatus = (task) => {
    const schema = joi_1.default.object({
        status: joi_1.default.string()
            .valid("todo", "inprogress", "complete", "backlog", "blocked")
            .required(),
    });
    return schema.validate(task);
};
exports.validateStatus = validateStatus;
