import express from "express";
import submitContoller from "@/controller/submit-controller";
import runContoller from "@controller/run-controller";

const apiRouter = express.Router();

apiRouter.post("/submission", submitContoller);
apiRouter.post("/run", runContoller);

export default apiRouter;
