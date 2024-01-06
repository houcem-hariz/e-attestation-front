import toast, { toastConfig } from "react-simple-toasts";

export const alertError = (message) => {
  toastConfig({ theme: "failure" });
  toast(message, { className: "toast-error" });
};

export const alertSuccess = (message) => {
  toastConfig({ theme: "success" });
  toast(message, { className: "toast-success" });
};
