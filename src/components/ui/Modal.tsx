import { useEffect, type ReactNode } from "react";

import clsx from "clsx";
import { X } from "lucide-react";

import Button from "./Button";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
  type?: boolean;
  showCloseButton?: boolean;
};

export default function Modal({
  onClose,
  children,
  type = false,
  className = "",
  showCloseButton = true,
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4",
        type && "md:justify-end-safe"
      )}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative bg-white rounded-lg shadow-lg p-6 ${className}`}
      >
        {showCloseButton && (
          <Button
            variant="outline"
            className="absolute top-3 right-3 !p-0"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
        {children}
      </div>
    </div>
  );
}
