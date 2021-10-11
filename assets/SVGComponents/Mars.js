import * as React from "react";
import Svg, { Circle, Mask, G, Path } from "react-native-svg";

function Mars(props) {
  return (
    <Svg
      width={129}
      height={129}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={64.5} cy={64.5} r={64.5} fill="#FF6A45" />
      <Mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={129}
        height={129}
      >
        <Circle cx={64.5} cy={64.5} r={64.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.554 9.214a4.607 4.607 0 010 9.215H15.74a4.607 4.607 0 100 9.214H64.5a4.607 4.607 0 100-9.214h-4.991v-.004a4.607 4.607 0 010-9.207v-.004h21.5a4.607 4.607 0 100-9.214H21.116a4.607 4.607 0 100 9.214h13.438zm75.25 13.822a4.608 4.608 0 00-4.608-4.607h-1.919a4.607 4.607 0 100 9.214h1.919a4.608 4.608 0 004.608-4.607z"
          fill="#FF9B6B"
        />
      </G>
      <Mask
        id="prefix__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={129}
        height={129}
      >
        <Circle cx={64.5} cy={64.5} r={64.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M75.634 119.786a4.607 4.607 0 110 9.214H56.82a4.607 4.607 0 000 9.214h48.759a4.607 4.607 0 100-9.214h-4.991v-.004a4.607 4.607 0 010-9.206v-.004h21.5a4.607 4.607 0 100-9.215H62.196a4.608 4.608 0 000 9.215h13.438zm75.25 13.821a4.607 4.607 0 00-4.607-4.607h-1.92a4.607 4.607 0 000 9.214h1.92a4.607 4.607 0 004.607-4.607z"
          fill="#FF9B6B"
        />
      </G>
      <Mask
        id="prefix__c"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={129}
        height={129}
      >
        <Circle cx={64.5} cy={64.5} r={64.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.366 27.643a4.607 4.607 0 110 9.214H38.01a4.607 4.607 0 110-9.214h15.357zM100.973 64.5a4.607 4.607 0 110 9.214H43v.004a4.607 4.607 0 000 9.207v.004h7.295a4.607 4.607 0 110 9.214H4.223a4.607 4.607 0 010-9.214H16.51a4.607 4.607 0 100-9.215H-8.063a4.607 4.607 0 110-9.214h109.036zM43 105.964a4.607 4.607 0 00-4.607-4.607h-7.679a4.607 4.607 0 000 9.214h7.679A4.607 4.607 0 0043 105.964zm44.92 0a4.607 4.607 0 00-4.608-4.607H59.51a4.607 4.607 0 000 9.214h23.803a4.607 4.607 0 004.608-4.607zm-2.304-18.428a4.607 4.607 0 00-4.607-4.607H73.33a4.607 4.607 0 100 9.214h7.679a4.607 4.607 0 004.607-4.607zm52.598-55.286a4.607 4.607 0 00-4.607-4.607H118.25a4.607 4.607 0 000 9.214h15.357a4.607 4.607 0 004.607-4.607z"
          fill="#D04237"
        />
      </G>
      <Mask
        id="prefix__d"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={129}
        height={129}
      >
        <Circle cx={64.5} cy={64.5} r={64.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__d)">
        <Path
          opacity={0.078}
          fill="#000"
          d="M64.884-6.143h70.643v141.286H64.884z"
        />
      </G>
    </Svg>
  );
}

export default Mars;
