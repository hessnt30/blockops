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
    const result = await axios.get("http://10.0.0.198:5000/server/check/health");
    return result.data;
  } catch (e) {
    console.error("Failed to get health report", e);
  }
};

export const checkStatus = async () => {
  try {
    const result = await axios.get("http://10.0.0.198:5000/server/check/status");
    return result.data;
  } catch (e) {
    console.error("Failed to check status");
  }
};
