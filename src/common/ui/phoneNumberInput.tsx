import { useState, type FC } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IPhoneNumberInputProps {
  collectorPhoneValue: (value: string) => void;
  error?: boolean;
}

const PhoneNumberInput: FC<IPhoneNumberInputProps> = ({
  collectorPhoneValue,
  error,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const onBlurCollectorValue = () => {
    collectorPhoneValue(phoneNumber);
  };

  return (
    <div>
      <PhoneInput
        inputClass={`w-full outline-none border_solid placeholder:text-black placeholder:opacity-40 ${error ? "!border-[red]" : "!border-black"}`}
        placeholder="+"
        alwaysDefaultMask={true}
        onBlur={onBlurCollectorValue}
        prefix="+"
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber(phone)}
      />
    </div>
  );
};

export default PhoneNumberInput;
