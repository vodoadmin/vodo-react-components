// import React, { useEffect, useState } from "react";
// import { Progress } from "../progress";

// interface SubmissionProgressProps {
//   progress: number;

//   complete?: boolean;
// }

// const SubmissionProgress: React.FC<SubmissionProgressProps> = ({ progress }) => {
//   console.log(progress);

//   return (
//     <div
//       className={`absolute w-[500px] -top-5 transition-all duration-300 transform ${
//         progress === 0
//           ? "-top-5"
//           : progress > 0 && progress < 100
//           ? "top-5"
//           : progress === 100
//           ? "-top-5"
//           : ""
//       } -translate-x-1/2 left-1/2`}
//     >
//       <Progress className="h-2.5" value={progress}>
//         {progress}%
//       </Progress>
//     </div>
//   );
// };

// export default SubmissionProgress;
