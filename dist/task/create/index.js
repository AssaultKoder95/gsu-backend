"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../../models/task"));
function createTask(requestBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const task = new task_1.default(requestBody);
        const result = yield task.save();
        const response = result.toObject();
        return {
            id: task._id,
            title: response.title,
            description: response.description,
            status: response.status,
            createdAt: response.createdAt,
            updatedAt: response.updatedAt,
        };
    });
}
exports.default = createTask;
