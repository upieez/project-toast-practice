import React from "react";

export default function useEscapeKey(handler) {
  React.useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") handler();
    });
  }, [handler]);
}
