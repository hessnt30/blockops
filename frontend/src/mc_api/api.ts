"use server";

import "axios";
import axios from "axios";

export const startServer = async () => {
  try {
    await axios.post("http://10.0.0.198:5000/server/action/start");
  } catch (e) {
    console.error("Failed to start server", e);
  }
};

export const stopServer = async () => {
  try {
    await axios.post("http://10.0.0.198:5000/server/action/stop");
  } catch (e) {
    console.error("Failed to stop server", e);
  }
};

export const checkHealth = async () => {
  try {
    await axios.get("http://10.0.0.198:5000/check/health").then((result) => {
      return result;
    });
  } catch (e) {
    console.error("Failed to get health report", e);
  }
};

export const checkStatus = async () => {
  try {
    await axios.get("http://10.0.0.198:5000/check/status").then((result) => {
      return result;
    });
  } catch (e) {
    console.error("Failed to check status");
  }
};
