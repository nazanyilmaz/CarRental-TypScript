import CarInfo from "./CarInfo";
import CustomButtom from "../CustomButtom";
import { motion } from "framer-motion";
import { useState } from "react";
import DetailModel from "./DetailModel";
import { CarType } from "../../types";
import { generateImage } from "../../utils";

type CarProps = {
  car: CarType;
};
const Card = ({ car }: CarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      <p className="flex mt-6 text-[32px]">
        <span className="text-[19px] font-bold">$</span>
        {Math.round(Math.random() * 400) + 70}
        <span className="text-[14px] self-end font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative w-full flex mt-2 ">
        <div className="group-hover:invisible flex justify-between w-full mt-2 text-gray ">
          <CarInfo title={"otomotik"} icon="/public/steering-wheel.svg" />
          <CarInfo title="RWD" icon="/public/tire.svg" />
          <CarInfo title="MPG" icon="/public/gas.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButtom
            handleClick={() => setIsOpen(true)}
            title="More"
            designs="w-full py-[16px] text-white font-bold text-[24px]"
            rIcon="/public/right-arrow.svg"
          />
        </div>
      </div>
      <DetailModel
        car={car}
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
