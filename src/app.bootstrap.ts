//=|*Imports*|=//
import express from "express";
import { apiRouter } from "./routes/api.router";


//=|*Input*|=//
const app = express();


//=|*Routes*|=//
app.use(apiRouter);

//=|*Exports*|=//=>server.ts
export {app}
