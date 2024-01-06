import axios from "axios";
import { alertError, alertSuccess } from "../utils/feedback";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;

export const addEnterprise = async (data) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/v1/enterprise/insert`, {
      ...data,
    });

    if (res.data && res.status == 200) {
      alertSuccess("Entreprise créée avec succès !");
    }
  } catch (err) {
    console.log({ err });
    if (err && err.response && err.response.data && err.response.data.error) {
      return alertError(err.response.data.message);
    }
  }
};
