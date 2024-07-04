import React from "react";
const HrManagementIcon = ({ fill = "#EB3D34", width = 35, height = 35 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3379 1.50391C17.1049 1.50391 17.8719 1.50391 18.6621 1.50391C18.7177 2.26868 18.7177 2.26868 18.7336 2.50798C18.7387 2.57097 18.7437 2.63396 18.7489 2.69886C18.7559 2.79498 18.7559 2.79498 18.763 2.89304C18.8056 3.11057 18.8693 3.24188 19.0039 3.41797C19.1583 3.51566 19.1583 3.51566 19.3385 3.57872C19.4038 3.60445 19.4692 3.63018 19.5365 3.65669C19.6047 3.68225 19.6728 3.7078 19.743 3.73413C19.8774 3.78616 20.0117 3.83831 20.146 3.89061C20.2091 3.91491 20.2722 3.93922 20.3372 3.96426C20.5366 4.04482 20.7259 4.1418 20.918 4.23828C21.1532 4.27748 21.3119 4.28489 21.5244 4.16779C21.7376 4.01336 21.9288 3.84186 22.1204 3.6615C22.1804 3.6051 22.2404 3.54871 22.3022 3.4906C22.3576 3.43641 22.4129 3.38221 22.4699 3.32638C22.627 3.21289 22.627 3.21289 22.7522 3.21993C22.9618 3.30666 23.0825 3.44042 23.2411 3.60195C23.2883 3.6496 23.2883 3.6496 23.3365 3.69821C23.4366 3.79944 23.5359 3.90135 23.6353 4.0033C23.7031 4.07219 23.771 4.14104 23.839 4.20984C24.0052 4.37829 24.1707 4.54737 24.3359 4.7168C24.2216 4.95922 24.0841 5.12731 23.9001 5.32349C23.4061 5.83492 23.4061 5.83492 23.2702 6.51123C23.3536 6.89983 23.5529 7.24982 23.7303 7.60271C23.8105 7.76913 23.8748 7.94016 23.9386 8.1134C24.0327 8.35547 24.122 8.5229 24.3359 8.68164C24.5824 8.76378 24.818 8.77159 25.0751 8.78418C25.4043 8.80057 25.7182 8.83227 26.0449 8.88672C26.0449 9.63115 26.0449 10.3756 26.0449 11.1426C25.7325 11.2467 25.4061 11.2328 25.0788 11.2403C24.7166 11.2547 24.4496 11.3066 24.1309 11.4844C24.0298 11.6032 24.0298 11.6032 23.9856 11.7493C23.9651 11.803 23.9445 11.8568 23.9234 11.9122C23.9016 11.974 23.8798 12.0359 23.8574 12.0996C23.7994 12.2535 23.741 12.4074 23.6823 12.561C23.6554 12.634 23.6285 12.707 23.6008 12.7821C23.5156 12.9883 23.5156 12.9883 23.4045 13.1669C23.305 13.3397 23.281 13.4363 23.2806 13.6334C23.2793 13.6827 23.278 13.7319 23.2766 13.7827C23.3614 14.1891 23.7005 14.4973 23.9771 14.7913C24.0117 14.8285 24.0463 14.8658 24.082 14.9042C24.1664 14.995 24.2511 15.0854 24.3359 15.1758C24.2462 15.3739 24.1495 15.5164 23.9963 15.6703C23.9572 15.7095 23.9182 15.7487 23.878 15.7891C23.8374 15.8292 23.7967 15.8693 23.7549 15.9106C23.7143 15.9518 23.6736 15.9929 23.6318 16.0353C23.5927 16.0742 23.5537 16.1131 23.5135 16.1531C23.4778 16.1886 23.4422 16.2241 23.4055 16.2607C23.3105 16.3379 23.3105 16.3379 23.1738 16.3379C23.144 16.2325 23.144 16.2325 23.1135 16.1251C22.8178 15.1127 22.3956 14.1913 21.5332 13.5352C21.5769 13.2874 21.6836 13.1225 21.8237 12.9156C22.594 11.7271 22.864 10.3925 22.6227 8.99353C22.3224 7.65357 21.567 6.44532 20.4053 5.68665C20.2807 5.61266 20.1554 5.53995 20.0293 5.46875C19.9762 5.4372 19.923 5.40566 19.8683 5.37315C18.7707 4.76645 17.376 4.66682 16.167 4.96033C15.3497 5.19851 14.647 5.57926 14.0137 6.15234C13.9611 6.19861 13.9085 6.24487 13.8543 6.29253C12.888 7.19297 12.3838 8.45813 12.2852 9.7591C12.2558 10.9823 12.5859 12.2445 13.3808 13.1998C13.4092 13.2428 13.4376 13.2858 13.4668 13.3301C13.3903 13.5596 13.3394 13.5958 13.1549 13.7402C12.3768 14.404 11.9897 15.2947 11.7578 16.2695C11.4622 16.1561 11.2729 15.9366 11.0571 15.7141C11.0003 15.6563 11.0003 15.6563 10.9423 15.5974C10.8492 15.5028 10.7566 15.4077 10.6641 15.3125C10.7937 14.9915 11.045 14.7665 11.2801 14.521C11.5894 14.1927 11.7204 14.0068 11.708 13.5442C11.6762 13.2945 11.5762 13.0849 11.4673 12.8601C11.4233 12.7647 11.3794 12.6693 11.3356 12.5739C11.3143 12.528 11.2929 12.4822 11.2709 12.435C11.1902 12.2597 11.1164 12.0821 11.0443 11.9031C11.0233 11.8511 11.0022 11.7991 10.9805 11.7455C10.9375 11.6211 10.9375 11.6211 10.9375 11.4844C10.6503 11.3679 10.4024 11.2724 10.0913 11.2601C10.034 11.2575 9.97664 11.255 9.91758 11.2523C9.79689 11.2475 9.67619 11.2427 9.55549 11.2379C9.49826 11.2354 9.44103 11.2328 9.38206 11.2302C9.32966 11.2281 9.27727 11.226 9.22329 11.2239C9.0918 11.2109 9.0918 11.2109 8.95508 11.1426C8.95508 10.3981 8.95508 9.65371 8.95508 8.88672C9.32509 8.82505 9.68095 8.79881 10.0542 8.78899C10.3724 8.77441 10.6012 8.71891 10.8691 8.54492C10.9627 8.42223 10.9627 8.42223 11.0101 8.27576C11.0419 8.19486 11.0419 8.19486 11.0742 8.11234C11.0968 8.05206 11.1193 7.99179 11.1426 7.92969C11.2005 7.7885 11.2589 7.64752 11.3177 7.50671C11.3463 7.43692 11.3749 7.36713 11.4043 7.29523C11.4844 7.10938 11.4844 7.10938 11.6083 6.89148C11.7252 6.61466 11.75 6.37931 11.6895 6.08398C11.5817 5.87451 11.4371 5.71089 11.2793 5.53711C11.2251 5.47569 11.1709 5.41427 11.1151 5.35099C10.9662 5.18376 10.8158 5.01811 10.6641 4.85352C10.8336 4.45509 11.1756 4.17724 11.4758 3.87512C11.5381 3.81057 11.6004 3.74603 11.6646 3.67952C11.7248 3.61885 11.785 3.55818 11.847 3.49567C11.902 3.43978 11.957 3.38388 12.0136 3.32629C12.168 3.21289 12.168 3.21289 12.3115 3.21806C12.4504 3.2856 12.5424 3.35502 12.6529 3.46256C12.7099 3.51682 12.7099 3.51682 12.768 3.57218C12.8068 3.61011 12.8457 3.64805 12.8857 3.68713C13.2913 4.09888 13.2913 4.09888 13.8294 4.26044C14.1125 4.23561 14.3212 4.1491 14.5691 4.02039C14.9782 3.81664 15.3832 3.65306 15.8177 3.50929C16.0399 3.39553 16.0903 3.29758 16.2012 3.07617C16.241 2.89221 16.241 2.89221 16.2511 2.69886C16.2587 2.60438 16.2587 2.60438 16.2664 2.50798C16.2716 2.42901 16.2769 2.35004 16.2823 2.26868C16.3007 2.0163 16.319 1.76393 16.3379 1.50391Z"
        fill={fill}
      />
      <path
        d="M29.0063 28.6946C29.162 28.6939 29.3177 28.6918 29.4734 28.6897C30.6251 28.6812 31.602 28.9338 32.4622 29.7492C33.1946 30.5286 33.5162 31.3242 33.5234 32.3821C33.479 32.7493 33.338 33.0113 33.0518 33.2441C32.9916 33.2945 32.9916 33.2945 32.9301 33.3458C32.7323 33.4838 32.5577 33.5049 32.3239 33.5062C32.2663 33.5067 32.2086 33.5072 32.1491 33.5077C32.0861 33.5079 32.023 33.5081 31.958 33.5083C31.8914 33.5087 31.8248 33.5092 31.7562 33.5096C31.5354 33.511 31.3147 33.5118 31.094 33.5125C30.9809 33.5129 30.9809 33.5129 30.8655 33.5133C30.4665 33.5147 30.0675 33.5157 29.6685 33.5164C29.2565 33.5171 28.8445 33.5195 28.4325 33.5222C28.1156 33.524 27.7987 33.5245 27.4817 33.5248C27.3299 33.5251 27.178 33.5259 27.0262 33.5272C26.8134 33.5288 26.6008 33.5288 26.3881 33.5283C26.3255 33.5292 26.263 33.5301 26.1986 33.531C25.7929 33.5277 25.5581 33.4572 25.2247 33.2227C24.8714 32.8504 24.782 32.4999 24.7934 31.9984C24.8816 31.1158 25.3114 30.2574 25.9614 29.655C26.9035 28.8884 27.8192 28.6976 29.0063 28.6946Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M5.16124 28.6971C5.23498 28.6965 5.23498 28.6965 5.31021 28.6959C5.41414 28.6953 5.51808 28.6949 5.62202 28.6946C5.77834 28.6939 5.93459 28.6918 6.0909 28.6897C7.26029 28.6811 8.26714 28.9476 9.14369 29.7643C9.78953 30.4092 10.174 31.2641 10.2153 32.176C10.2012 32.6245 10.0659 32.9398 9.74105 33.2484C9.48886 33.4123 9.30894 33.5131 9.00448 33.514C8.91766 33.5147 8.91766 33.5147 8.82909 33.5155C8.76616 33.5153 8.70323 33.5151 8.63839 33.5149C8.53831 33.5155 8.53831 33.5155 8.4362 33.516C8.2155 33.517 7.99482 33.5169 7.77412 33.5167C7.62069 33.517 7.46727 33.5173 7.31385 33.5176C6.99216 33.5181 6.67047 33.5181 6.34878 33.5177C5.9367 33.5174 5.52464 33.5185 5.11256 33.5201C4.79565 33.5211 4.47874 33.5212 4.16183 33.5209C4.00991 33.521 3.85799 33.5213 3.70607 33.522C3.49351 33.5229 3.281 33.5224 3.06844 33.5216C2.97445 33.5224 2.97445 33.5224 2.87857 33.5232C2.46872 33.5198 2.16758 33.462 1.85489 33.1736C1.8222 33.1334 1.78951 33.0932 1.75582 33.0518C1.72225 33.0117 1.68868 32.9715 1.65408 32.9301C1.40174 32.5684 1.47338 32.0686 1.50375 31.6505C1.69331 30.7141 2.26769 29.901 3.03569 29.3433C3.69376 28.9262 4.38363 28.702 5.16124 28.6971Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M16.851 28.6971C16.9248 28.6965 16.9248 28.6965 17 28.6959C17.1039 28.6953 17.2079 28.6948 17.3118 28.6946C17.4681 28.6939 17.6244 28.6918 17.7807 28.6896C18.9687 28.681 19.9735 28.9629 20.8498 29.8048C21.4416 30.4877 21.8459 31.2919 21.9008 32.2016C21.8577 32.6542 21.6957 32.9536 21.3539 33.2526C21.1322 33.4303 20.9944 33.5046 20.7086 33.5062C20.6213 33.507 20.6213 33.507 20.5323 33.5077C20.4684 33.5079 20.4044 33.5081 20.3385 33.5083C20.2376 33.5089 20.2376 33.5089 20.1347 33.5096C19.9114 33.511 19.688 33.5118 19.4647 33.5125C19.3504 33.5129 19.3504 33.5129 19.2338 33.5133C18.8303 33.5147 18.4269 33.5157 18.0234 33.5163C17.6068 33.5171 17.1901 33.5194 16.7734 33.5222C16.4531 33.524 16.1327 33.5245 15.8123 33.5248C15.6587 33.5251 15.5052 33.5259 15.3516 33.5272C15.1364 33.5288 14.9213 33.5288 14.7061 33.5283C14.6428 33.5292 14.5795 33.53 14.5144 33.5309C14.1071 33.5277 13.8698 33.4585 13.5353 33.2227C13.4162 33.0836 13.4162 33.0836 13.3388 32.945C13.2989 32.8762 13.2989 32.8762 13.2582 32.8059C13.0177 32.3219 13.1197 31.8244 13.255 31.3236C13.603 30.3067 14.2366 29.5648 15.176 29.0528C15.7287 28.8238 16.2534 28.7009 16.851 28.6971Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M14.6901 13.6098C14.9062 13.703 14.9675 13.8485 15.0861 14.0492C15.1209 14.1072 15.1209 14.1072 15.1564 14.1665C15.2321 14.2931 15.3065 14.4204 15.3809 14.5477C15.433 14.6352 15.4851 14.7227 15.5373 14.8101C15.6671 15.0279 15.7961 15.2463 15.9248 15.4648C16.2185 15.963 16.5149 16.4597 16.8165 16.9531C16.8413 16.9939 16.8661 17.0346 16.8917 17.0766C16.9548 17.1788 17.0201 17.2797 17.0857 17.3804C17.1187 17.4315 17.1517 17.4826 17.1858 17.5352C17.2907 17.6522 17.2907 17.6522 17.46 17.6599C17.6422 17.6546 17.6422 17.6546 17.7471 17.5233C17.7934 17.4458 17.7934 17.4458 17.8405 17.3668C17.8924 17.282 17.8924 17.282 17.9453 17.1955C17.9789 17.1381 18.0124 17.0806 18.047 17.0215C18.0769 16.9726 18.1068 16.9237 18.1376 16.8734C18.2298 16.7227 18.3201 16.571 18.4101 16.4191C18.7945 15.774 19.1837 15.1319 19.5744 14.4906C19.6487 14.3685 19.723 14.2464 19.7973 14.1242C19.8404 14.0535 19.8835 13.9827 19.928 13.9098C20.0277 13.7478 20.0277 13.7478 20.0977 13.6035C20.6896 13.669 21.1432 14.0588 21.5333 14.4922C21.5813 14.5398 21.5813 14.5398 21.6302 14.5883C22.341 15.3338 22.5168 16.3131 22.4989 17.3035C22.496 17.5262 22.4932 17.749 22.4903 17.9785C21.994 17.9785 21.4977 17.9785 20.9864 17.9785C20.9608 17.3376 20.9608 17.3376 20.9537 17.1359C20.9501 17.0573 20.9501 17.0573 20.9464 16.9772C20.9442 16.9235 20.9421 16.8698 20.9398 16.8144C20.929 16.664 20.929 16.664 20.7813 16.543C20.5695 16.565 20.5695 16.565 20.3712 16.6113C20.2263 17.0458 20.2614 17.5213 20.2345 17.9785C18.3847 17.9785 16.5348 17.9785 14.629 17.9785C14.5952 17.3356 14.5952 17.3356 14.5606 16.6797C14.4309 16.5191 14.4309 16.5191 14.2103 16.5344C14.1454 16.5372 14.0806 16.5401 14.0138 16.543C13.9623 16.7298 13.934 16.904 13.9238 17.0973C13.9199 17.1671 13.9199 17.1671 13.9159 17.2382C13.9115 17.3255 13.9115 17.3255 13.9069 17.4146C13.8971 17.6007 13.8872 17.7868 13.877 17.9785C13.4033 17.9785 12.9296 17.9785 12.4415 17.9785C12.4085 16.5381 12.4662 15.4101 13.5 14.3077C13.7786 14.0529 14.2884 13.5902 14.6901 13.6098Z"
        fill={fill}
        fillOpacity="0.95"
      />
      <path
        d="M18.5287 23.3613C18.5947 23.4037 18.5947 23.4037 18.662 23.447C18.7095 23.476 18.757 23.505 18.8059 23.5349C19.2422 23.8288 19.5063 24.2111 19.713 24.6903C19.8486 25.5174 19.7675 26.1825 19.3029 26.8821C18.9704 27.2989 18.4856 27.5451 17.9784 27.6853C17.1868 27.766 16.5407 27.626 15.9153 27.1272C15.4613 26.6693 15.2248 26.0813 15.2227 25.4423C15.2362 24.726 15.4229 24.2378 15.9276 23.7205C16.6352 23.1446 17.6891 22.9023 18.5287 23.3613Z"
        fill={fill}
        fillOpacity="0.7"
      />
      <path
        d="M30.3517 23.4471C30.8659 23.8035 31.308 24.3171 31.4286 24.9449C31.5053 25.5964 31.4408 26.1991 31.0524 26.7455C30.6149 27.2773 30.1387 27.6319 29.4379 27.7116C28.7368 27.7346 28.1728 27.6113 27.6258 27.1599C27.1102 26.6609 26.8856 26.0969 26.8584 25.3847C26.8831 24.7226 27.156 24.1436 27.6344 23.6864C28.4085 23.0692 29.4786 22.9248 30.3517 23.4471Z"
        fill={fill}
        fillOpacity="0.7"
      />
      <path
        d="M7.20508 23.5583C7.72444 23.9724 8.04855 24.5295 8.13914 25.1904C8.16448 25.8665 7.96813 26.4928 7.51964 27.0019C7.00667 27.4975 6.52288 27.6909 5.81493 27.7154C5.09483 27.6953 4.635 27.4632 4.11555 26.9683C3.6786 26.4709 3.5321 25.9214 3.53984 25.2718C3.59484 24.5951 3.90017 24.0917 4.37965 23.6256C5.17336 22.965 6.37531 22.9961 7.20508 23.5583Z"
        fill={fill}
        fillOpacity="0.7"
      />
      <path
        d="M18.3674 8.07917C18.7699 8.31841 18.9697 8.59835 19.1036 9.04288C19.2477 9.76324 19.165 10.4524 18.7794 11.0806C18.5331 11.4044 18.2341 11.5861 17.8419 11.6894C17.394 11.7455 16.9316 11.7341 16.5431 11.4843C16.107 11.1042 15.8274 10.7043 15.7805 10.1222C15.7192 9.01227 15.7192 9.01227 15.9962 8.54487C16.602 7.8762 17.5341 7.68544 18.3674 8.07917Z"
        fill={fill}
        fillOpacity="0.88"
      />
      <path
        d="M25.498 17.9786C25.6713 18.0868 25.6713 18.0868 25.8441 18.2392C25.9093 18.2956 25.9745 18.3519 26.0417 18.4099C26.0758 18.44 26.1098 18.4701 26.1449 18.5012C26.3216 18.6571 26.5017 18.809 26.6815 18.9613C26.7186 18.9929 26.7557 19.0245 26.7939 19.057C27.0602 19.2829 27.3327 19.4993 27.6086 19.7132C27.7715 19.8408 27.9338 19.969 28.0957 20.0978C28.1655 20.1531 28.1655 20.1531 28.2367 20.2096C28.3803 20.3247 28.5223 20.4417 28.6639 20.5592C28.7086 20.5947 28.7532 20.6301 28.7992 20.6666C29.0238 20.8562 29.1109 20.9502 29.1927 21.2417C29.1895 21.465 29.1895 21.465 29.0485 21.6359C28.7986 21.7634 28.7049 21.7428 28.4375 21.67C28.2719 21.548 28.2719 21.548 28.1128 21.3923C27.8897 21.1812 27.6665 20.9796 27.4249 20.7899C27.1161 20.5464 26.8159 20.2942 26.5165 20.0394C26.2747 19.8338 26.0306 19.6315 25.7843 19.4313C25.7241 19.3819 25.6639 19.3326 25.6019 19.2817C25.4898 19.1899 25.3771 19.0987 25.2639 19.0083C25.2143 18.9674 25.1646 18.9265 25.1135 18.8844C25.0703 18.8495 25.0272 18.8146 24.9827 18.7786C24.8544 18.6291 24.8334 18.5146 24.8145 18.3204C24.9434 17.9633 25.1368 17.9446 25.498 17.9786Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M9.91223 17.9784C10.1173 18.1151 10.1173 18.1151 10.1899 18.2988C10.1845 18.5859 10.1087 18.671 9.9157 18.8737C9.69625 19.0773 9.46584 19.2653 9.23184 19.4518C9.01485 19.626 8.80333 19.8055 8.59204 19.9864C8.24138 20.2856 7.8823 20.5721 7.51743 20.8538C7.27933 21.0388 7.05586 21.2322 6.83606 21.4391C6.66294 21.5949 6.56136 21.6702 6.34045 21.7552C6.15247 21.7381 6.15247 21.7381 5.95166 21.6356C5.81067 21.4647 5.81067 21.4647 5.78076 21.2468C5.87067 20.8498 6.26198 20.6117 6.56262 20.3709C6.61743 20.3266 6.67224 20.2823 6.72871 20.2366C6.83943 20.1479 6.95053 20.0596 7.06197 19.9717C7.27335 19.8023 7.48 19.6279 7.68628 19.4524C8.02508 19.1643 8.36547 18.8787 8.7114 18.5992C8.82743 18.5051 8.94229 18.4095 9.05587 18.3124C9.55003 17.9007 9.55003 17.9007 9.91223 17.9784Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M17.3547 19.2593C17.4026 19.2596 17.4506 19.26 17.5 19.2603C17.5479 19.26 17.5958 19.2596 17.6452 19.2593C17.7734 19.2774 17.7734 19.2774 17.9101 19.4142C17.9254 19.5833 17.9325 19.7445 17.9331 19.9138C17.9335 19.9632 17.934 20.0125 17.9345 20.0634C17.9351 20.168 17.9355 20.2725 17.9354 20.377C17.9357 20.537 17.9382 20.6968 17.9408 20.8568C17.9412 20.9583 17.9415 21.0598 17.9416 21.1613C17.9426 21.2092 17.9436 21.257 17.9446 21.3063C17.9425 21.5262 17.9372 21.6408 17.7848 21.8051C17.5758 21.9039 17.4452 21.8685 17.2265 21.8067C17.0584 21.6386 17.073 21.5437 17.0708 21.3141C17.0711 21.2659 17.0714 21.2177 17.0716 21.168C17.0715 21.1184 17.0714 21.0689 17.0712 21.0178C17.0711 20.913 17.0714 20.8082 17.072 20.7034C17.0727 20.5427 17.072 20.3821 17.0711 20.2214C17.0712 20.1196 17.0714 20.0179 17.0716 19.9162C17.0714 19.868 17.0711 19.8197 17.0708 19.7701C17.0753 19.2989 17.0753 19.2989 17.3547 19.2593Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M16.9531 13.3301C17.2915 13.3301 17.6299 13.3301 17.9785 13.3301C17.9205 13.4048 17.8626 13.4795 17.8028 13.5565C17.5737 13.9239 17.6354 14.2189 17.7136 14.6289C17.7352 14.7585 17.7567 14.8881 17.7782 15.0177C17.8082 15.1909 17.8385 15.3639 17.8723 15.5364C17.9282 15.8626 17.8949 16.0311 17.7094 16.3037C17.6707 16.3622 17.632 16.4207 17.5921 16.481C17.5617 16.524 17.5313 16.567 17.5 16.6113C17.0234 16.1387 17.0234 16.1387 17.0193 15.8383C17.0481 15.485 17.1064 15.1368 17.1625 14.787C17.2529 14.2038 17.2901 13.8355 16.9531 13.3301Z"
        fill={fill}
        fillOpacity="0.86"
      />
    </svg>
  );
};

export default HrManagementIcon;