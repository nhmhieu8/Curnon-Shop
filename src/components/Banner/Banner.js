import React from "react";
import styles from "./banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Banner = ({ bannerDestop, bannerTablet, destopHeight, tabletHeight }) => {
  return (
    <div className={cx("banner")}>
      <div className={cx("banner-destop")}>
        <img
          src={bannerDestop}
          alt="banner-destop"
          style={{ height: `${destopHeight}rem` }}
        />
      </div>
      <div className={cx("banner-tablet")}>
        <img
          src={bannerTablet}
          alt="banner-tablet"
          style={{ height: `${tabletHeight}rem` }}
        />
      </div>
    </div>
  );
};

export default Banner;
