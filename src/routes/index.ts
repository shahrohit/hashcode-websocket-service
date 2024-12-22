import express from "express";
import submitContoller from "@/controller/submit-controller";
import runContoller from "@controller/run-controller";

const apiRouter = express.Router();

apiRouter.post("/submit", submitContoller);
apiRouter.post("/run", runContoller);

export default apiRouter;
