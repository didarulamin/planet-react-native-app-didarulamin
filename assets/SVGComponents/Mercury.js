import * as React from "react";
import Svg, { Circle, Mask, G, Path } from "react-native-svg";

function Mercury(props) {
  return (
    <Svg
      width={111}
      height={111}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={55.5} cy={55.5} r={55.5} fill="#DEF4FC" />
      <Mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={111}
        height={111}
      >
        <Circle cx={55.5} cy={55.5} r={55.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M98.369 9.569a4.593 4.593 0 00-4.593-4.593h-22.2a4.593 4.593 0 100 9.186h22.2a4.593 4.593 0 004.593-4.593zM27.94 50.907a4.593 4.593 0 110 9.186h-1.148a4.593 4.593 0 100 9.186h47.462a4.593 4.593 0 100-9.186H54.352v-.004a4.593 4.593 0 010-9.178v-.004h.765a4.593 4.593 0 100-9.186H37.893v-.004a4.593 4.593 0 010-9.179v-.003h7.655a4.593 4.593 0 100-9.187H17.607a4.593 4.593 0 100 9.187h1.914a4.593 4.593 0 110 9.186H.765a4.593 4.593 0 100 9.186h27.176zM49.76 78.466a4.593 4.593 0 110 9.186 4.593 4.593 0 010-9.186zm46.696 4.593a4.593 4.593 0 00-4.593-4.593H68.131a4.593 4.593 0 100 9.186h23.731a4.593 4.593 0 004.593-4.593zM63.538 101.43a4.593 4.593 0 00-4.593-4.593H51.29a4.593 4.593 0 100 9.186h7.655a4.593 4.593 0 004.593-4.593zm30.238-41.338a4.593 4.593 0 110 9.186 4.593 4.593 0 010-9.186zm-80.762 4.593a4.593 4.593 0 00-4.593-4.593H.765a4.593 4.593 0 100 9.186h7.656a4.593 4.593 0 004.593-4.593zM84.59 23.348a4.593 4.593 0 110 9.187h-7.656a4.593 4.593 0 110-9.187h7.656z"
          fill="#B1D5E2"
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
        width={111}
        height={111}
      >
        <Circle cx={55.5} cy={55.5} r={55.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path opacity={0.078} fill="#000" d="M55.883 0h55.5v111h-55.5z" />
      </G>
    </Svg>
  );
}

export default Mercury;
