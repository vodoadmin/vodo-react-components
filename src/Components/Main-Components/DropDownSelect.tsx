import React, { useState } from "react";
import Select from "react-tailwindcss-select";
interface DropDownSelectProps {
  label?: string;
  placeHolder?: string;
  handleChange: any;
  options: any;
  isDisabled?: boolean;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onSearchInputChange: any;
  labelKey: string;
  valueKey: string;
}
const DropDownSelect = ({
  label,
  placeHolder,
  handleChange,
  options,
  isDisabled,
  loading,
  onSearchInputChange,
  searchInputPlaceholder,
  labelKey,
  valueKey,
}: DropDownSelectProps) => {
  const [value, setValue] = useState(null);

  const handleChoose = (value: any) => {
    setValue(value);
    handleChange(value);
  };
  const mappedOptions = options.map((option: any) => ({
    label: option[labelKey],
    value: option[valueKey],
  }));
  return (
    <div className={`mb-4 `}>
      {label ? (
        <label htmlFor="" className="mb-[2px] text-base">
          {label}
        </label>
      ) : (
        ""
      )}

      <Select
        isSearchable={true}
        isDisabled={isDisabled}
        loading={loading}
        onSearchInputChange={(e) =>
          e.target.value.length >= 2 && onSearchInputChange(e.target.value)
        }
        value={!mappedOptions.length ? null : value}
        onChange={handleChoose}
        options={mappedOptions}
        placeholder={placeHolder}
        searchInputPlaceholder={searchInputPlaceholder}
        classNames={{
          listItem: () =>
            " list-none p-2 cursor-pointer hover:bg-slate-200 hover:text-destructive transition text-gray-400 rounded-sm text-base font-semibold ",
          menu: "z-10 w-full bg-white absolute",
          menuButton: () =>
            `flex  items-center justify-between text-gray-600  border placeholder-gray-300 h-11 px-1 border-gray-200 rounded-sm py-2 cnt ${
              isDisabled
                ? "bg-gray-200"
                : "bg-white hover:border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            }`,
          searchIcon: "hidden",
          searchBox:
            "w-full py-2 ps-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none",
        }}
        primaryColor={""}
      />
    </div>
  );
};

export default DropDownSelect;