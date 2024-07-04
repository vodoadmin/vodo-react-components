import React from "react";
const WarehousesIcon = ({ fill = "#EB3D34", width = 35, height = 35 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.1932 6.42573C13.3622 6.50507 13.3622 6.50507 13.5297 6.6057C13.625 6.6622 13.625 6.6622 13.7222 6.71984C13.7901 6.76095 13.8581 6.80207 13.9281 6.84443C14.076 6.93233 14.2239 7.02018 14.3719 7.10798C14.4482 7.15349 14.5245 7.19899 14.6031 7.24587C14.9714 7.46436 15.3427 7.67773 15.714 7.89118C15.8634 7.97724 16.0127 8.06331 16.1621 8.1494C16.2362 8.19212 16.3104 8.23485 16.3868 8.27887C16.7579 8.49269 17.1289 8.70678 17.4999 8.92084C17.648 9.00629 17.7961 9.09174 17.9442 9.17719C19.9437 10.3308 19.9437 10.3308 21.9432 11.4843C21.9432 14.259 21.9432 17.0337 21.9432 19.8925C21.7402 19.9151 21.5372 19.9376 21.328 19.9609C21.0865 20.2103 21.0962 20.4701 21.0934 20.8058C21.0927 20.8552 21.092 20.9046 21.0913 20.9555C21.0892 21.1179 21.0886 21.2802 21.0879 21.4426C21.0868 21.5556 21.0855 21.6685 21.0842 21.7814C21.081 22.078 21.0789 22.3745 21.0772 22.6711C21.0751 22.974 21.0719 23.2769 21.0688 23.5798C21.063 24.1736 21.0585 24.7674 21.0546 25.3613C20.6936 25.3613 20.3327 25.3613 19.9608 25.3613C19.9591 25.2001 19.9574 25.0389 19.9556 24.8729C19.9499 24.3417 19.9439 23.8104 19.9376 23.2792C19.9338 22.957 19.9302 22.6347 19.9268 22.3125C19.9236 22.0018 19.92 21.6911 19.9162 21.3804C19.9148 21.2616 19.9135 21.1428 19.9123 21.0239C19.9107 20.8581 19.9086 20.6923 19.9065 20.5265C19.9061 20.4769 19.9057 20.4272 19.9053 20.3761C19.9214 20.149 19.9214 20.149 19.8241 19.9609C19.6977 19.9449 19.5708 19.9326 19.4438 19.9224C19.3747 19.9167 19.3055 19.911 19.2342 19.9051C19.1807 19.9009 19.1273 19.8968 19.0721 19.8925C19.072 19.8312 19.0719 19.7699 19.0718 19.7068C19.0706 19.1275 19.0678 18.5482 19.0631 17.9689C19.0608 17.6711 19.0591 17.3734 19.0588 17.0756C19.0585 16.7879 19.0565 16.5003 19.0535 16.2126C19.0526 16.1032 19.0523 15.9937 19.0526 15.8843C19.0685 15.0535 19.0685 15.0535 18.662 14.3554C18.2926 14.0614 18.0249 14.0054 17.5625 14.0036C17.4772 14.0031 17.3919 14.0026 17.3041 14.0021C17.2097 14.0019 17.1154 14.0017 17.021 14.0015C16.9215 14.0011 16.822 14.0006 16.7225 14.0002C16.396 13.9987 16.0694 13.998 15.7428 13.9973C15.6303 13.9971 15.5177 13.9968 15.4051 13.9965C14.8763 13.9952 14.3474 13.9942 13.8185 13.9936C13.2086 13.993 12.5988 13.9912 11.9889 13.9884C11.5171 13.9863 11.0453 13.9853 10.5734 13.9851C10.2918 13.9849 10.0102 13.9843 9.72863 13.9826C9.46356 13.981 9.19853 13.9807 8.93346 13.9814C8.83646 13.9815 8.73946 13.981 8.64247 13.9801C7.82317 13.9719 7.82317 13.9719 7.14038 14.3884C6.86735 14.6981 6.82725 14.9307 6.825 15.3318C6.82399 15.4668 6.82399 15.4668 6.82297 15.6046C6.82257 15.7045 6.82217 15.8045 6.82178 15.9045C6.82112 16.0096 6.82044 16.1147 6.81973 16.2198C6.81788 16.5053 6.81644 16.7909 6.81508 17.0765C6.81359 17.3748 6.81171 17.6731 6.80988 17.9715C6.80647 18.5365 6.80339 19.1016 6.80044 19.6666C6.79707 20.3099 6.79332 20.9531 6.78953 21.5964C6.78175 22.9197 6.77444 24.243 6.76745 25.5664C6.46469 25.5714 6.16194 25.5752 5.85914 25.5776C5.75631 25.5786 5.65348 25.58 5.55065 25.5818C5.40216 25.5843 5.25371 25.5855 5.1052 25.5864C5.01606 25.5875 4.92692 25.5885 4.83508 25.5896C4.4817 25.5574 4.2097 25.4845 3.97053 25.2122C3.87379 24.9608 3.86863 24.7299 3.8717 24.4645C3.87152 24.409 3.87135 24.3534 3.87117 24.2962C3.87083 24.1101 3.87196 23.9242 3.87308 23.7382C3.87314 23.6048 3.8731 23.4714 3.87299 23.338C3.87293 22.9759 3.87414 22.6138 3.87557 22.2517C3.87685 21.8732 3.87697 21.4948 3.87721 21.1164C3.87785 20.3998 3.87953 19.6831 3.88159 18.9665C3.88388 18.1507 3.88501 17.3349 3.88604 16.519C3.88818 14.8408 3.89179 13.1625 3.89636 11.4843C3.94511 11.4571 3.99386 11.4299 4.04409 11.4018C4.2277 11.2993 4.41127 11.1966 4.59483 11.094C4.71225 11.0283 4.82971 10.9627 4.94716 10.8971C5.36132 10.6655 5.77396 10.4319 6.18213 10.1898C6.22972 10.1615 6.27732 10.1333 6.32636 10.1043C6.3697 10.0785 6.41304 10.0528 6.4577 10.0263C6.84256 9.79858 7.23019 9.57562 7.61767 9.35236C7.69336 9.30875 7.76905 9.26513 7.84704 9.2202C8.00226 9.13078 8.15748 9.04138 8.31272 8.95199C8.75966 8.69454 9.20635 8.43668 9.65308 8.17887C9.99644 7.98075 10.3398 7.78269 10.6834 7.58491C10.8041 7.51541 10.9248 7.44588 11.0455 7.37635C11.1963 7.28951 11.3471 7.20273 11.4979 7.116C11.5667 7.07634 11.6355 7.03669 11.7064 6.99583C11.7725 6.95802 11.8386 6.9202 11.9067 6.88124C12.0356 6.80523 12.1627 6.72624 12.288 6.64446C12.347 6.6062 12.4061 6.56795 12.4669 6.52853C12.5182 6.49395 12.5695 6.45937 12.6223 6.42374C12.8409 6.33351 12.9671 6.36423 13.1932 6.42573ZM11.4159 9.22846C11.0245 9.68226 10.7523 10.2523 10.7814 10.8624C10.872 11.538 11.1486 12.0371 11.6808 12.4627C12.2061 12.8264 12.6914 12.9241 13.33 12.8515C13.9435 12.703 14.4125 12.3471 14.757 11.8218C15.0556 11.2949 15.1292 10.7883 14.9943 10.194C14.791 9.56569 14.4737 9.17369 13.8939 8.85676C13.0126 8.45457 12.1469 8.58567 11.4159 9.22846Z"
        fill={fill}
      />
      <path
        d="M8.28371 14.4062C8.36872 14.4057 8.45372 14.4053 8.5413 14.4048C8.63497 14.4049 8.72864 14.4051 8.8223 14.4053C8.92136 14.405 9.02042 14.4046 9.11948 14.4042C9.38812 14.4033 9.65675 14.4033 9.92539 14.4034C10.1498 14.4035 10.3742 14.4032 10.5986 14.4028C11.1281 14.4021 11.6576 14.4021 12.1871 14.4025C12.733 14.4029 13.2789 14.402 13.8248 14.4006C14.2939 14.3994 14.7629 14.399 15.2319 14.3992C15.5119 14.3993 15.7919 14.3991 16.0719 14.3982C16.3352 14.3973 16.5985 14.3975 16.8618 14.3984C16.9584 14.3985 17.0549 14.3983 17.1514 14.3978C17.2834 14.397 17.4154 14.3977 17.5474 14.3985C17.658 14.3985 17.658 14.3985 17.771 14.3984C18.0827 14.4369 18.314 14.539 18.5153 14.7822C18.6141 15.0199 18.6183 15.2041 18.617 15.4615C18.617 15.5096 18.617 15.5577 18.6171 15.6072C18.6169 15.7651 18.6153 15.923 18.6137 16.081C18.6133 16.1908 18.6131 16.3007 18.6129 16.4105C18.6121 16.699 18.6101 16.9875 18.6078 17.276C18.6057 17.5706 18.6048 17.8653 18.6037 18.1599C18.6015 18.7376 18.598 19.3152 18.5937 19.8928C18.5324 19.8931 18.4711 19.8933 18.4079 19.8936C17.8286 19.8962 17.2494 19.9 16.6701 19.9054C16.3723 19.9081 16.0746 19.9103 15.7768 19.9113C15.4891 19.9124 15.2015 19.9147 14.9138 19.918C14.8044 19.919 14.6949 19.9195 14.5855 19.9196C13.6941 19.9203 13.6941 19.9203 12.9231 20.3443C12.5461 20.8042 12.3738 21.2825 12.2478 21.8608C11.8055 23.869 11.8055 23.869 10.8449 24.5904C10.6917 24.7096 10.5675 24.8466 10.4418 24.9941C10.4091 25.0317 10.3763 25.0692 10.3425 25.1079C10.2437 25.2271 10.2437 25.2271 10.1854 25.401C10.0488 25.5666 10.0488 25.5666 9.922 25.5967C9.75226 25.6063 9.5856 25.605 9.41566 25.6C9.35374 25.5995 9.29182 25.599 9.22802 25.5985C9.03016 25.5966 8.83242 25.5923 8.6346 25.588C8.50051 25.5863 8.36641 25.5847 8.23232 25.5833C7.90351 25.5795 7.5748 25.5736 7.24605 25.5666C7.23966 24.1821 7.23484 22.7976 7.23188 21.4131C7.23047 20.7702 7.22855 20.1274 7.22542 19.4845C7.2227 18.9243 7.22093 18.364 7.22032 17.8037C7.21996 17.507 7.21913 17.2103 7.21714 16.9136C7.21528 16.6344 7.21471 16.3552 7.21512 16.0759C7.21505 15.9734 7.2145 15.8709 7.21345 15.7684C7.21209 15.6285 7.21258 15.4885 7.21317 15.3485C7.21291 15.2702 7.21266 15.1919 7.2124 15.1112C7.25424 14.8518 7.33204 14.7429 7.51949 14.5608C7.77519 14.4205 7.99497 14.4068 8.28371 14.4062Z"
        fill={fill}
        fillOpacity="0.25"
      />
      <path
        d="M13.7188 3.17033C13.8639 3.25079 14.0076 3.3336 14.1503 3.41813C14.2328 3.46598 14.3153 3.51378 14.3979 3.56153C14.5897 3.67324 14.7807 3.78626 14.9714 3.89985C15.3664 4.13457 15.7645 4.36379 16.1627 4.59306C16.2761 4.65842 16.2761 4.65842 16.3918 4.72509C16.5471 4.81455 16.7024 4.904 16.8577 4.99344C17.2314 5.20869 17.6049 5.42427 17.9785 5.63981C18.1266 5.72527 18.2747 5.81071 18.4228 5.89616C18.719 6.06706 19.0152 6.23796 19.3115 6.40886C19.3848 6.45116 19.4581 6.49346 19.5337 6.53705C19.6817 6.62244 19.8297 6.70783 19.9777 6.79323C20.4244 7.05101 20.8713 7.30861 21.3183 7.56604C21.5393 7.69349 21.7601 7.82127 21.9809 7.94908C22.2818 8.12305 22.5836 8.29507 22.8862 8.46605C23.0347 8.55078 23.1833 8.63551 23.3318 8.72026C23.4004 8.75851 23.4689 8.79676 23.5395 8.83617C23.9742 9.08553 24.2842 9.30191 24.494 9.77128C24.5936 10.215 24.5654 10.611 24.3359 11.006C24.0218 11.3491 23.7387 11.4952 23.272 11.5315C22.655 11.5241 22.2196 11.2234 21.7095 10.9089C21.4595 10.7559 21.2057 10.6096 20.9521 10.4627C20.7429 10.3414 20.5342 10.2193 20.3256 10.0971C19.8889 9.84143 19.4508 9.58817 19.0124 9.33549C18.9386 9.29296 18.8648 9.25042 18.7888 9.2066C18.639 9.12032 18.4893 9.03406 18.3395 8.9478C17.8946 8.69141 17.4498 8.43469 17.005 8.17797C16.6314 7.9624 16.2577 7.74701 15.8839 7.53198C15.809 7.48889 15.7342 7.4458 15.6571 7.4014C15.5084 7.31584 15.3597 7.23039 15.2109 7.14506C14.8467 6.93552 14.4849 6.72289 14.1266 6.50339C14.0578 6.46158 13.9891 6.41978 13.9182 6.37671C13.7886 6.29762 13.6594 6.21771 13.5309 6.13686C13.4733 6.10184 13.4158 6.06682 13.3565 6.03074C13.3065 5.99968 13.2566 5.96862 13.2052 5.93662C13.0088 5.86059 12.9144 5.88323 12.7148 5.94743C12.5825 6.01268 12.4528 6.08327 12.3252 6.15732C12.2491 6.20116 12.173 6.24501 12.0946 6.29018C12.0122 6.33828 11.9298 6.38638 11.8475 6.43449C11.7616 6.4842 11.6756 6.53386 11.5897 6.58348C11.4128 6.68569 11.236 6.78817 11.0594 6.89088C10.7473 7.07236 10.4344 7.25246 10.1214 7.43261C9.82859 7.6013 9.53597 7.77041 9.24334 7.9395C8.87389 8.15293 8.50429 8.36608 8.1347 8.57927C7.98659 8.66472 7.83848 8.75016 7.69037 8.83561C7.39414 9.00651 7.09792 9.17741 6.80169 9.34831C6.72828 9.39066 6.65488 9.43301 6.57924 9.47665C6.43208 9.56155 6.28491 9.64644 6.13774 9.73133C5.79365 9.92981 5.4496 10.1283 5.10568 10.3271C4.98445 10.3972 4.86321 10.4672 4.74197 10.5373C4.59027 10.6249 4.4386 10.7126 4.28695 10.8003C4.15092 10.8788 4.01472 10.9571 3.87835 11.0351C3.75809 11.1043 3.63847 11.1747 3.51969 11.2464C3.06892 11.5129 2.71037 11.5658 2.18744 11.4845C1.86995 11.3705 1.65475 11.1961 1.47393 10.912C1.27649 10.454 1.25357 10.0364 1.43548 9.57048C1.63532 9.26524 1.88342 9.10375 2.19598 8.92961C2.24604 8.90094 2.2961 8.87228 2.34767 8.84274C2.45996 8.77847 2.57242 8.71448 2.68501 8.65073C2.95677 8.49639 3.2271 8.3396 3.49761 8.18308C3.8809 7.96143 4.26468 7.74063 4.64837 7.5197C4.94748 7.34743 5.24656 7.17512 5.54559 7.00273C5.61931 6.96023 5.69303 6.91774 5.76898 6.87395C6.25944 6.59095 6.74872 6.30598 7.23748 6.02006C7.83068 5.67312 8.42633 5.33066 9.02337 4.9904C9.64311 4.63718 10.2615 4.28176 10.8776 3.92229C10.9427 3.88431 11.0079 3.84633 11.075 3.8072C11.4393 3.59419 11.8014 3.37808 12.1612 3.15741C12.6464 2.88316 13.2313 2.93127 13.7188 3.17033Z"
        fill="#F12A20"
      />
      <path
        d="M17.3633 20.3711C18.0626 20.3711 18.7619 20.3711 19.4824 20.3711C19.4824 23.4616 19.4824 26.5521 19.4824 29.7363C18.9861 29.7363 18.4899 29.7363 17.9785 29.7363C17.9419 29.6137 17.9052 29.491 17.8674 29.3646C17.6212 28.6337 17.2638 28.1884 16.5996 27.8049C16.0388 27.5349 15.3683 27.5241 14.7678 27.6647C14.1137 27.905 13.6606 28.3057 13.3301 28.916C13.2101 29.1818 13.1248 29.453 13.0566 29.7363C12.7404 29.7431 12.4242 29.7481 12.1079 29.7513C12.0003 29.7527 11.8928 29.7546 11.7852 29.757C11.6305 29.7603 11.4758 29.7618 11.321 29.763C11.273 29.7644 11.2251 29.7659 11.1757 29.7673C10.9411 29.7674 10.8227 29.7536 10.6358 29.6065C10.4358 29.3417 10.4509 29.1256 10.4547 28.8049C10.455 28.7566 10.4553 28.7084 10.4557 28.6586C10.4565 28.5393 10.4577 28.4201 10.459 28.3008C10.548 28.2982 10.637 28.2957 10.7287 28.293C10.8467 28.2885 10.9647 28.284 11.0828 28.2794C11.1413 28.2779 11.1998 28.2763 11.2601 28.2747C11.6102 28.2599 11.8654 28.2216 12.168 28.0273C12.4023 27.7622 12.4875 27.5511 12.4676 27.2041C12.4223 26.9727 12.3223 26.8348 12.168 26.6602C11.8127 26.432 11.4922 26.4189 11.0828 26.4081C11.0227 26.4057 10.9626 26.4034 10.9007 26.401C10.7535 26.3954 10.6062 26.3909 10.459 26.3867C10.4534 26.28 10.4495 26.1731 10.4462 26.0663C10.4438 26.0068 10.4414 25.9473 10.439 25.886C10.5025 25.3062 11.134 24.7229 11.5409 24.3466C12.2489 23.7942 13.1972 23.9134 14.0483 23.9536C14.3472 23.9664 14.6463 23.9706 14.9454 23.9754C15.1779 23.9793 15.4098 23.985 15.6422 23.9945C16.3676 24.0269 16.3676 24.0269 16.9905 23.6921C17.2142 23.4378 17.3018 23.226 17.309 22.8933C17.3103 22.8372 17.3117 22.7811 17.3131 22.7233C17.3142 22.663 17.3154 22.6028 17.3166 22.5407C17.3187 22.4478 17.3187 22.4478 17.3209 22.3531C17.3253 22.1553 17.3294 21.9575 17.3334 21.7596C17.3363 21.6255 17.3393 21.4915 17.3423 21.3574C17.3497 21.0286 17.3565 20.6999 17.3633 20.3711Z"
        fill={fill}
      />
      <path
        d="M19.9609 25.8398C24.4952 25.8398 29.0295 25.8398 33.7012 25.8398C33.7012 29.333 33.7012 29.333 33.4799 29.6539C33.2993 29.7774 33.1523 29.7594 32.9356 29.7564C32.853 29.7557 32.7704 29.755 32.6853 29.7544C32.5989 29.7526 32.5126 29.7509 32.4237 29.7491C32.293 29.7478 32.293 29.7478 32.1597 29.7463C31.9444 29.7439 31.729 29.7405 31.5137 29.7363C31.4947 29.6686 31.4947 29.6686 31.4754 29.5994C31.2635 28.8634 30.9555 28.2715 30.2776 27.8759C29.6602 27.5541 28.9423 27.5033 28.2685 27.6791C27.5613 27.9581 27.1163 28.3588 26.7969 29.0527C26.7292 29.2783 26.6615 29.5039 26.5918 29.7363C24.4036 29.7363 22.2154 29.7363 19.9609 29.7363C19.9609 29.1272 19.9609 28.5182 19.9609 27.8906C21.1565 27.8681 22.3521 27.8455 23.584 27.8223C23.6065 27.7095 23.6291 27.5967 23.6523 27.4805C22.4342 27.4579 21.216 27.4354 19.9609 27.4121C19.9609 26.8933 19.9609 26.3744 19.9609 25.8398ZM24.6777 27.6172C24.7229 27.7074 24.768 27.7977 24.8145 27.8906C25.1303 27.8906 25.4461 27.8906 25.7715 27.8906C25.8166 27.8004 25.8617 27.7102 25.9082 27.6172C25.782 27.4515 25.721 27.4146 25.5109 27.3849C25.439 27.3854 25.3671 27.3859 25.293 27.3865C25.2211 27.3859 25.1492 27.3854 25.0751 27.3849C24.8649 27.4146 24.804 27.4515 24.6777 27.6172Z"
        fill={fill}
      />
      <path
        d="M21.5332 20.3711C21.9844 20.3711 22.4355 20.3711 22.9004 20.3711C22.9045 20.5183 22.9087 20.6656 22.9129 20.8173C22.9172 20.9594 22.9215 21.1015 22.9258 21.2435C22.9288 21.3425 22.9317 21.4415 22.9344 21.5405C22.9383 21.6826 22.9427 21.8246 22.9471 21.9666C22.9496 22.0521 22.9521 22.1377 22.9547 22.2259C22.9467 22.4148 22.9467 22.4148 23.0371 22.4902C23.3281 22.5068 23.6195 22.5059 23.9109 22.5067C24.0574 22.5073 24.2038 22.5094 24.3502 22.5116C24.4429 22.512 24.5356 22.5124 24.6283 22.5127C24.7131 22.5133 24.7979 22.5139 24.8852 22.5146C24.9521 22.5066 25.019 22.4985 25.0879 22.4902C25.249 22.2485 25.2451 22.1334 25.2529 21.8464C25.2556 21.7607 25.2582 21.675 25.2609 21.5867C25.263 21.4972 25.2652 21.4076 25.2673 21.3153C25.2699 21.224 25.2726 21.1327 25.2753 21.0415C25.2818 20.818 25.2875 20.5946 25.293 20.3711C25.7216 20.3711 26.1502 20.3711 26.5918 20.3711C26.5918 22.0179 26.5918 23.6646 26.5918 25.3613C24.9225 25.3613 23.2531 25.3613 21.5332 25.3613C21.5332 23.7146 21.5332 22.0678 21.5332 20.3711ZM23.1055 23.8574C23.1332 24.0476 23.1332 24.0476 23.2422 24.1992C23.3589 24.2052 23.4759 24.2065 23.5928 24.2059C23.6635 24.2057 23.7342 24.2055 23.8071 24.2052C23.8815 24.2047 23.9559 24.2041 24.0326 24.2035C24.1073 24.2032 24.182 24.2029 24.2589 24.2026C24.4441 24.2017 24.6293 24.2006 24.8145 24.1992C24.8596 24.109 24.9047 24.0187 24.9512 23.9258C24.8341 23.7799 24.7746 23.7253 24.5869 23.6953C24.4953 23.6956 24.4953 23.6956 24.4019 23.6959C24.302 23.6959 24.302 23.6959 24.2002 23.696C24.1308 23.6971 24.0614 23.6982 23.9899 23.6993C23.9202 23.6991 23.8506 23.6989 23.7788 23.6987C23.4046 23.677 23.4046 23.677 23.1055 23.8574Z"
        fill={fill}
      />
      <path
        d="M24.3359 14.9023C24.7646 14.9023 25.1932 14.9023 25.6348 14.9023C25.6389 15.0496 25.643 15.1968 25.6473 15.3485C25.6515 15.4906 25.6559 15.6327 25.6602 15.7748C25.6632 15.8738 25.666 15.9728 25.6688 16.0718C25.6727 16.2138 25.6771 16.3558 25.6815 16.4978C25.684 16.5834 25.6865 16.669 25.6891 16.7571C25.6811 16.946 25.6811 16.946 25.7715 17.0215C26.0625 17.038 26.3539 17.0371 26.6453 17.0379C26.7918 17.0386 26.9382 17.0407 27.0846 17.0428C27.1773 17.0433 27.27 17.0437 27.3627 17.0439C27.4475 17.0446 27.5322 17.0452 27.6196 17.0459C27.6865 17.0378 27.7534 17.0298 27.8223 17.0215C27.9834 16.7798 27.9795 16.6646 27.9873 16.3777C27.9899 16.292 27.9926 16.2063 27.9953 16.118C27.9974 16.0284 27.9995 15.9388 28.0017 15.8466C28.0043 15.7553 28.007 15.664 28.0097 15.5727C28.0162 15.3493 28.0218 15.1258 28.0273 14.9023C28.456 14.9023 28.8846 14.9023 29.3262 14.9023C29.3262 16.5491 29.3262 18.1959 29.3262 19.8926C27.6794 19.8926 26.0326 19.8926 24.3359 19.8926C24.3359 18.2458 24.3359 16.599 24.3359 14.9023ZM25.9766 18.252C25.9314 18.3422 25.8863 18.4324 25.8398 18.5254C25.9545 18.6662 26.015 18.7252 26.1967 18.757C26.2545 18.7572 26.3123 18.7575 26.3718 18.7577C26.4349 18.758 26.4981 18.7582 26.5632 18.7585C26.6291 18.7577 26.6949 18.7569 26.7627 18.7561C26.8614 18.7573 26.8614 18.7573 26.9622 18.7585C27.0253 18.7582 27.0885 18.758 27.1536 18.7577C27.2403 18.7574 27.2403 18.7574 27.3287 18.757C27.5104 18.7252 27.5709 18.6662 27.6855 18.5254C27.6404 18.4352 27.5953 18.3449 27.5488 18.252C27.03 18.252 26.5111 18.252 25.9766 18.252Z"
        fill={fill}
      />
      <path
        d="M27.0703 20.3711C27.4989 20.3711 27.9275 20.3711 28.3691 20.3711C28.3733 20.5183 28.3774 20.6656 28.3817 20.8173C28.3859 20.9594 28.3902 21.1015 28.3946 21.2435C28.3976 21.3425 28.4004 21.4415 28.4031 21.5405C28.4071 21.6826 28.4114 21.8246 28.4159 21.9666C28.4184 22.0521 28.4209 22.1377 28.4235 22.2259C28.4155 22.4148 28.4155 22.4148 28.5059 22.4902C28.6625 22.4962 28.8193 22.4975 28.9761 22.4969C29.023 22.4968 29.07 22.4967 29.1183 22.4966C29.2688 22.4962 29.4192 22.4954 29.5697 22.4945C29.6715 22.4942 29.7733 22.4939 29.875 22.4936C30.125 22.4928 30.375 22.4916 30.625 22.4902C30.7223 22.2957 30.7084 22.1237 30.715 21.9065C30.7193 21.773 30.7193 21.773 30.7237 21.6368C30.7264 21.5425 30.7291 21.4481 30.7318 21.3538C30.7348 21.2589 30.7377 21.164 30.7408 21.0691C30.748 20.8364 30.7549 20.6038 30.7617 20.3711C31.1903 20.3711 31.6189 20.3711 32.0605 20.3711C32.0605 22.0179 32.0605 23.6646 32.0605 25.3613C30.4138 25.3613 28.767 25.3613 27.0703 25.3613C27.0703 23.7146 27.0703 22.0678 27.0703 20.3711ZM28.5742 23.9258C28.6193 24.016 28.6645 24.1063 28.7109 24.1992C28.9701 24.2032 29.2293 24.2056 29.4885 24.2078C29.5993 24.2095 29.5993 24.2095 29.7123 24.2112C29.818 24.2119 29.818 24.2119 29.9259 24.2126C29.9911 24.2133 30.0562 24.214 30.1234 24.2147C30.2964 24.215 30.2964 24.215 30.4199 24.0625C30.3922 23.8723 30.3922 23.8723 30.2832 23.7207C30.0359 23.7016 29.7877 23.7049 29.5398 23.7036C29.4701 23.7022 29.4004 23.7008 29.3286 23.6993C29.2617 23.699 29.1948 23.6986 29.1259 23.6983C29.0337 23.6973 29.0337 23.6973 28.9395 23.6963C28.7505 23.7251 28.6917 23.7789 28.5742 23.9258Z"
        fill={fill}
      />
      <path
        d="M14.3547 20.3511C14.427 20.3514 14.4994 20.3517 14.5739 20.352C14.8045 20.3531 15.035 20.3557 15.2655 20.3583C15.422 20.3593 15.5785 20.3603 15.7351 20.3611C16.1183 20.3634 16.5015 20.3668 16.8848 20.3711C16.8898 20.7543 16.8936 21.1374 16.896 21.5206C16.8971 21.6509 16.8985 21.7812 16.9002 21.9115C16.9027 22.099 16.9039 22.2865 16.9048 22.474C16.9059 22.532 16.9069 22.5901 16.908 22.6499C16.9081 22.9686 16.8994 23.1966 16.6797 23.4473C16.4206 23.5766 16.2102 23.6008 15.9226 23.5995C15.7994 23.5995 15.7994 23.5995 15.6738 23.5995C15.5419 23.5985 15.5419 23.5985 15.4073 23.5974C15.3158 23.5971 15.2244 23.5969 15.1329 23.5968C14.893 23.5963 14.653 23.5949 14.4131 23.5934C14.1679 23.592 13.9228 23.5914 13.6776 23.5907C13.1972 23.5892 12.7168 23.5869 12.2363 23.584C12.3377 23.064 12.4563 22.5531 12.5952 22.0417C12.614 21.9684 12.6328 21.8951 12.6521 21.8196C12.7957 21.2932 12.9764 20.8217 13.3988 20.4582C13.7135 20.3243 14.0164 20.346 14.3547 20.3511Z"
        fill={fill}
        fillOpacity="0.32"
      />
      <path
        d="M30.1385 28.2637C30.573 28.5809 30.9071 28.9274 31.035 29.4629C31.1159 30.2019 31.0488 30.7736 30.588 31.3783C30.2348 31.7758 29.8199 31.9636 29.2937 32.0157C28.5361 32.0351 28.1017 31.9081 27.5476 31.3903C27.1206 30.918 27.0447 30.3962 27.0517 29.7804C27.0942 29.2062 27.3162 28.8009 27.7417 28.4167C28.4116 27.8947 29.4014 27.8214 30.1385 28.2637ZM28.4373 29.1211C28.2301 29.3144 28.0425 29.5276 28.0109 29.8164C27.9994 30.2147 28.0218 30.4536 28.3006 30.7617C28.598 31.0308 28.8418 31.0788 29.2304 31.0613C29.5741 31.0065 29.7512 30.828 29.9626 30.5652C30.1057 30.3001 30.1804 30.1077 30.1185 29.806C30.0071 29.4524 29.8488 29.2566 29.5311 29.0527C29.1356 28.8743 28.8082 28.892 28.4373 29.1211Z"
        fill={fill}
      />
      <path
        d="M16.5989 28.2542C17.0244 28.5815 17.4074 28.9876 17.5001 29.5311C17.5707 30.286 17.4793 30.8101 17.0002 31.3982C16.6578 31.7669 16.2888 31.9695 15.7842 32.0083C15.0884 32.023 14.5791 31.9478 14.0565 31.4665C13.5808 30.9398 13.4724 30.4274 13.5048 29.7282C13.5673 29.1831 13.8194 28.7666 14.2244 28.4013C14.8823 27.8962 15.8782 27.824 16.5989 28.2542ZM14.7059 29.2662C14.513 29.5271 14.4369 29.7538 14.4239 30.078C14.474 30.3962 14.5941 30.6162 14.8383 30.8256C15.1807 31.066 15.4465 31.0801 15.8595 31.035C16.1902 30.8757 16.3838 30.6822 16.543 30.3514C16.5975 30.01 16.5826 29.75 16.432 29.4371C16.2027 29.1837 15.989 29.0265 15.6629 28.9201C15.2833 28.9125 15.0079 29.0429 14.7059 29.2662Z"
        fill={fill}
      />
      <path
        d="M28.8477 20.3711C29.3214 20.3711 29.7951 20.3711 30.2832 20.3711C30.2832 20.9351 30.2832 21.499 30.2832 22.0801C29.8095 22.0801 29.3357 22.0801 28.8477 22.0801C28.8477 21.5161 28.8477 20.9521 28.8477 20.3711Z"
        fill={fill}
        fillOpacity="0.3"
      />
      <path
        d="M23.3789 20.3711C23.8526 20.3711 24.3264 20.3711 24.8145 20.3711C24.8145 20.9351 24.8145 21.499 24.8145 22.0801C24.3407 22.0801 23.867 22.0801 23.3789 22.0801C23.3789 21.5161 23.3789 20.9521 23.3789 20.3711Z"
        fill="#F1BEBB"
      />
      <path
        d="M26.1133 14.9023C26.587 14.9023 27.0607 14.9023 27.5488 14.9023C27.5488 15.4663 27.5488 16.0303 27.5488 16.6113C27.0751 16.6113 26.6014 16.6113 26.1133 16.6113C26.1133 16.0474 26.1133 15.4834 26.1133 14.9023Z"
        fill={fill}
        fillOpacity="0.3"
      />
      <path
        d="M10.459 26.865C10.6698 26.8576 10.8804 26.8522 11.0913 26.8479C11.151 26.8456 11.2106 26.8434 11.2721 26.841C11.7144 26.8342 11.7144 26.8342 11.9341 26.99C12.067 27.1931 12.0709 27.3105 12.0312 27.5486C11.9341 27.6971 11.9341 27.6971 11.7578 27.8221C11.5347 27.8557 11.3162 27.8478 11.0913 27.8391C11.0306 27.8379 10.9699 27.8367 10.9073 27.8354C10.7578 27.8322 10.6084 27.8273 10.459 27.8221C10.459 27.5062 10.459 27.1904 10.459 26.865Z"
        fill={fill}
      />
      <path
        d="M15.9277 29.5311C16.096 29.7835 16.1104 29.99 16.0644 30.283C15.9619 30.4539 15.9619 30.4539 15.791 30.5565C15.6007 30.5939 15.4343 30.5951 15.2441 30.5565C15.056 30.4262 14.99 30.3319 14.9066 30.1207C14.9007 29.8711 14.9698 29.7374 15.1074 29.5311C15.3989 29.3367 15.614 29.4067 15.9277 29.5311Z"
        fill="#F1BEBB"
      />
      <path
        d="M29.5315 29.5997C29.6426 29.8261 29.6426 29.8261 29.6682 30.0782C29.5284 30.4557 29.5284 30.4557 29.3264 30.5567C28.8443 30.5956 28.8443 30.5956 28.6086 30.4542C28.4643 30.2137 28.4499 30.0101 28.5061 29.7364C28.6265 29.5686 28.7221 29.4927 28.9034 29.3989C29.1578 29.3916 29.3149 29.4714 29.5315 29.5997Z"
        fill="#F1BEBB"
      />
    </svg>
  );
};

export default WarehousesIcon;