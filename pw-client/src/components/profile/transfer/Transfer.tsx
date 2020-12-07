import TransferForm from "../../forms/transfer/TransferForm";
import s from "./Transfer.module.scss";

interface TransferProps {
  onTransfer: () => void;
  getUsers: () => void;
}

const Transfer = ({ onTransfer, getUsers }: TransferProps) => {
  const onSubmit = (formData: any) => {
    console.log(formData);
    onTransfer();
  };

  return (
    <div>
      <TransferForm onSubmit={onSubmit}></TransferForm>
    </div>
  );
};

export default Transfer;
