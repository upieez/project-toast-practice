import React from "react";
import useEscapeKey from "../../useEscapeKey";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [text, setText] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleVariantChange(event) {
    setVariant(event.target.value);
  }

  function handlAddToast(event) {
    event.preventDefault();
    setToasts([...toasts, { text, variant, id: crypto.randomUUID() }]);
    setText("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  function handleRemoveToast(id) {
    setToasts(toasts.filter((toasts) => toasts.id !== id));
  }

  useEscapeKey(() => {
    setToasts([]);
  });

  const value = {
    text,
    variant,
    toasts,
    handleTextChange,
    handleVariantChange,
    handlAddToast,
    handleRemoveToast,
    useEscapeKey,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
