import { carData, mercedesCar, vinfastCars } from "../utils/data.js";

export const getVehicles = (req, res) => {
  res.status(200).json({
    carData,
    message: "success",
  });
};
export const getVehicleById = () => {
  console.log("getVehicleById");
};

export const filterMerVehicle = (req, res) => {
  const queries = req.query; // Get query parameters
  if (!queries.group || !queries.subgroup || !queries.filter) {
    return res.status(400).json({
      type: "reset",
      message: "Please provide at least one query parameter",
    });
  }

  const filteredData = mercedesCar.filter((car) => {
    // Apply filters based on 'group' query
    if (queries.group && queries.group !== "all") {
      if (
        queries.group !== "amg" &&
        queries.group !== "maybach" &&
        queries.group !== "all"
      ) {
        return res.status(404).json({
          type: "reset",
          message: "group not found",
        });
      }
      if (car.group !== queries.group) {
        return false;
      }
    }

    // Apply filters based on 'subgroup' query
    if (queries.subgroup && queries.subgroup !== "all") {
      if (
        queries.subgroup !== "sedan" &&
        queries.subgroup !== "suv" &&
        queries.subgroup !== "all"
      ) {
        return res.status(404).json({
          type: "reset",
          message: "subgroup not found",
        });
      }
      if (car.type !== queries.subgroup) {
        return false;
      }
    }

    // Apply filters based on 'filter' query
    if (queries.filter && queries.filter !== "all") {
      if (queries.filter !== "electric" && queries.filter !== "all") {
        return res.status(404).json({
          type: "reset",
          message: "fuel not found",
        });
      }
      if (queries.filter === "electric" && !car.isElectric) {
        return false;
      }
    }

    return true; // Car matches all filters
  });

  res.status(200).json({
    filteredData,
    message: "success",
  });
};

export const filterVinVehicle = (req, res) => {
  const queries = req.query; // Get query parameters
  if (!queries.subgroup || !queries.filter) {
    return res.status(400).json({
      type: "reset",
      message: "Please provide at least one query parameter",
    });
  }

  const filteredData = vinfastCars.filter((car) => {
    // Apply filters based on 'subgroup' query
    if (queries.subgroup && queries.subgroup !== "all") {
      if (
        queries.subgroup !== "sedan" &&
        queries.subgroup !== "suv" &&
        queries.subgroup !== "all"
      ) {
        return res.status(404).json({
          type: "reset",
          message: "subgroup not found",
        });
      }
      if (car.type !== queries.subgroup) {
        return false;
      }
    }

    // Apply filters based on 'filter' query
    if (queries.filter && queries.filter !== "all") {
      if (queries.filter !== "electric" && queries.filter !== "all") {
        return res.status(404).json({
          type: "reset",
          message: "fuel not found",
        });
      }
      if (queries.filter === "electric" && !car.isElectric) {
        return false;
      }
    }

    return true; // Car matches all filters
  });

  res.status(200).json({
    filteredData,
    message: "success",
  });
};
