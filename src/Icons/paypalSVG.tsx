import { cn } from "@/lib/utils";
import React from "react";

interface Paypal {
  className?: string;
}
const PaypalIcon: React.FC<Paypal> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="27"
        height="30"
        viewBox="0 0 27 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7478 7.88605C22.7478 8.12815 22.7336 8.35679 22.705 8.58544C22.5338 10.5357 21.6208 12.2977 20.2369 13.5889C18.6962 15.0549 16.5562 15.9561 14.188 15.9561H9.72261C9.00929 15.9561 8.41012 16.4537 8.31025 17.1128L7.22599 24.2144C7.14039 24.739 6.74095 25.1694 6.21309 25.3039C6.08469 25.3577 5.95629 25.3711 5.81363 25.3711H3.03165C2.14714 25.3711 1.47663 24.6314 1.61929 23.8109L5.02895 4.53699C5.37134 2.58673 7.15467 1.16101 9.25183 1.16101H15.6146C19.5521 1.16101 22.7478 4.17383 22.7478 7.88605Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.4"
          d="M25.6 13.266C25.6 15.1222 24.8011 16.8034 23.5171 18.0274C22.2189 19.2379 20.4356 19.9911 18.4668 19.9911H15.3995C14.7005 19.9911 14.1013 20.4618 13.9872 21.1209L12.96 26.9313C12.8458 27.5904 12.2467 28.0611 11.5476 28.0611H7.36755C6.46876 28.0611 5.79823 27.281 5.96943 26.4471L6.21197 25.3039C6.73983 25.1694 7.13927 24.739 7.22487 24.2144L8.30913 17.1128C8.40899 16.4537 9.00817 15.9561 9.72149 15.9561H14.1869C16.5551 15.9561 18.6951 15.0549 20.2358 13.5888C21.6197 12.2976 22.5327 10.5357 22.7039 8.58545C24.4302 9.5135 25.6 11.262 25.6 13.266Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default PaypalIcon;