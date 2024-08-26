import { Router } from "express";

import {
  getVehicles,
  filterMerVehicle,
  filterVinVehicle,
} from "../controllers/vehicleControllers.js";

const router = Router();

router.route("/").get(getVehicles);
router.route("/mercedes/search").get(filterMerVehicle);
router.route("/vinfast/search").get(filterVinVehicle);

export default router;
