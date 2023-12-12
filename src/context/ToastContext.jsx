import PropTypes from "prop-types";

import { createContext, useMemo, useState } from "react";
import Toast from "../components/Toast";

export const ToastContext = createContext(null);

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const openToast = (message) => {
    const newToast = {
      id: Date.now(),
      message,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);
  };

  const closeToast = (id) => {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id)
    );
  };

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    []
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div className="toasts">
        {toasts &&
          toasts.map((toast, index) => {
            return (
              <Toast
                key={index}
                message={toast.message}
                close={() => closeToast(toast.id)}
              />
            );
          })}
      </div>
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
