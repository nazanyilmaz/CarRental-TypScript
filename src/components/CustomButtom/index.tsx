import { ButtonProps } from "../../types";

const CustomButtom = ({
  title,
  btnType,
  designs,
  rIcon,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn bg-[#2B59FF] rounded-full hover:bg-blue-800 transition-colors  ${designs}`}
    >
      <span>{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6 ">
          {" "}
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButtom;
