import React from "react";
const ContactsIcon = ({ fill = "#EB3D34", width = 35, height = 35 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.97266 1.09375C13.2665 1.09375 19.5604 1.09375 26.0449 1.09375C26.0675 2.60518 26.09 4.1166 26.1133 5.67383C26.1358 5.71895 26.1584 5.76406 26.1816 5.81055C28.5165 5.84438 28.5165 5.84438 30.8984 5.87891C30.8984 7.86406 30.8984 9.84922 30.8984 11.8945C30.7137 11.7098 30.6125 11.5668 30.4851 11.3431C30.4447 11.2726 30.4043 11.2021 30.3627 11.1295C30.3196 11.0535 30.2764 10.9774 30.2319 10.899C30.1636 10.7796 30.0952 10.6602 30.0268 10.5408C29.9554 10.416 29.8842 10.2911 29.813 10.1662C29.6225 9.83221 29.4313 9.49858 29.2396 9.16525C29.1506 9.01051 29.0618 8.85567 28.9732 8.70072C28.9328 8.63045 28.8925 8.56018 28.8509 8.48778C28.8155 8.42606 28.7801 8.36434 28.7437 8.30076C28.6496 8.14635 28.5487 8.00374 28.4375 7.86133C27.9658 7.91417 27.6044 8.14366 27.2012 8.37586C27.0713 8.45037 26.9406 8.52319 26.8097 8.59592C26.2968 8.8859 25.8774 9.15344 25.6049 9.69849C25.5371 10.0751 25.6061 10.4341 25.7031 10.8008C25.5425 10.8858 25.3813 10.9675 25.2171 11.0456C25.0203 11.138 25.0203 11.138 24.8476 11.2502C24.6362 11.3633 24.5093 11.4119 24.2676 11.416C23.8918 11.272 23.5583 11.0385 23.2313 10.8073C22.6714 10.4741 21.906 10.7036 21.3101 10.8205C21.1712 10.8476 21.0321 10.873 20.893 10.8984C20.3838 10.9948 19.9182 11.1269 19.4458 11.3425C19.1391 11.4763 18.9881 11.4947 18.6707 11.3861C17.6255 11.0951 16.7218 11.4059 15.7121 11.7061C15.1338 11.8598 14.6996 11.9224 14.1675 11.6288C14.0243 11.5434 13.8819 11.4568 13.7402 11.369C13.669 11.3262 13.5978 11.2835 13.5245 11.2394C13.3857 11.1557 13.2474 11.0711 13.1097 10.9855C12.9913 10.9129 12.8715 10.8426 12.7497 10.7757C12.3902 10.5745 12.3902 10.5745 12.3018 10.3313C12.2969 10.2296 12.2969 10.2296 12.2919 10.1257C12.2707 9.74858 12.1666 9.49084 11.8945 9.22852C11.6096 9.0316 11.3095 8.86471 11.0059 8.69873C10.9246 8.65335 10.8434 8.60786 10.7623 8.56228C10.6131 8.47866 10.4636 8.3955 10.3137 8.31294C10.1172 8.20312 10.1172 8.20312 9.94202 8.08637C9.75043 7.98482 9.64695 7.95912 9.43359 7.99805C9.32122 8.10759 9.32122 8.10759 9.24187 8.26454C9.19125 8.35267 9.19125 8.35267 9.13961 8.44258C9.10409 8.50737 9.06858 8.57216 9.03198 8.63892C8.99413 8.70547 8.95628 8.77202 8.91728 8.84059C8.83548 8.9845 8.75421 9.12871 8.6734 9.27318C8.49714 9.58704 8.31679 9.89848 8.13647 10.21C8.00807 10.432 7.88034 10.6543 7.75265 10.8766C7.67503 11.0109 7.59733 11.1451 7.51953 11.2793C7.4811 11.3459 7.44267 11.4124 7.40307 11.481C7.36669 11.5431 7.33031 11.6052 7.29282 11.6692C7.2607 11.7243 7.22857 11.7794 7.19548 11.8361C7.10938 11.9629 7.10938 11.9629 6.97266 12.0312C6.97266 8.42188 6.97266 4.8125 6.97266 1.09375ZM9.71304 2.96439C9.62195 3.07812 9.62195 3.07812 9.64294 3.25134C9.69065 3.4232 9.69065 3.4232 9.82332 3.49561C10.0144 3.56744 10.1674 3.57239 10.3714 3.57285C10.4464 3.57302 10.5214 3.5732 10.5986 3.57338C10.6766 3.57285 10.7546 3.57232 10.835 3.57178C10.9129 3.57231 10.9909 3.57283 11.0713 3.57338C11.1463 3.5732 11.2213 3.57303 11.2985 3.57285C11.4012 3.57261 11.4012 3.57261 11.5059 3.57238C11.6942 3.55423 11.8061 3.52262 11.9629 3.41797C12.0367 3.25383 12.0367 3.25383 12.0312 3.07617C11.9603 2.9551 11.9603 2.9551 11.8262 2.87109C11.6177 2.83935 11.6177 2.83935 11.3797 2.84386C11.2918 2.84359 11.204 2.84333 11.1135 2.84306C11.0678 2.84349 11.0221 2.84391 10.975 2.84436C10.8354 2.84546 10.696 2.84437 10.5564 2.84306C10.4686 2.84332 10.3807 2.84358 10.2902 2.84386C10.1692 2.8442 10.1692 2.8442 10.0458 2.84456C9.84485 2.85485 9.84485 2.85485 9.71304 2.96439ZM13.7437 2.99815C13.6519 3.14629 13.6519 3.14629 13.7146 3.32825C13.7979 3.5076 13.7979 3.5076 14.0137 3.55469C14.3082 3.5725 14.6031 3.57051 14.8981 3.57178C15.0204 3.57389 15.0204 3.57389 15.1452 3.57605C15.2628 3.57658 15.2628 3.57658 15.3827 3.57712C15.4545 3.57776 15.5262 3.5784 15.6001 3.57905C15.8142 3.55173 15.9067 3.49306 16.0645 3.34961C16.0411 3.14654 16.0411 3.14654 15.9961 2.93945C15.7071 2.79496 15.3313 2.85278 15.0133 2.85092C14.8732 2.84974 14.7331 2.84674 14.593 2.84372C14.4607 2.84286 14.4607 2.84286 14.3258 2.84199C14.2447 2.84099 14.1636 2.83999 14.08 2.83897C13.8714 2.85224 13.8714 2.85224 13.7437 2.99815ZM17.7734 3.00781C17.7335 3.17578 17.7335 3.17578 17.7734 3.34961C18.0943 3.66517 18.5095 3.58979 18.9313 3.58887C19.0119 3.59081 19.0926 3.59274 19.1757 3.59474C19.5825 3.60782 19.5825 3.60782 19.9562 3.47618C20.0625 3.37604 20.0625 3.37604 20.166 3.21289C20.0765 2.99947 20.0765 2.99947 19.8926 2.87109C19.5753 2.85433 19.2575 2.85843 18.9398 2.85828C18.8064 2.85702 18.8064 2.85702 18.6703 2.85574C18.5852 2.85561 18.5001 2.85548 18.4124 2.85534C18.3342 2.85506 18.2559 2.85478 18.1753 2.85449C17.965 2.85629 17.965 2.85629 17.7734 3.00781ZM21.881 2.96439C21.7899 3.07812 21.7899 3.07812 21.8109 3.25134C21.8586 3.4232 21.8586 3.4232 21.9913 3.49561C22.1823 3.56744 22.3353 3.57239 22.5394 3.57285C22.6144 3.57302 22.6893 3.5732 22.7666 3.57338C22.8446 3.57285 22.9226 3.57232 23.0029 3.57178C23.0809 3.57231 23.1589 3.57283 23.2393 3.57338C23.3142 3.5732 23.3892 3.57303 23.4665 3.57285C23.5691 3.57261 23.5691 3.57261 23.6738 3.57238C23.8622 3.55423 23.9741 3.52262 24.1309 3.41797C24.2047 3.25383 24.2047 3.25383 24.1992 3.07617C24.1282 2.9551 24.1282 2.9551 23.9941 2.87109C23.7857 2.83935 23.7857 2.83935 23.5477 2.84386C23.4598 2.84359 23.372 2.84333 23.2814 2.84306C23.2357 2.84349 23.19 2.84391 23.143 2.84436C23.0034 2.84546 22.864 2.84437 22.7244 2.84306C22.6366 2.84332 22.5487 2.84358 22.4582 2.84386C22.3372 2.8442 22.3372 2.8442 22.2137 2.84456C22.0128 2.85485 22.0128 2.85485 21.881 2.96439ZM9.71304 5.69876C9.62195 5.81249 9.62195 5.81249 9.64294 5.98572C9.69065 6.15757 9.69065 6.15757 9.82332 6.22998C10.0144 6.30181 10.1674 6.30676 10.3714 6.30722C10.4464 6.3074 10.5214 6.30757 10.5986 6.30775C10.6766 6.30723 10.7546 6.3067 10.835 6.30615C10.9129 6.30668 10.9909 6.30721 11.0713 6.30775C11.1463 6.30758 11.2213 6.3074 11.2985 6.30722C11.4012 6.30699 11.4012 6.30699 11.5059 6.30675C11.6942 6.2886 11.8061 6.25699 11.9629 6.15234C12.0367 5.98821 12.0367 5.98821 12.0312 5.81055C11.9603 5.68948 11.9603 5.68948 11.8262 5.60547C11.6177 5.57372 11.6177 5.57372 11.3797 5.57823C11.2918 5.57797 11.204 5.5777 11.1135 5.57743C11.0678 5.57786 11.0221 5.57829 10.975 5.57873C10.8354 5.57983 10.696 5.57874 10.5564 5.57743C10.4686 5.57769 10.3807 5.57796 10.2902 5.57823C10.1692 5.57858 10.1692 5.57858 10.0458 5.57893C9.84485 5.58923 9.84485 5.58923 9.71304 5.69876ZM13.7437 5.73252C13.6519 5.88066 13.6519 5.88066 13.7146 6.06262C13.7979 6.24198 13.7979 6.24198 14.0137 6.28906C14.2954 6.30682 14.5774 6.30488 14.8596 6.30615C14.9373 6.30756 15.0151 6.30897 15.0951 6.31042C15.1702 6.31078 15.2453 6.31113 15.3226 6.31149C15.4254 6.31245 15.4254 6.31245 15.5302 6.31343C15.7522 6.28532 15.8821 6.21038 16.0645 6.08398C16.0411 5.88091 16.0411 5.88091 15.9961 5.67383C15.7071 5.52933 15.3313 5.58716 15.0133 5.58529C14.8732 5.58411 14.7331 5.58111 14.593 5.5781C14.4607 5.57724 14.4607 5.57724 14.3258 5.57636C14.2447 5.57537 14.1636 5.57437 14.08 5.57334C13.8714 5.58662 13.8714 5.58662 13.7437 5.73252ZM17.7734 5.74219C17.7279 5.91013 17.7279 5.91013 17.7734 6.08398C18.0215 6.27113 18.2054 6.31525 18.5128 6.3163C18.5876 6.31656 18.6624 6.31683 18.7394 6.3171C18.8168 6.31631 18.8942 6.31551 18.974 6.3147C19.0905 6.31589 19.0905 6.31589 19.2094 6.3171C19.2841 6.31684 19.3587 6.31657 19.4357 6.3163C19.5037 6.31607 19.5717 6.31584 19.6417 6.3156C19.8519 6.28504 19.9469 6.23177 20.0977 6.08398C20.1318 5.91017 20.1318 5.91017 20.0977 5.74219C19.9069 5.55143 19.7879 5.58782 19.5211 5.58731C19.4331 5.58713 19.345 5.58696 19.2542 5.58678C19.2083 5.58706 19.1623 5.58735 19.1149 5.58764C18.9748 5.58838 18.8347 5.58765 18.6946 5.58678C18.6064 5.58695 18.5182 5.58713 18.4274 5.58731C18.3463 5.58746 18.2652 5.58762 18.1816 5.58778C17.9659 5.59019 17.9659 5.59019 17.7734 5.74219ZM21.881 5.69876C21.7899 5.81249 21.7899 5.81249 21.8109 5.98572C21.8586 6.15757 21.8586 6.15757 21.9913 6.22998C22.1823 6.30181 22.3353 6.30676 22.5394 6.30722C22.6144 6.3074 22.6893 6.30757 22.7666 6.30775C22.8446 6.30723 22.9226 6.3067 23.0029 6.30615C23.0809 6.30668 23.1589 6.30721 23.2393 6.30775C23.3142 6.30758 23.3892 6.3074 23.4665 6.30722C23.5691 6.30699 23.5691 6.30699 23.6738 6.30675C23.8622 6.2886 23.9741 6.25699 24.1309 6.15234C24.2047 5.98821 24.2047 5.98821 24.1992 5.81055C24.1282 5.68948 24.1282 5.68948 23.9941 5.60547C23.7857 5.57372 23.7857 5.57372 23.5477 5.57823C23.4598 5.57797 23.372 5.5777 23.2814 5.57743C23.2357 5.57786 23.19 5.57829 23.143 5.57873C23.0034 5.57983 22.864 5.57874 22.7244 5.57743C22.6366 5.57769 22.5487 5.57796 22.4582 5.57823C22.3372 5.57858 22.3372 5.57858 22.2137 5.57893C22.0128 5.58923 22.0128 5.58923 21.881 5.69876Z"
        fill={fill}
      />
      <path
        d="M29.5997 17.7051C29.8048 17.7734 29.8048 17.7734 29.9287 17.9614C30.1978 18.3613 30.4406 18.5095 30.8985 18.6621C30.8985 22.7678 30.8985 26.8734 30.8985 31.1035C27.0922 31.1482 27.0922 31.1482 25.4997 31.1612C25.1358 31.1642 24.7719 31.1672 24.408 31.1703C24.3396 31.1709 24.3396 31.1709 24.2698 31.1714C23.5335 31.1777 22.7973 31.1864 22.061 31.196C21.3054 31.2058 20.5498 31.213 19.7941 31.2178C19.3697 31.2206 18.9453 31.2246 18.5209 31.2315C18.1215 31.2379 17.7222 31.2412 17.3228 31.2419C17.1761 31.2428 17.0294 31.2448 16.8828 31.2481C15.7714 31.272 15.7714 31.272 15.5029 31.0424C15.4093 30.8745 15.4093 30.8745 15.3341 30.6862C15.225 30.446 15.0712 30.2912 14.8809 30.1151C14.8464 30.0827 14.812 30.0504 14.7765 30.0171C14.6643 29.9126 14.5513 29.8092 14.4383 29.7056C14.3567 29.6297 14.2752 29.5536 14.1937 29.4775C14.0639 29.3562 13.934 29.235 13.8039 29.114C13.4801 28.8131 13.1594 28.5092 12.8402 28.2034C12.7935 28.1587 12.7468 28.114 12.6987 28.068C12.5064 27.8837 12.3142 27.6992 12.122 27.5148C11.5805 26.9952 11.0367 26.4788 10.4841 25.9711C9.90246 25.4357 9.32919 24.8925 8.76769 24.3359C8.70018 24.2691 8.70018 24.2691 8.6313 24.2008C7.58366 23.1551 6.72617 22.2553 6.69287 20.7002C6.71259 20.0511 6.80609 19.4258 6.97272 18.7988C7.01431 18.7813 7.05589 18.7637 7.09874 18.7456C7.15364 18.7219 7.20855 18.6983 7.26512 18.6739C7.31939 18.6507 7.37367 18.6275 7.42959 18.6036C7.65306 18.4933 7.81553 18.3521 7.99811 18.1836C8.03766 18.2139 8.07721 18.2441 8.11796 18.2753C8.23543 18.3652 8.35296 18.455 8.47053 18.5447C8.60311 18.646 8.73548 18.7476 8.86764 18.8495C9.26984 19.1601 9.26984 19.1601 9.69161 19.4429C10.156 19.7342 10.156 19.7342 10.2508 20.0221C10.2725 20.1642 10.2897 20.3071 10.3018 20.4504C10.3402 20.8129 10.4984 21.0307 10.7624 21.2811C11.1248 21.4528 11.4988 21.4886 11.8946 21.5332C11.9088 21.5827 11.923 21.6322 11.9376 21.6833C12.0836 22.1413 12.2283 22.4427 12.6465 22.6953C12.9575 22.8343 13.2676 22.8656 13.6036 22.9004C13.6272 22.9685 13.6272 22.9685 13.6514 23.0379C13.8204 23.4956 13.9852 23.7737 14.4025 24.0454C14.7032 24.1589 14.9935 24.1809 15.3126 24.1992C15.3268 24.2487 15.3409 24.2983 15.3556 24.3493C15.5303 24.8977 15.7332 25.1695 16.2269 25.4553C16.6896 25.5655 17.0802 25.5271 17.5001 25.293C17.6838 25.1263 17.6838 25.1263 17.8419 24.9512C17.932 24.8815 18.023 24.8129 18.1153 24.7461C18.1621 24.7737 18.209 24.8012 18.2572 24.8296C18.4719 24.9558 18.6866 25.0816 18.9014 25.2075C18.9751 25.2509 19.0488 25.2942 19.1247 25.3389C20.107 25.9629 20.107 25.9629 21.2256 26.003C21.7386 25.8255 22.0461 25.5274 22.3109 25.058C22.3744 24.7973 22.3998 24.5347 22.4219 24.2676C22.4769 24.2789 22.5319 24.2901 22.5886 24.3018C23.1382 24.3789 23.5838 24.3756 24.0626 24.0625C24.5548 23.6134 24.6925 23.2065 24.7462 22.5586C24.8138 22.5618 24.8815 22.5649 24.9512 22.5682C25.5516 22.5883 25.9754 22.5684 26.4501 22.1765C26.8353 21.7992 26.9188 21.3695 27.002 20.8496C27.0681 20.8536 27.1342 20.8575 27.2023 20.8616C27.8467 20.884 28.3457 20.8449 28.8389 20.3898C29.1348 20.045 29.2516 19.6607 29.2579 19.209C29.213 18.9701 29.1381 18.7523 29.0528 18.5254C29.0302 18.4352 29.0077 18.3449 28.9844 18.252C29.1875 18.0715 29.3905 17.891 29.5997 17.7051Z"
        fill={fill}
      />
      <path
        d="M12.0312 11.0742C12.2768 11.1669 12.5008 11.2766 12.7287 11.4067C12.7958 11.4448 12.8628 11.4829 12.9319 11.5222C13.036 11.5817 13.036 11.5817 13.1421 11.6425C13.3461 11.7587 13.5502 11.8749 13.7547 11.9902C13.8758 12.0597 13.9957 12.1311 14.114 12.2051C14.4605 12.4168 14.675 12.4813 15.0903 12.42C15.139 12.4131 15.1877 12.4061 15.2379 12.399C15.7189 12.3221 16.1815 12.1797 16.6471 12.0396C17.2992 11.8459 17.8679 11.748 18.5254 11.9629C18.4596 12.1295 18.393 12.295 18.3203 12.4588C17.9774 13.2503 17.9394 14.1161 17.8577 14.9662C17.8102 15.4241 17.7334 15.8523 17.6028 16.2942C17.5647 16.4938 17.5752 16.6235 17.6367 16.8164C17.895 16.9455 18.2071 16.9004 18.4912 16.9019C18.5566 16.9033 18.622 16.9047 18.6893 16.9061C19.2223 16.909 19.7517 16.858 20.1911 16.5285C20.4011 16.3061 20.525 16.0919 20.6531 15.8167C20.6878 15.7448 20.6878 15.7448 20.7232 15.6715C20.9054 15.2877 21.0611 14.8967 21.1914 14.4922C21.4631 14.5325 21.6567 14.6166 21.8929 14.7555C21.9628 14.7962 22.0328 14.837 22.1048 14.879C22.1798 14.9234 22.2549 14.9677 22.3322 15.0134C22.4115 15.0598 22.4908 15.1062 22.5702 15.1525C22.7351 15.2488 22.8999 15.3454 23.0646 15.442C23.4444 15.6646 23.8262 15.8835 24.2078 16.1029C24.8454 16.4705 25.4826 16.8391 26.1173 17.2119C26.4715 17.4199 26.8273 17.6243 27.1862 17.8242C27.2612 17.8665 27.3362 17.9088 27.4134 17.9523C27.5568 18.0331 27.7007 18.113 27.8453 18.1918C28.2395 18.4155 28.4711 18.5781 28.6426 19.0039C28.712 19.3231 28.6727 19.561 28.5229 19.8499C28.2721 20.1425 28.0755 20.2752 27.6898 20.3326C27.0532 20.3233 26.3642 19.7685 25.8313 19.4525C25.6885 19.3685 25.5456 19.2846 25.4027 19.2007C25.3292 19.1575 25.2556 19.1142 25.1798 19.0696C24.7899 18.841 24.3985 18.6147 24.007 18.3887C23.9349 18.347 23.8629 18.3052 23.7886 18.2623C23.651 18.1828 23.5131 18.1038 23.375 18.0252C23.2373 17.9464 23.1004 17.8661 22.9644 17.7844C22.8979 17.7455 22.8314 17.7067 22.7629 17.6666C22.7038 17.6313 22.6447 17.596 22.5838 17.5595C22.4225 17.4804 22.4225 17.4804 22.2638 17.5579C22.2258 17.5839 22.1877 17.6099 22.1484 17.6367C22.1513 17.7992 22.1513 17.7992 22.2168 17.9785C22.3899 18.121 22.3899 18.121 22.6227 18.2434C22.6887 18.2811 22.6887 18.2811 22.7561 18.3196C22.8581 18.3779 22.9604 18.4356 23.063 18.493C23.4208 18.6942 23.7755 18.901 24.1309 19.1064C24.2848 19.1954 24.4388 19.2843 24.5928 19.3732C24.6659 19.4154 24.739 19.4576 24.8143 19.5011C24.9932 19.604 25.1726 19.7059 25.3522 19.8074C25.4436 19.86 25.5349 19.9126 25.6262 19.9652C25.7022 20.0083 25.7781 20.0514 25.8564 20.0958C26.1266 20.2944 26.2769 20.5201 26.3824 20.8368C26.3885 21.1433 26.3182 21.3958 26.1816 21.6699C25.9295 21.9221 25.7382 22.0032 25.3824 22.0325C25.0537 22.0276 24.8256 21.9083 24.5453 21.7468C24.4954 21.7192 24.4455 21.6917 24.394 21.6632C24.237 21.5758 24.0813 21.4865 23.9258 21.3965C23.8766 21.368 23.8274 21.3395 23.7767 21.3102C23.3865 21.0831 22.9974 20.8539 22.6108 20.6206C22.4615 20.5308 22.3115 20.4423 22.1613 20.354C22.1159 20.3262 22.0705 20.2983 22.0237 20.2696C21.8825 20.1842 21.8825 20.1842 21.6699 20.0977C21.5038 20.1385 21.5038 20.1385 21.3965 20.2344C21.3965 20.3697 21.3965 20.5051 21.3965 20.6445C21.441 20.6607 21.4855 20.6768 21.5313 20.6934C22.2203 20.9859 22.8753 21.3967 23.5114 21.7896C23.5867 21.8357 23.662 21.8819 23.7397 21.9295C24.0319 22.166 24.1198 22.3908 24.1608 22.7594C24.1451 23.1323 23.9889 23.3921 23.7164 23.6481C23.3547 23.7789 22.9565 23.789 22.5919 23.6598C22.4232 23.5746 22.2626 23.4818 22.1014 23.3832C22.0432 23.3495 21.985 23.3159 21.9251 23.2813C21.7479 23.1787 21.5721 23.074 21.3965 22.9688C21.2394 22.8749 21.0822 22.7814 20.9242 22.6892C20.8309 22.6346 20.7382 22.579 20.6462 22.5222C20.5088 22.4379 20.5088 22.4379 20.3027 22.3535C20.1374 22.3949 20.1374 22.3949 20.0293 22.4902C20.0261 22.6516 20.0261 22.6516 20.0977 22.832C20.2586 22.9488 20.407 23.0419 20.5804 23.1354C20.6742 23.1888 20.7678 23.2425 20.8614 23.2964C20.9065 23.3222 20.9517 23.3479 20.9982 23.3745C21.2983 23.5495 21.5849 23.7228 21.7725 24.0198C21.8418 24.3838 21.8643 24.6754 21.6913 25.0067C21.4531 25.335 21.4531 25.335 21.1914 25.4297C20.5385 25.5292 20.1045 25.2981 19.5551 24.9683C19.4792 24.9249 19.4034 24.8816 19.3253 24.8369C18.9999 24.6479 18.7147 24.4765 18.457 24.1992C18.4999 24.1456 18.5427 24.0919 18.5868 24.0366C18.6433 23.9641 18.6997 23.8915 18.7561 23.819C18.8116 23.7484 18.8671 23.6778 18.9243 23.6051C19.1682 23.2322 19.2519 22.8809 19.185 22.4448C19.0764 22.0539 18.8882 21.7628 18.5361 21.5554C18.3522 21.4713 18.169 21.3956 17.9785 21.3281C18.0194 21.2698 18.0194 21.2698 18.061 21.2104C18.5437 20.5144 18.5437 20.5144 18.5938 19.6875C18.5343 19.538 18.466 19.401 18.3868 19.2611C18.3203 19.1406 18.3203 19.1406 18.252 18.9355C18.1301 18.8575 18.1301 18.8575 17.9785 18.7988C17.9268 18.7752 17.8751 18.7516 17.8218 18.7273C17.6207 18.6565 17.4688 18.646 17.2565 18.6493C17.1929 18.6497 17.1294 18.6502 17.0639 18.6506C16.9035 18.6609 16.7651 18.6852 16.6113 18.7305C16.5803 18.6686 16.5803 18.6686 16.5486 18.6055C16.3261 18.181 16.1063 17.8955 15.6543 17.7051C15.1845 17.6413 14.7919 17.66 14.4027 17.9435C14.2267 18.1009 14.0863 18.2676 13.9453 18.457C13.7402 18.3887 13.7402 18.3887 13.6334 18.2007C13.4165 17.8566 13.0269 17.6935 12.6411 17.6036C12.2329 17.5737 11.8723 17.7354 11.5527 17.9785C11.3045 18.2399 11.093 18.531 10.8828 18.8231C10.7694 18.9786 10.6489 19.1281 10.5273 19.2773C10.3236 19.1819 10.148 19.0706 9.96712 18.9371C9.91282 18.8972 9.85852 18.8572 9.80258 18.816C9.74567 18.7736 9.68876 18.7313 9.63013 18.6877C9.57212 18.6448 9.51411 18.6019 9.45434 18.5577C9.05267 18.2593 8.65812 17.9544 8.27148 17.6367C8.94432 16.3982 9.63688 15.1716 10.3498 13.9557C10.6592 13.4277 10.9642 12.8971 11.2691 12.3664C11.5186 11.9328 11.7722 11.5021 12.0312 11.0742Z"
        fill={fill}
        fillOpacity="0.85"
      />
      <path
        d="M22.0943 11.252C22.7064 11.1513 23.053 11.3546 23.5498 11.6765C23.9739 11.9587 23.9739 11.9587 24.466 12.0169C24.7121 11.9269 24.9283 11.8182 25.1562 11.6893C25.3093 11.6234 25.4631 11.5592 25.6177 11.497C25.6836 11.4684 25.7495 11.4398 25.8174 11.4103C25.9766 11.3475 25.9766 11.3475 26.1133 11.3475C26.1373 11.3907 26.1612 11.4339 26.1859 11.4783C26.6304 12.2777 27.0777 13.0749 27.5403 13.864C27.8777 14.4396 28.2127 15.0166 28.5442 15.5956C28.592 15.679 28.6399 15.7624 28.6878 15.8458C28.9359 16.2777 29.1779 16.7094 29.3945 17.158C29.1013 17.4062 28.808 17.6543 28.5059 17.91C28.0095 17.6403 27.5151 17.3677 27.0233 17.0897C26.9557 17.0515 26.8881 17.0133 26.8184 16.9739C26.2694 16.6627 25.7241 16.3454 25.1796 16.0265C24.565 15.667 23.9477 15.3124 23.3285 14.9609C22.95 14.7458 22.5727 14.5292 22.1986 14.3064C22.1328 14.2676 22.067 14.2288 21.9992 14.1889C21.8772 14.1167 21.7556 14.0439 21.6345 13.9701C21.5807 13.9385 21.5269 13.9069 21.4715 13.8744C21.4254 13.8466 21.3792 13.8189 21.3316 13.7903C21.1391 13.7214 21.0392 13.733 20.8496 13.8084C20.7448 13.9679 20.7448 13.9679 20.6787 14.1721C20.6364 14.2842 20.6364 14.2842 20.5933 14.3986C20.551 14.5167 20.551 14.5167 20.5078 14.6373C20.0841 15.7972 20.0841 15.7972 19.688 16.1001C19.2962 16.2773 18.9412 16.3406 18.5104 16.3388C18.3825 16.3383 18.3825 16.3383 18.252 16.3377C18.2571 16.3008 18.2622 16.2638 18.2675 16.2257C18.2924 16.0466 18.317 15.8675 18.3417 15.6883C18.351 15.6214 18.3603 15.5544 18.3699 15.4854C18.4197 15.1224 18.4663 14.7593 18.5067 14.3951C18.5149 14.3235 18.523 14.2518 18.5314 14.178C18.5469 14.0409 18.5616 13.9038 18.5755 13.7665C18.6416 13.19 18.7481 12.5267 19.2175 12.1379C19.2876 12.0767 19.2876 12.0767 19.3591 12.0143C20.1746 11.5043 21.167 11.4185 22.0943 11.252Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M28.2323 8.54492C28.2706 8.61471 28.3088 8.6845 28.3482 8.75641C28.7209 9.43346 29.1048 10.1033 29.4953 10.7702C29.7925 11.2778 30.0877 11.7865 30.3814 12.2961C30.4452 12.4068 30.4452 12.4068 30.5103 12.5198C30.5965 12.6695 30.6828 12.8192 30.7691 12.969C30.9403 13.2662 31.1118 13.5634 31.2832 13.8605C31.3679 14.0073 31.4525 14.1541 31.5371 14.3009C31.7374 14.6486 31.9382 14.996 32.1405 15.3425C32.2362 15.5065 32.3317 15.6707 32.4272 15.8348C32.4948 15.9508 32.5627 16.0667 32.6307 16.1825C32.6918 16.2877 32.6918 16.2877 32.7542 16.395C32.7903 16.4568 32.8263 16.5185 32.8635 16.5821C32.9403 16.7311 32.986 16.8577 33.0175 17.0215C32.7726 17.1669 32.5276 17.3121 32.2826 17.4573C32.2132 17.4985 32.1437 17.5398 32.0722 17.5822C32.0052 17.6219 31.9382 17.6616 31.8692 17.7024C31.7769 17.7572 31.7769 17.7572 31.6827 17.8131C31.3773 17.9884 31.191 18.0837 30.83 18.0469C30.5325 17.9056 30.4095 17.751 30.2516 17.4656C30.2086 17.389 30.1657 17.3125 30.1214 17.2336C30.0756 17.1501 30.0298 17.0666 29.984 16.983C29.9357 16.8964 29.8873 16.8099 29.8388 16.7234C29.739 16.5453 29.6395 16.3671 29.5403 16.1887C29.3237 15.8001 29.1005 15.4154 28.8775 15.0305C28.7926 14.8837 28.7078 14.7368 28.623 14.5899C28.5811 14.5175 28.5392 14.445 28.4961 14.3704C28.2405 13.928 27.9853 13.4854 27.7301 13.0428C27.5298 12.6955 27.3294 12.3483 27.1286 12.0012C27.0337 11.8372 26.9388 11.6731 26.844 11.5089C26.7769 11.393 26.7098 11.2771 26.6427 11.1613C26.5819 11.0561 26.5819 11.0561 26.5199 10.9487C26.4841 10.887 26.4484 10.8253 26.4116 10.7617C26.2316 10.4417 26.0813 10.1517 26.1815 9.77539C26.475 9.39514 26.9087 9.1965 27.3223 8.9679C27.3946 8.92705 27.4669 8.88621 27.5414 8.84413C28.0765 8.54492 28.0765 8.54492 28.2323 8.54492Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M9.70703 8.68164C10.0844 8.82518 10.4248 9.02091 10.7751 9.21997C10.8404 9.25619 10.9056 9.2924 10.9727 9.32972C11.0666 9.38299 11.0666 9.38299 11.1623 9.43733C11.2192 9.4694 11.2761 9.50146 11.3347 9.5345C11.5348 9.6738 11.6609 9.80635 11.7253 10.0447C11.7437 10.5604 11.5051 10.9156 11.2408 11.3434C11.1702 11.4616 11.0995 11.5798 11.029 11.6981C10.956 11.8203 10.8824 11.942 10.8088 12.0638C10.5837 12.4369 10.3681 12.8154 10.1514 13.1934C10.066 13.3415 9.98051 13.4896 9.89502 13.6377C9.85272 13.711 9.81042 13.7843 9.76685 13.8599C9.63867 14.082 9.5105 14.3042 9.38232 14.5264C9.33997 14.5998 9.29761 14.6732 9.25397 14.7489C9.16915 14.8959 9.08431 15.0429 8.99945 15.1899C8.79989 15.5356 8.6005 15.8815 8.40175 16.2277C8.30828 16.3905 8.2147 16.5532 8.12111 16.716C8.05542 16.8303 7.98988 16.9447 7.92435 17.0591C7.3794 18.0065 7.3794 18.0065 7.15637 18.1451C6.75286 18.2296 6.43199 18.1053 6.08852 17.8992C6.01605 17.8562 5.94357 17.8133 5.86889 17.769C5.79465 17.724 5.72041 17.6789 5.64392 17.6324C5.56783 17.5871 5.49174 17.5418 5.41334 17.4951C5.2263 17.3835 5.03972 17.2712 4.85352 17.1582C4.9366 16.8885 5.03278 16.654 5.17689 16.4116C5.21433 16.3481 5.25178 16.2845 5.29036 16.2191C5.3309 16.1511 5.37144 16.0832 5.41321 16.0132C5.50048 15.8653 5.58771 15.7173 5.6749 15.5694C5.71997 15.4931 5.76504 15.4168 5.81148 15.3382C6.02856 14.9692 6.24215 14.5983 6.45569 14.2273C6.54176 14.0779 6.62783 13.9286 6.71391 13.7792C6.75663 13.705 6.79936 13.6309 6.84338 13.5544C7.09957 13.1098 7.35609 12.6654 7.61261 12.2209C7.83161 11.8414 8.0504 11.4618 8.26881 11.082C9.0371 9.74655 9.0371 9.74655 9.39087 9.15588C9.41571 9.11436 9.44055 9.07284 9.46614 9.03006C9.62976 8.75891 9.62976 8.75891 9.70703 8.68164Z"
        fill={fill}
        fillOpacity="0.85"
      />
      <path
        d="M4.78516 20.918C5.09399 21.1769 5.38956 21.4438 5.67462 21.7286C5.71304 21.7667 5.75146 21.8048 5.79105 21.8441C5.91836 21.9705 6.04543 22.0971 6.1725 22.2238C6.26427 22.315 6.35604 22.4062 6.44783 22.4974C6.74764 22.7954 7.04709 23.0938 7.3465 23.3923C7.44974 23.4951 7.55299 23.598 7.65624 23.7009C8.08531 24.1285 8.51428 24.5562 8.943 24.9841C9.5572 25.5972 10.172 26.2097 10.7876 26.8214C11.2207 27.2519 11.6532 27.6831 12.0853 28.1148C12.3433 28.3726 12.6016 28.6301 12.8607 28.8869C13.1038 29.128 13.3461 29.3699 13.5878 29.6124C13.6769 29.7014 13.7662 29.7901 13.8558 29.8786C13.9777 29.9989 14.0985 30.1203 14.219 30.2419C14.2551 30.277 14.2911 30.3121 14.3283 30.3483C14.4251 30.4473 14.4251 30.4473 14.5605 30.625C14.5502 30.87 14.4327 30.9823 14.2612 31.1494C14.2152 31.1948 14.1691 31.2402 14.1217 31.287C14.0734 31.3336 14.025 31.3802 13.9752 31.4282C13.9266 31.4759 13.878 31.5236 13.828 31.5727C13.708 31.6902 13.5876 31.8072 13.4668 31.9238C13.1893 31.8132 13.0033 31.6158 12.7972 31.4073C12.7578 31.3681 12.7185 31.3289 12.678 31.2886C12.5463 31.1571 12.415 31.0251 12.2838 30.8931C12.1895 30.7987 12.0952 30.7044 12.0008 30.6101C11.7446 30.354 11.4888 30.0974 11.2331 29.8407C10.9659 29.5726 10.6982 29.3049 10.4306 29.0371C9.92388 28.53 9.41748 28.0225 8.91122 27.5148C8.33486 26.9369 7.75811 26.3594 7.18133 25.782C5.99481 24.594 4.80877 23.4056 3.62305 22.2168C3.72481 22.0035 3.82832 21.8586 3.99742 21.6924C4.06615 21.6243 4.06615 21.6243 4.13628 21.5548C4.18404 21.5082 4.2318 21.4616 4.28101 21.4136C4.3293 21.3659 4.37758 21.3182 4.42734 21.2691C4.54631 21.1517 4.66564 21.0348 4.78516 20.918Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M6.97266 26.4551C7.29066 26.7277 7.59388 26.998 7.88828 27.2935C7.92902 27.3341 7.96976 27.3747 8.01174 27.4166C8.14469 27.5492 8.27739 27.6821 8.41007 27.8151C8.50287 27.9078 8.59568 28.0005 8.68849 28.0933C8.88206 28.2867 9.0755 28.4803 9.26885 28.674C9.51727 28.9228 9.766 29.1713 10.0148 29.4197C10.2061 29.6107 10.3971 29.8019 10.5881 29.9931C10.6799 30.0848 10.7716 30.1765 10.8635 30.2682C10.9911 30.3957 11.1185 30.5234 11.2459 30.6511C11.2841 30.6892 11.3224 30.7273 11.3618 30.7666C11.6211 31.0273 11.6211 31.0273 11.6211 31.1035C10.0871 31.1035 8.55313 31.1035 6.97266 31.1035C6.97266 29.5695 6.97266 28.0355 6.97266 26.4551Z"
        fill={fill}
      />
      <path
        d="M17.4998 19.2091C17.7417 19.322 17.8287 19.3948 17.9783 19.6193C18.0571 19.9361 18.0357 20.2013 17.8745 20.4868C17.743 20.6622 17.6067 20.832 17.4655 20.9996C17.3107 21.1864 17.1636 21.3789 17.0156 21.5711C16.8931 21.7299 16.7697 21.888 16.6461 22.046C16.493 22.2419 16.3408 22.4383 16.1895 22.6356C16.1236 22.7211 16.0576 22.8065 15.9917 22.892C15.9624 22.9305 15.9331 22.9691 15.9029 23.0089C15.4898 23.5414 15.4898 23.5414 15.1713 23.618C14.8684 23.6088 14.6695 23.5742 14.4237 23.379C14.2575 23.1298 14.2328 22.985 14.2405 22.6895C14.3304 22.3042 14.6102 22.0264 14.8614 21.732C15.0634 21.4908 15.2528 21.2398 15.4448 20.9907C15.5264 20.886 15.6081 20.7813 15.6899 20.6767C15.8425 20.4811 15.9938 20.2846 16.1439 20.0871C16.1774 20.0433 16.211 19.9995 16.2456 19.9544C16.3078 19.8732 16.3695 19.7918 16.4308 19.7099C16.7371 19.3127 16.9931 19.1548 17.4998 19.2091Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M26.7285 1.57227C27.0175 1.81997 27.2892 2.05604 27.5563 2.32283C27.6034 2.36976 27.6034 2.36976 27.6515 2.41764C27.7533 2.51922 27.855 2.62105 27.9566 2.72289C28.0279 2.79419 28.0993 2.86547 28.1706 2.93674C28.3191 3.08515 28.4675 3.23368 28.6158 3.3823C28.8063 3.57318 28.9971 3.76375 29.188 3.95422C29.3349 4.10088 29.4816 4.2477 29.6283 4.39456C29.6987 4.46496 29.7691 4.53531 29.8395 4.60561C29.9374 4.70328 30.035 4.8012 30.1326 4.89913C30.1882 4.95482 30.2438 5.0105 30.3012 5.06788C30.4199 5.19531 30.4199 5.19531 30.4199 5.26367C29.2018 5.26367 27.9836 5.26367 26.7285 5.26367C26.7285 4.04551 26.7285 2.82734 26.7285 1.57227Z"
        fill={fill}
        fillOpacity="0.73"
      />
      <path
        d="M15.5177 18.2517C15.7245 18.3704 15.8881 18.514 15.9962 18.7303C16.0479 19.1507 15.9807 19.3668 15.7332 19.7062C15.5091 19.9898 15.2818 20.2706 15.0519 20.5494C14.735 20.9348 14.4347 21.3307 14.1417 21.7345C13.9953 21.9338 13.8797 22.0781 13.672 22.2166C13.3381 22.2653 13.0698 22.2664 12.7791 22.0884C12.5606 21.8488 12.5251 21.6484 12.5297 21.329C12.6264 20.9185 12.9438 20.6167 13.2135 20.3043C13.4252 20.0531 13.6219 19.7901 13.8215 19.5292C14.8931 18.1451 14.8931 18.1451 15.5177 18.2517Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M18.1836 22.0117C18.4268 22.1556 18.5046 22.2226 18.5938 22.4902C18.6566 22.8809 18.5994 23.0663 18.3674 23.3875C18.2613 23.5219 18.1544 23.6558 18.0469 23.7891C17.9835 23.8734 17.9204 23.958 17.8576 24.0428C17.7926 24.1291 17.7275 24.2155 17.6624 24.3018C17.6322 24.3428 17.6019 24.3837 17.5707 24.426C17.3718 24.6837 17.1974 24.8332 16.8848 24.9512C16.5217 24.9448 16.3244 24.8617 16.0645 24.6094C15.9403 24.361 15.9429 24.123 15.9961 23.8574C16.1474 23.5819 16.3444 23.3482 16.543 23.1055C16.6088 23.0204 16.6743 22.9351 16.7396 22.8497C16.8064 22.7626 16.8734 22.6755 16.9404 22.5885C16.9723 22.5469 17.0043 22.5054 17.0372 22.4626C17.3822 22.0229 17.6403 21.9398 18.1836 22.0117Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M12.8516 18.252C13.1288 18.4669 13.244 18.6221 13.3002 18.9655C13.2938 19.4047 12.9799 19.7051 12.7148 20.0293C12.6338 20.1335 12.6338 20.1335 12.5512 20.2397C12.0925 20.8208 12.0925 20.8208 11.8262 20.918C11.574 20.9409 11.3965 20.9369 11.1597 20.8454C10.9484 20.6634 10.8817 20.4996 10.8008 20.2344C10.8242 19.9113 10.9135 19.7253 11.1084 19.4696C11.1816 19.3733 11.1816 19.3733 11.2563 19.275C12.1431 18.1495 12.1431 18.1495 12.8516 18.252Z"
        fill={fill}
        fillOpacity="0.5"
      />
      <path
        d="M3.07615 19.2773C3.29162 19.3726 3.43584 19.4841 3.60059 19.6517C3.66867 19.7205 3.66867 19.7205 3.73811 19.7906C3.78473 19.8383 3.83134 19.8861 3.87937 19.9353C3.92704 19.9836 3.97472 20.0319 4.02383 20.0816C4.1412 20.2006 4.25823 20.3199 4.37498 20.4395C4.11683 20.7481 3.85024 21.0419 3.56321 21.3239C3.5292 21.3576 3.49518 21.3913 3.46014 21.426C3.37787 21.5075 3.29539 21.5887 3.21287 21.6699C2.89563 21.5266 2.68423 21.3057 2.43955 21.0632C2.39457 21.0205 2.34958 20.9778 2.30323 20.9337C2.23999 20.8712 2.23999 20.8712 2.17546 20.8074C2.13675 20.7696 2.09804 20.7318 2.05815 20.6929C1.9824 20.5762 1.9824 20.5762 1.99008 20.4407C2.06337 20.2741 2.15144 20.1787 2.28174 20.0517C2.32778 20.0063 2.37382 19.961 2.42126 19.9142C2.46959 19.8676 2.51793 19.821 2.56773 19.7729C2.61632 19.7253 2.66492 19.6776 2.71499 19.6285C2.83493 19.511 2.95532 19.3939 3.07615 19.2773Z"
        fill={fill}
        fillOpacity="0.85"
      />
      <path
        d="M14.9707 31.2402C15.1759 31.4216 15.3002 31.6359 15.4404 31.8696C15.4777 31.9315 15.4777 31.9315 15.5157 31.9945C15.595 32.126 15.6738 32.2578 15.7526 32.3895C15.8312 32.5205 15.9099 32.6514 15.9887 32.7823C16.0604 32.9016 16.1319 33.021 16.2034 33.1404C16.2957 33.2907 16.3921 33.4386 16.4917 33.5841C16.6113 33.7695 16.6113 33.7695 16.6113 33.9062C16.1959 33.7985 15.8631 33.5739 15.5048 33.3466C15.4411 33.3065 15.3775 33.2665 15.3119 33.2252C15.1864 33.1462 15.0609 33.067 14.9355 32.9876C14.7927 32.8979 14.6491 32.8098 14.5045 32.723C14.437 32.6821 14.3695 32.6411 14.2999 32.5989C14.2147 32.5479 14.2147 32.5479 14.1277 32.4958C14.0901 32.465 14.0524 32.4341 14.0137 32.4023C14.0137 32.1973 14.0137 32.1973 14.1015 32.0861C14.1416 32.0471 14.1817 32.0081 14.223 31.9679C14.2662 31.9254 14.3094 31.8829 14.3539 31.839C14.3995 31.7951 14.4452 31.7512 14.4922 31.7059C14.5378 31.6612 14.5835 31.6165 14.6305 31.5704C14.7435 31.4599 14.8569 31.3499 14.9707 31.2402Z"
        fill={fill}
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default ContactsIcon;