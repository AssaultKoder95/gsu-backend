"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
  console.error(err.message);
  if (err.message === "Task not found") {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(500).json({ error: err.message || "Something went wrong" });
}
