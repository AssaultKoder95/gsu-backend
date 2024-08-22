import { Request, Response, NextFunction } from 'express';

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err.message);

    if (err.message === 'Task not found') {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.status(500).json({ error: err.message || 'Something went wrong' });
}
