import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["todo", "inprogress", "complete", "backlog", "blocked"],
      default: "todo",
    },
  },
  { timestamps: true },
);

TaskSchema.index({ title: "text" });
TaskSchema.index({ status: "text" });

export default mongoose.model<ITask>("Task", TaskSchema);
