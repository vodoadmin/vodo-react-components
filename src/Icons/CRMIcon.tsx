import React from "react";
const CRMIcon = ({ fill = "#EB3D34", width = 35, height = 35 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5273 13.6719C12.693 13.6719 14.8586 13.6719 17.0898 13.6719C17.0898 14.2358 17.0898 14.7998 17.0898 15.3809C16.9319 15.4711 16.774 15.5613 16.6113 15.6543C16.4841 15.8299 16.4729 15.9435 16.449 16.1627C16.2913 16.5084 16.0687 16.5575 15.7256 16.6901C15.5279 16.7452 15.3792 16.7684 15.1758 16.748C15.1363 16.7142 15.0968 16.6804 15.0562 16.6455C14.8498 16.5079 14.6946 16.5017 14.4497 16.5101C14.0659 16.5876 13.8175 16.8643 13.5693 17.1497C13.4316 17.4366 13.4316 17.5931 13.4668 17.9102C13.5594 18.0968 13.5594 18.0968 13.6719 18.252C13.754 18.445 13.739 18.5302 13.6836 18.7369C13.4214 19.365 13.4214 19.365 13.1448 19.5137C12.9456 19.5721 12.9456 19.5721 12.7549 19.6055C12.5002 19.7013 12.5002 19.7013 12.3047 20.2344C11.2444 20.2344 10.1842 20.2344 9.0918 20.2344C9.08924 19.9752 9.08669 19.7161 9.08405 19.449C9.0809 19.1986 9.07739 18.9482 9.07386 18.6977C9.07158 18.5234 9.06966 18.3491 9.06811 18.1747C9.06583 17.9244 9.06225 17.6742 9.05842 17.4239C9.05798 17.3457 9.05754 17.2675 9.05709 17.187C9.05574 17.1144 9.05439 17.0419 9.05299 16.9672C9.05186 16.8713 9.05186 16.8713 9.05069 16.7735C9.03542 16.6076 9.03542 16.6076 8.93027 16.4855C8.81659 16.3867 8.81659 16.3867 8.63892 16.4233C8.48126 16.4594 8.48126 16.4594 8.4082 16.543C8.4007 16.6744 8.39801 16.806 8.39719 16.9376C8.39653 17.022 8.39587 17.1064 8.3952 17.1934C8.39487 17.2863 8.39457 17.3791 8.39432 17.472C8.39392 17.5666 8.39353 17.6612 8.39314 17.7558C8.39242 17.9543 8.39202 18.1529 8.39178 18.3514C8.39141 18.6062 8.38976 18.861 8.38782 19.1158C8.38655 19.3112 8.38619 19.5067 8.38608 19.7021C8.38588 19.7961 8.38533 19.89 8.38443 19.984C8.38327 20.1152 8.38352 20.2465 8.38384 20.3778C8.38359 20.4525 8.38334 20.5273 8.38308 20.6044C8.39552 20.6919 8.39552 20.6919 8.4082 20.7812C8.63624 20.9333 8.70373 20.9342 8.96891 20.9311C9.07776 20.9305 9.07776 20.9305 9.18881 20.9299C9.26721 20.9289 9.34561 20.928 9.42638 20.927C9.59208 20.9271 9.75777 20.9273 9.92346 20.9276C10.185 20.9274 10.4464 20.9265 10.7079 20.9234C10.9601 20.9207 11.2121 20.9215 11.4643 20.9228C11.5423 20.921 11.6203 20.9193 11.7007 20.9175C12.2356 20.9239 12.2356 20.9239 12.4416 21.11C12.5512 21.2595 12.5512 21.2595 12.6373 21.4093C12.7088 21.5514 12.7088 21.5514 12.8924 21.6002C12.948 21.6049 13.0036 21.6096 13.0609 21.6144C13.2377 21.6539 13.2377 21.6539 13.3984 21.7383C13.5861 22.0447 13.7673 22.4149 13.7205 22.7818C13.6719 22.9004 13.6719 22.9004 13.5651 23.0585C13.4358 23.3001 13.4335 23.4497 13.4668 23.7207C13.6484 24.0839 13.9368 24.4013 14.2871 24.6094C14.5238 24.6591 14.7349 24.6647 14.9707 24.6094C15.0625 24.5419 15.1538 24.4737 15.2441 24.4043C15.6382 24.4122 16.078 24.5209 16.4062 24.7461C16.472 24.9038 16.4909 25.0422 16.5104 25.2115C16.5492 25.3899 16.6015 25.4498 16.7395 25.5664C17.0924 25.7922 17.4302 25.8104 17.8418 25.7715C18.0766 25.7102 18.2645 25.6184 18.4442 25.451C18.5437 25.2832 18.5437 25.2832 18.5425 25.0281C18.5724 24.8866 18.5724 24.8866 18.6621 24.7461C18.8299 24.6432 18.9782 24.5648 19.1577 24.4897C19.2026 24.47 19.2475 24.4503 19.2937 24.43C19.4279 24.3797 19.4279 24.3797 19.6875 24.3359C19.907 24.4604 19.907 24.4604 20.0977 24.6094C20.3713 24.6818 20.612 24.6613 20.8643 24.5314C21.1515 24.3282 21.3818 24.1108 21.5332 23.7891C21.594 23.395 21.5373 23.1686 21.3281 22.832C21.3324 22.6483 21.3324 22.6483 21.3965 22.4219C21.4186 22.3373 21.4186 22.3373 21.4411 22.251C21.5887 21.7829 21.5887 21.7829 21.8152 21.6584C21.9226 21.6265 22.031 21.5975 22.1402 21.5719C22.3407 21.5184 22.4348 21.4232 22.5586 21.2598C22.6053 21.1692 22.651 21.0781 22.6953 20.9863C22.7399 20.9859 22.7846 20.9855 22.8306 20.9851C23.2952 20.9807 23.7598 20.975 24.2245 20.9684C24.3979 20.9661 24.5712 20.9642 24.7446 20.9626C24.9939 20.9604 25.2432 20.9568 25.4924 20.9529C25.6087 20.9523 25.6087 20.9523 25.7272 20.9516C25.7998 20.9503 25.8723 20.9489 25.947 20.9475C26.0106 20.9468 26.0742 20.946 26.1397 20.9452C26.3621 20.9113 26.4871 20.8574 26.6602 20.7129C26.7106 20.5292 26.7106 20.5292 26.7011 20.3164C26.7015 20.2349 26.702 20.1535 26.7024 20.0696C26.7011 19.9816 26.6997 19.8935 26.6983 19.8029C26.6981 19.7117 26.6979 19.6205 26.6979 19.5293C26.6974 19.3383 26.6959 19.1473 26.6935 18.9563C26.6904 18.7115 26.6894 18.4667 26.6891 18.2219C26.6888 18.0336 26.6877 17.8454 26.6864 17.6571C26.6855 17.523 26.685 17.3888 26.6844 17.2547C26.6833 17.1732 26.6822 17.0918 26.6811 17.0079C26.68 16.9002 26.68 16.9002 26.6789 16.7903C26.6725 16.5954 26.6725 16.5954 26.5234 16.4062C26.3525 16.3778 26.3525 16.3778 26.1816 16.4062C26.0069 16.581 26.0266 16.6483 26.0231 16.8911C26.0218 16.9636 26.0204 17.0361 26.019 17.1108C26.0182 17.1894 26.0174 17.2679 26.0166 17.3489C26.0153 17.4291 26.014 17.5093 26.0126 17.592C26.0085 17.849 26.0053 18.106 26.0022 18.363C25.9996 18.537 25.9969 18.7109 25.9942 18.8848C25.9875 19.3119 25.9821 19.7389 25.9766 20.166C24.8937 20.166 23.8109 20.166 22.6953 20.166C22.56 19.9292 22.56 19.9292 22.4219 19.6875C22.2516 19.5642 22.1256 19.5468 21.9156 19.5105C21.6699 19.4141 21.6699 19.4141 21.5239 19.1908C21.4866 19.1008 21.4513 19.01 21.4178 18.9185C21.3982 18.8736 21.3785 18.8288 21.3582 18.7825C21.306 18.6482 21.306 18.6482 21.2598 18.3887C21.3842 18.1694 21.3842 18.1694 21.5332 17.9785C21.5969 17.7188 21.5834 17.4745 21.4729 17.2295C21.2817 16.939 21.0321 16.687 20.7129 16.543C20.3782 16.4764 20.1657 16.4976 19.8798 16.6882C19.6875 16.8164 19.6875 16.8164 19.4952 16.7822C19.4233 16.7484 19.3514 16.7146 19.2773 16.6797C19.2004 16.6552 19.2004 16.6552 19.1219 16.6303C18.7004 16.4836 18.7004 16.4836 18.5916 16.2637C18.5617 16.1566 18.5338 16.0489 18.5078 15.9408C18.411 15.6551 18.1736 15.5126 17.9102 15.3809C17.9102 14.8169 17.9102 14.2529 17.9102 13.6719C20.0758 13.6719 22.2414 13.6719 24.4727 13.6719C24.4727 14.3261 24.4727 14.9803 24.4727 15.6543C24.4952 15.6994 24.5178 15.7445 24.541 15.791C25.7523 16.1948 27.0925 15.9036 28.3691 15.9277C28.3691 19.7401 28.3691 23.5525 28.3691 27.4805C21.1955 27.4805 14.0219 27.4805 6.63086 27.4805C6.63086 23.6681 6.63086 19.8557 6.63086 15.9277C7.82646 15.9052 9.02207 15.8826 10.2539 15.8594C10.3441 15.8143 10.4344 15.7691 10.5273 15.7227C10.5273 15.0459 10.5273 14.3691 10.5273 13.6719Z"
        fill={fill}
      />
      <path
        d="M17.1582 16.1328C17.3838 16.1328 17.6094 16.1328 17.8418 16.1328C17.9329 16.4062 18.0241 16.6797 18.1152 16.9531C18.3001 17.0261 18.3001 17.0261 18.5254 17.0898C18.9779 17.2808 18.9779 17.2808 19.1703 17.3669C19.4628 17.4898 19.6552 17.5198 19.9609 17.4316C20.0202 17.395 20.0794 17.3583 20.1404 17.3206C20.3027 17.2266 20.3027 17.2266 20.4437 17.2308C20.6226 17.3174 20.7283 17.4111 20.8496 17.5684C20.843 17.7606 20.7553 17.8947 20.6702 18.0682C20.534 18.4335 20.5985 18.7169 20.7559 19.0651C20.7993 19.1547 20.8434 19.2439 20.8881 19.3329C21.123 19.8088 21.123 19.8088 21.123 19.9609C21.1651 19.9749 21.2071 19.989 21.2504 20.0034C21.4814 20.0804 21.7124 20.1574 21.9434 20.2344C21.9434 20.46 21.9434 20.6855 21.9434 20.918C21.792 20.9625 21.6407 21.007 21.4894 21.0515C21.0821 21.2322 20.9532 21.5754 20.7941 21.9647C20.7719 22.0149 20.7497 22.0651 20.7269 22.1168C20.5889 22.4499 20.5522 22.677 20.6445 23.0371C20.6812 23.0977 20.7178 23.1584 20.7556 23.2208C20.8496 23.3789 20.8496 23.3789 20.8453 23.5199C20.7588 23.6988 20.6651 23.8044 20.5078 23.9258C20.318 23.9195 20.2105 23.8433 20.0464 23.7463C19.6839 23.593 19.3471 23.6841 18.9919 23.8224C18.8973 23.8633 18.803 23.9048 18.7091 23.9471C18.6611 23.9674 18.6131 23.9876 18.5637 24.0084C18.3023 24.1238 18.1158 24.2171 17.9785 24.4727C17.9261 24.6171 17.9261 24.6171 17.8973 24.7632C17.879 24.8478 17.8607 24.9324 17.8418 25.0195C17.6162 25.0195 17.3906 25.0195 17.1582 25.0195C17.1137 24.8682 17.0692 24.7169 17.0247 24.5656C16.8447 24.16 16.5032 24.0296 16.1157 23.8702C16.0661 23.8481 16.0165 23.8259 15.9654 23.8031C15.6008 23.6514 15.3572 23.6346 14.9707 23.7207C14.8783 23.7874 14.7869 23.8554 14.6973 23.9258C14.502 23.9197 14.4221 23.8562 14.2657 23.7378C14.1504 23.584 14.1504 23.584 14.1547 23.4216C14.2188 23.2422 14.2188 23.2422 14.3298 23.0457C14.4784 22.7079 14.3844 22.4126 14.2609 22.0771C14.2219 21.9824 14.1822 21.888 14.1418 21.7938C14.1233 21.7461 14.1048 21.6984 14.0858 21.6492C13.9288 21.281 13.7625 21.1512 13.3984 20.9863C13.209 20.9334 13.209 20.9334 13.0566 20.918C13.0566 20.6924 13.0566 20.4668 13.0566 20.2344C13.208 20.1899 13.3593 20.1454 13.5106 20.1009C13.8761 19.9387 14.0015 19.6693 14.1428 19.3145C14.1636 19.2599 14.1845 19.2054 14.2059 19.1492C14.2281 19.0952 14.2503 19.0411 14.2731 18.9855C14.3957 18.67 14.4591 18.4509 14.3555 18.1152C14.3188 18.056 14.2822 17.9968 14.2444 17.9358C14.1504 17.7734 14.1504 17.7734 14.1547 17.6324C14.2423 17.4513 14.3309 17.3476 14.4922 17.2266C14.7132 17.2324 14.841 17.2988 15.0348 17.406C15.3132 17.531 15.4944 17.4867 15.7802 17.3883C15.9144 17.3365 16.0472 17.2822 16.1798 17.2266C16.6683 17.0253 16.6683 17.0253 16.8848 16.9531C17.0145 16.6936 17.0816 16.4118 17.1582 16.1328ZM15.7368 19.135C15.3348 19.6324 15.2002 20.1423 15.2212 20.778C15.2972 21.468 15.6104 21.971 16.1328 22.4219C16.747 22.8131 17.3573 22.9274 18.0789 22.8029C18.7845 22.6005 19.2627 22.0866 19.6191 21.4648C19.8491 20.9249 19.8391 20.2446 19.6255 19.6979C19.3073 19.0716 18.8013 18.6328 18.158 18.3588C17.1678 18.2051 16.4288 18.3948 15.7368 19.135Z"
        fill={fill}
        fillOpacity="0.8"
      />
      <path
        d="M16.83 6.06102C16.8818 6.06056 16.9335 6.06011 16.9868 6.05964C17.0957 6.05895 17.2045 6.05863 17.3134 6.05865C17.4771 6.05835 17.6406 6.05587 17.8043 6.05328C18.5772 6.04747 19.4105 6.07847 19.9994 6.64795C20.4429 7.08782 20.6177 7.52422 20.7129 8.13477C20.7129 8.42803 20.7129 8.72129 20.7129 9.02344C18.6149 9.02344 16.517 9.02344 14.3555 9.02344C14.3555 7.3324 14.3555 7.3324 15.0294 6.62472C15.5308 6.17739 16.1768 6.06308 16.83 6.06102Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M28.1619 12.1514C28.312 12.1507 28.4621 12.1486 28.6123 12.1465C29.4365 12.1402 30.2081 12.1889 30.8301 12.7831C31.2246 13.174 31.4038 13.5326 31.5137 14.0819C31.5137 14.4203 31.5137 14.7586 31.5137 15.1073C29.4157 15.1073 27.3178 15.1073 25.1562 15.1073C25.1562 13.4111 25.1562 13.4111 25.7587 12.771C26.478 12.1712 27.2693 12.1538 28.1619 12.1514Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M6.49431 12.1552C6.64656 12.1551 6.79878 12.1538 6.95103 12.1525C7.77708 12.1491 8.48851 12.1862 9.16016 12.7148C9.86368 13.4302 9.84375 14.069 9.84375 15.1073C7.7458 15.1073 5.64785 15.1073 3.48633 15.1073C3.48633 13.5029 3.48633 13.5029 4.16245 12.7821C4.83729 12.1497 5.61017 12.1551 6.49431 12.1552Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M12.2363 30.8984C15.6878 30.8984 19.1393 30.8984 22.6953 30.8984C22.6953 31.4173 22.6953 31.9361 22.6953 32.4707C19.2438 32.4707 15.7924 32.4707 12.2363 32.4707C12.2363 31.9519 12.2363 31.433 12.2363 30.8984Z"
        fill="#E94539"
      />
      <path
        d="M15.6886 28.1944C15.7908 28.1919 15.7908 28.1919 15.8951 28.1894C15.9724 28.187 16.0498 28.1846 16.1295 28.1821C16.2133 28.1811 16.297 28.1802 16.3833 28.1792C16.4695 28.1778 16.5558 28.1764 16.6447 28.175C16.8276 28.1727 17.0103 28.1711 17.1932 28.1704C17.4262 28.1693 17.6588 28.1635 17.8917 28.1564C18.1152 28.1507 18.3387 28.1504 18.5622 28.1493C18.6451 28.1463 18.7281 28.1433 18.8135 28.1401C19.1718 28.1439 19.3933 28.1536 19.6683 28.3966C19.8239 28.5864 19.9613 28.7805 20.0977 28.9843C20.43 29.3667 20.8253 29.6578 21.2339 29.9536C21.2875 29.9947 21.3412 30.0357 21.3965 30.078C21.3965 30.1006 21.3965 30.1232 21.3965 30.1464C18.8248 30.1464 16.2531 30.1464 13.6035 30.1464C13.8368 29.9131 14.0478 29.7182 14.3042 29.5184C14.7127 29.1883 15.1251 28.8154 15.3995 28.3621C15.5176 28.2323 15.5176 28.2323 15.6886 28.1944Z"
        fill={fill}
      />
      <path
        d="M18.2861 2.63621C18.6664 2.86635 18.9378 3.20031 19.0723 3.62315C19.1274 4.15935 19.1472 4.689 18.7988 5.12705C18.4945 5.44865 18.2047 5.65068 17.755 5.69689C17.1894 5.70313 16.7765 5.6861 16.3555 5.28781C16.028 4.9289 15.8914 4.58995 15.8594 4.10166C15.8965 3.59671 16.0518 3.23401 16.4063 2.87119C16.9088 2.45342 17.6858 2.36344 18.2861 2.63621Z"
        fill={fill}
        fillOpacity="0.75"
      />
      <path
        d="M29.0869 8.72451C29.4932 8.9683 29.7337 9.32823 29.873 9.77554C29.9502 10.3264 29.847 10.7532 29.5313 11.2111C29.2673 11.5054 28.9637 11.6693 28.5707 11.7126C28.0264 11.7191 27.6265 11.6888 27.2244 11.3011C26.8762 10.9128 26.7363 10.5716 26.7285 10.049C26.7822 9.57923 26.9838 9.21761 27.3395 8.90396C27.8367 8.53865 28.5165 8.46376 29.0869 8.72451Z"
        fill="#E94539"
        fillOpacity="0.75"
      />
      <path
        d="M7.53678 8.79633C7.94203 9.10276 8.18504 9.4771 8.27138 9.98034C8.2964 10.4686 8.17288 10.8356 7.86122 11.2108C7.58369 11.4971 7.30016 11.6683 6.90072 11.7123C6.35402 11.7188 5.96419 11.6843 5.55436 11.3056C5.18358 10.9046 5.08991 10.5121 5.10095 9.97233C5.15639 9.55047 5.3528 9.17232 5.66945 8.88659C6.21588 8.52974 6.95939 8.45302 7.53678 8.79633Z"
        fill={fill}
        fillOpacity="0.75"
      />
      <path
        d="M18.0981 19.1535C18.4967 19.3758 18.8372 19.6312 18.9735 20.0881C19.0818 20.6089 19.0228 21.0849 18.7305 21.5332C18.4421 21.8593 18.1381 22.0497 17.6987 22.0948C17.2138 22.1156 16.8607 21.9934 16.4575 21.7298C16.1368 21.3944 15.9836 21.0414 15.9619 20.5762C15.9806 20.1756 16.0972 19.8183 16.3622 19.5121C16.8705 19.0556 17.4607 18.9516 18.0981 19.1535Z"
        fill={fill}
        fillOpacity="0.67"
      />
      <path
        d="M17.3547 10.0991C17.4026 10.0995 17.4506 10.0998 17.5 10.1002C17.5479 10.0998 17.5958 10.0995 17.6452 10.0991C17.7734 10.1173 17.7734 10.1173 17.9101 10.254C17.9254 10.428 17.9325 10.5944 17.9331 10.7686C17.9335 10.8195 17.934 10.8704 17.9345 10.9228C17.9351 11.0306 17.9355 11.1383 17.9354 11.2461C17.9357 11.411 17.9382 11.5758 17.9408 11.7407C17.9412 11.8453 17.9415 11.9499 17.9416 12.0546C17.9426 12.1039 17.9436 12.1533 17.9446 12.2041C17.9426 12.427 17.9389 12.547 17.7848 12.7143C17.5758 12.8117 17.4447 12.7766 17.2265 12.7149C17.0564 12.5448 17.073 12.4441 17.0708 12.2119C17.0711 12.1622 17.0714 12.1125 17.0716 12.0612C17.0715 12.0102 17.0714 11.9591 17.0712 11.9065C17.0711 11.7985 17.0714 11.6904 17.072 11.5824C17.0727 11.4168 17.072 11.2512 17.0711 11.0855C17.0712 10.9807 17.0714 10.8758 17.0716 10.771C17.0714 10.7213 17.0711 10.6716 17.0708 10.6203C17.0753 10.1387 17.0753 10.1387 17.3547 10.0991Z"
        fill={fill}
        fillOpacity="0.75"
      />
    </svg>
  );
};

export default CRMIcon;