import CustomButtom from "../CustomButtom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Be free, start your journey!</h1>
        <p className="text-gray-200 hero__subtitle">
          Are you ready for an unforgettable journey with gold standart service?
          By crowning your car rental experience with Gold Options, you can You
          can make your moment special.
        </p>
        <CustomButtom title="Discover" designs="mt-10" />
      </div>

      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="../../../public/hero.png"
          className="img-fluid object-contain"
          width={800}
        />
      </div>
    </div>
  );
};

export default Hero;
