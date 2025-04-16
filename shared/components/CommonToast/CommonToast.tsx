import toast from "react-hot-toast";
import { SC } from "./CommonToast.styles";

type Props = {
  message: string;
  title: string;
  toastId: string;
};

export const CommonToast = ({ message, title, toastId }: Props) => {
  return (
    <SC.Container>
      <SC.Title>{title}</SC.Title>
      <SC.Message>{message}</SC.Message>
      <SC.DismissButton onClick={() => toast.dismiss(toastId)} />
    </SC.Container>
  );
};
