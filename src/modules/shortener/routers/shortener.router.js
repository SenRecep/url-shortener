import express from "express";
import {
  getRequest,
  postRequest,
} from "../controllers/shortener.controller.js";
import MiddlewareFacade from "../../../middlewares/middlewareFacade.js";
const router = express.Router();

router.route("/").post(MiddlewareFacade.urlValidatorMiddleware, postRequest);

router
  .route("/:code")
  .get(MiddlewareFacade.codeValidatorMiddleware, getRequest);

export default router;
