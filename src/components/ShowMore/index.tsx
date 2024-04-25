import { useSearchParams } from "react-router-dom";
import CustomButtom from "../CustomButtom";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  const limit = Number(params.get("limit")) || 5;
  //console.log(limit);

  const handleLimit = () => {
    const newLimit = limit + 5;
    params.set("limit", String(newLimit));
    setParams(params);
  };

  return (
    <div className="w-full flex-center my-10">
      {limit < 30 && (
        <CustomButtom handleClick={handleLimit} title="Show More" />
      )}
    </div>
  );
};

export default ShowMore;
