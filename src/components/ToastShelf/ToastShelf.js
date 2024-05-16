import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf({ toasts, handleClose }) {
  const { handleDismissAll } = React.useContext(ToastContext);
  React.useEffect(() => {
    document.addEventListener("keydown", handleDismissAll);
  }, [handleDismissAll]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            handleClose={() => {
              handleClose(toast.id);
            }}
          >
            {toast.text}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
