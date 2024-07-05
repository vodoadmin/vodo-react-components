import React, { ReactNode } from "react";

import SideBar, {
  ModuleProps,
  SubModuleProps,
} from "../Components/Main-Components/sidebar";
import { EyeIcon, SquareArrowUpLeftIcon } from "lucide-react";
import DeleteIcon from "../Icons/deleteSVG";
import EditIcon from "../Icons/editIcon";
import TrashCanIcon from "../Icons/trashCanIcon";
// import ArrowRightIcon from "../Icons/arrow-rightSVG";

const subModules: SubModuleProps[] = [
  {
    title: "SubModule 1",
    submoduleArr: [
      { title: "SubItem 1", link: "/subitem1" },
      { title: "SubItem 2", link: "/subitem2" },
    ],
    Svg: <DeleteIcon height={20} />,
  },
  {
    title: "SubModule 2",
    submoduleArr: [
      { title: "SubItem 3", link: "/subitem3" },
      { title: "SubItem 4", link: "/subitem4" },
    ],
    Svg: <EditIcon />,
  },
];

const modules: ModuleProps[] = [
  { title: "Module 1", link: "/module1", Svg: <EyeIcon /> },
  { title: "Module 2", link: "/module2", Svg: <TrashCanIcon /> },
];

const Test: React.FC = () => {
  return (
    <div className="flex items-start justify-start">
      <SideBar
        modules={modules}
        subModules={subModules}
        className={{
          subModule: "bg-green-300 px-2 py-1",
          module: "bg-red-300 px-2 py-1",
        }}
      />
    </div>
  );
};

export default Test;
