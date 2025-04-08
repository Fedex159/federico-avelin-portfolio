import toast from "react-hot-toast";
import { CommonToast } from "../components";

type ToastProps = {
  message: string;
  title: string;
};

export const successToast = ({ message, title }: ToastProps) => {
  const toastId = toast.success(
    () => <CommonToast message={message} title={title} toastId={toastId} />,
    {
      className: "bg-green-700! text-white! min-w-2xs justify-start",
      iconTheme: {
        primary: "white",
        secondary: "var(--color-green-700)",
      },
    },
  );
};

export const errorToast = ({ message, title }: ToastProps) => {
  const toastId = toast.error(
    () => <CommonToast message={message} title={title} toastId={toastId} />,
    {
      className: "bg-red-500! text-white! min-w-2xs justify-start",
      iconTheme: {
        primary: "white",
        secondary: "var(--color-red-500)",
      },
    },
  );
};
