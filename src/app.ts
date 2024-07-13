import { handleError, handleNotFound } from './utils/default-handlers';

import cors from 'cors';
import Express from 'express';
import { appRouter } from './routers';

const app = Express();

app.use(cors());
app.use(Express.json());

// Route handlers
app.use(appRouter);

// Catch 404 and forward to error handler
app.use(handleNotFound);

// Error handler
app.use(handleError);

export default app;
