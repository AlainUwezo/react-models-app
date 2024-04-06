import { FunctionComponent } from "react";

interface Props {
  label: string;
  classNames?: string;
}

const Button: FunctionComponent<Props> = ({ label, classNames }) => {
  return (
    <button className={`${classNames} rounded-full pt-3 pb-4 px-6`}>
      {label}
    </button>
  );
};

export default Button;
