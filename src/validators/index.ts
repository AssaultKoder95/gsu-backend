import Joi from "joi";

export const validateTask = (task: any) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    description: Joi.string().max(500).optional(),
    status: Joi.string()
      .valid("todo", "inprogress", "complete", "backlog", "blocked")
      .required(),
  });

  return schema.validate(task);
};

export const validateTaskUpdate = (task: any) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(50).optional(),
    description: Joi.string().max(500).optional(),
    status: Joi.string()
      .valid("todo", "inprogress", "complete", "backlog", "blocked")
      .optional(),
  });

  return schema.validate(task);
};

export const validateStatus = (task: any) => {
  const schema = Joi.object({
    status: Joi.string()
      .valid("todo", "inprogress", "complete", "backlog", "blocked")
      .required(),
  });

  return schema.validate(task);
};
