import { useEffect, useState } from "react";
import Select from "react-select";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();
  //console.log(selected);

  useEffect(() => {
    const key = title === "Fuel Type" ? "fuel" : "year"; //urle eklenecek parametreyi belirleme

    if (selected?.value) {
      params.set(key, selected.value.toLowerCase());
    } else {
      params.delete(key);
    }

    setParams(params);
  }, [selected]);
  return (
    <div>
      <Select
        onChange={(e) => setSelected(e)}
        options={options}
        placeholder={title}
        className="min-w-[120px] text-black"
      />
    </div>
  );
};

export default CustomFilter;
