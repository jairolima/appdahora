/* eslint-disable react/prop-types */
import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

// website where you can convert normal svg into rn svg https://react-svgr.com/playground/?native=true

export const BurguerIcon = ({fill}) => (
  <Svg
    width="20"
    height="22"
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect width="20" height="22" fill="none" fill-opacity="0" />
    <Path
      d="M0 2C0 1.44772 0.447715 1 1 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H1C0.447715 3 0 2.55228 0 2Z"
      fill={fill}
    />
    <Path
      d="M0 11C0 10.4477 0.447715 10 1 10H12C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12H1C0.447715 12 0 11.5523 0 11Z"
      fill={fill}
    />
    <Path
      d="M0 20C0 19.4477 0.447715 19 1 19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H1C0.447715 21 0 20.5523 0 20Z"
      fill={fill}
    />
  </Svg>
);

export const ProductIcon = ({fill}) => (
  <Svg
    width={23}
    height={24}
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect width="23" height="24" fill="none" fill-opacity="0" />
    <Path
      d="M3.31 6.859A1 1 0 014.3 6h14.4a1 1 0 01.99.859l2.137 15a1 1 0 01-.99 1.141H2.163a1 1 0 01-.99-1.141l2.137-15z"
      fill={fill}
    />
    <Path
      d="M8.009 8V5.458S7.642 1 11.591 1c3.95 0 3.38 4.272 3.38 4.272V7.79"
      fill={fill}
    />
  </Svg>
);

export const BoxIcon = ({fill}) => (
  <Svg
    width="23"
    height="27"
    viewBox="0 0 23 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect
      width="23"
      height="26.9702"
      fill="none"
      fill-opacity="0"
      transform="translate(0 0.0297852)"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 14H4C2.89551 14 2 14.8954 2 16V25C2 26.1046 2.89551 27 4 27H19C20.1045 27 21 26.1046 21 25V16C21 14.8954 20.1045 14 19 14ZM4 25V16H19V25H4Z"
      fill={fill}
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 7H2C0.895508 7 0 7.89545 0 9V14C0 15.1046 0.895508 16 2 16H21C22.1045 16 23 15.1046 23 14V9C23 7.89545 22.1045 7 21 7ZM2 14V9H21V14H2Z"
      fill={fill}
    />
    <Path d="M10.5 14.5H12.5V26.5H10.5V14.5Z" fill={fill} />
    <Path d="M10.5 7.5H12.5V15H10.5V7.5Z" fill={fill} />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.62409 7.61513L12.442 7.61513L8.62702 2.2925C8.31549 1.85829 7.89313 1.51619 7.40339 1.3022C5.90143 0.645645 4.15192 1.33089 3.49518 2.83272C3.30671 3.26405 3.20954 3.72975 3.20954 4.20052C3.20954 6.08632 4.73835 7.61513 6.62409 7.61513ZM7.3902 3.17879L9.48005 6.09377L6.62409 6.09377C5.57868 6.09377 4.73102 5.24611 4.73102 4.20045C4.73102 3.93947 4.78473 3.68129 4.88923 3.44209C5.20954 2.7101 6.06208 2.37618 6.79401 2.69612C7.03278 2.80043 7.23883 2.96718 7.3902 3.17879Z"
      fill={fill}
    />
    <Path
      fill="none"
      d="M15.2917 4.23262L13.1385 7.06104L16.6933 7.06104C17.9971 7.06104 18.849 5.69382 18.2745 4.52342C17.6975 3.34786 16.085 3.19065 15.2917 4.23262Z"
      stroke={fill}
      stroke-width="2"
    />
  </Svg>
);
