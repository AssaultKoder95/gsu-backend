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
function getAllTasks(_a) {
    return __awaiter(this, arguments, void 0, function* ({ id, skip, limit }) {
        const tasks = [];
        if (id) {
            const task = yield task_1.default.findById(id);
            if (!task)
                throw new Error("Task not found");
            tasks.push(task);
        }
        if (skip && limit) {
            const skipParam = parseInt(skip, 10);
            const limitParam = parseInt(limit, 10);
            const result = yield task_1.default.find()
                .sort({ createdAt: -1 })
                .skip(skipParam)
                .limit(limitParam);
            if (result !== null) {
                tasks.push(...result);
            }
        }
        else {
            const result = yield task_1.default.find().sort({ createdAt: -1 });
            if (result !== null) {
                tasks.push(...result);
            }
        }
        if (tasks.length === 0)
            return [];
        return tasks.map((task) => {
            return {
                id: task._id,
                title: task.title,
                description: task.description,
                status: task.status,
                createdAt: task.createdAt,
                updatedAt: task.updatedAt,
            };
        });
    });
}
exports.default = getAllTasks;
