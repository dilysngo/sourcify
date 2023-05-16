import { Router } from "express";
import { sessionVerifyFromEtherscan } from "./etherscan.session.handlers";
import { safeHandler } from "../../verification.common";

const router: Router = Router();

router
  .route(["/session/verify/etherscan"])
  .post(safeHandler(sessionVerifyFromEtherscan));

export default router;
