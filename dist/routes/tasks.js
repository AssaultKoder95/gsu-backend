"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController = __importStar(require("../task"));
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post("/", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { error } = (0, validators_1.validateTask)(req.body);
      if (error) throw new Error(error.details[0].message);
      const newTask = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
      };
      const task = yield taskController.createTask(newTask);
      return res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }),
);
router.get("/search", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const searchTerm = req.query.q;
      const tasks = yield taskController.searchTasks(searchTerm);
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }),
);
router.get("/filter", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const status = req.query.status;
      const { error } = (0, validators_1.validateStatus)({ status });
      if (error) throw new Error(error.details[0].message);
      const tasks = yield taskController.filterTasks({ status });
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }),
);
router.get("/", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const skip = req.query.skip;
      const limit = req.query.limit;
      const tasks = yield taskController.getAllTasks({ skip, limit });
      return res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }),
);
router.get("/:id", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const task = yield taskController.getAllTasks({ id: req.params.id });
      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }),
);
router.put("/:id", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { error } = (0, validators_1.validateTaskUpdate)(req.body);
      if (error) throw new Error(error.details[0].message);
      const foundTask = yield taskController.getAllTasks({ id: req.params.id });
      if (!foundTask.length) {
        throw new Error("Task not found");
      }
      const taskToUpdate = {
        title: req.body.title || foundTask[0].title,
        description: req.body.description || foundTask[0].description,
        status: req.body.status || foundTask[0].status,
      };
      const task = yield taskController.updateTask(req.params.id, taskToUpdate);
      return res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }),
);
router.delete("/:id", (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield taskController.deleteTask(req.params.id);
      return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      next(error);
    }
  }),
);
exports.default = router;
