import React from "react";

const CompanyIcon = ({ fill = "#EB3D34", width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0_165_3832)" />
      <defs>
        <pattern
          id="pattern0_165_3832"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_165_3832" transform="scale(0.0625)" />
        </pattern>
        <image
          id="image0_165_3832"
          width="16"
          height="16"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADzSURBVDiN3Y+hTgNBGIS/f7cJAlHX0ASFhWB6GI5W4ngDQgKWB+h7kKBJiqM8ARaCQUAImgoQwNUSDLeD4Eou1+tdA44xszuz/+z88EdY3YOk22kLi81Y+1R63L68TfJ+I38RuNdeZ9WLGGwTiIEVy0yPfwDOSwOSbnQ6hh0vmjPrSPayvb64dHH/PpFczt6FiuEM/mPhcdyLDssCADCxh3FX5FyNlsTRzIA54aYOv8U/CGgUBRkDNM1zBwAY9IM08t4/hxCuqxqUrhCkkZmdpWm6XL1A1uBtKzows+FPaghPcm444aL+PbOx37q6Oan7oBZfeQNVK+t0eSAAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default CompanyIcon;
