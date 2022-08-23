import { FiRefreshCw } from "react-icons/fi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { CgSearchFound } from "react-icons/cg";
const Data = [
  {
    id: 1,
    name: "Advanced Analysis",
    icon: <FiRefreshCw size={26} />,
    description:
      "We handle things by first analyzing the problem and then taking the best approach to reach the solution.",
  },
  {
    id: 2,
    name: "Optmisation",
    icon: <BsFillFileEarmarkArrowDownFill size={26} />,
    description:
      "Every line of code we write is properly optimized so our clients may never face any unwanted glitches.",
  },
  {
    id: 3,
    name: "On Time",
    icon: <BiTime size={26} />,
    description:
      "Things may seem a little swingy sometimes but our promise to deliver does not waver a speck.",
  },
  {
    id: 4,
    name: "Continuous Testing",
    icon: <CgSearchFound size={26} />,
    description:
      "Work we do here is tested continuously so that the chances of clingy bugs is reduced to null.",
  },
];

export default Data;
