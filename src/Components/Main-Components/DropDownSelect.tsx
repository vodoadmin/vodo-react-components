import React, { useState } from "react";
import Select from "react-tailwindcss-select";
interface DropDownSelectProps {
  label?: string;
  placeHolder?: string;
  handleChange: any;
  options: any;
  isDisabled?: boolean;
  isMultiple?: boolean;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onSearchInputChange: any;
  labelKey: string;
  valueKey: string;
  className?: string;
  disabledClassName?: string;
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
  isMultiple,
  className,
  disabledClassName,
}: DropDownSelectProps) => {
  const [value, setValue] = useState(null);

  const handleChoose = (value: any) => {
    setValue(value);
    handleChange(value);
  };
  const mappedOptions = options.map((option: any) => {
    const { [labelKey]: rawLabel, [valueKey]: rawValue, ...rest } = option;
    const label = rawLabel !== null && rawLabel !== undefined ? rawLabel : "";
    const value = rawValue !== null && rawValue !== undefined ? rawValue : "";
    return {
      label,
      value,
      ...rest,
    };
  });

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
        isMultiple={isMultiple}
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
          listItem: (value) =>
            ` list-none p-2 cursor-pointer hover:bg-[#f3f4f6] hover:text-destructive transition text-gray-400 rounded-sm text-base font-semibold ${
              value?.isSelected ? "bg-[#f3f4f6]" : ""
            }`,
          menu: "z-10 w-full bg-white absolute shadow-lg",
          menuButton: () =>
            `flex  items-center justify-between text-gray-600  border placeholder-gray-300 h-11 px-1 border-gray-200 rounded-sm py-2 cnt [&_p_text-red-500] drop-down-select ${className} ${
              isDisabled
                ? disabledClassName
                : "bg-white hover:border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
            }`,
          searchIcon: "hidden",
          searchBox:
            "w-full py-2 ps-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none",
          ChevronIcon: (open) => (open ? "rotate-90" : "rotate-0"),
        }}
        primaryColor={""}
      />
    </div>
  );
};

export default DropDownSelect;
