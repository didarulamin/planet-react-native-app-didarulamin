import * as React from "react";
import Svg, { Circle, Mask, G, Path } from "react-native-svg";

function Earth(props) {
  return (
    <Svg
      width={173}
      height={173}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={86.5} cy={86.5} r={86.5} fill="#545BFE" />
      <Mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={173}
        height={173}
      >
        <Circle cx={86.5} cy={86.5} r={86.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.276 10.38a4.613 4.613 0 00-4.614-4.613h-78.81a4.613 4.613 0 000 9.226H7.303a4.613 4.613 0 010 9.227H4.998a4.613 4.613 0 000 9.227H3.46a4.613 4.613 0 110 9.226H-.384a4.613 4.613 0 000 9.227h45.748a4.613 4.613 0 000-9.227h-1.922v-.004a4.614 4.614 0 010-9.218v-.004H69.97a4.613 4.613 0 000-9.227h-2.691v-.004a4.614 4.614 0 010-9.219v-.004h.384a4.613 4.613 0 004.614-4.613zm-34.6 50.747a4.613 4.613 0 110 9.226 4.613 4.613 0 010-9.226zM23.45 74.967a4.613 4.613 0 00-4.613-4.614H5.382a4.613 4.613 0 000 9.227h13.456a4.613 4.613 0 004.613-4.613zm32.678 55.36a4.613 4.613 0 01-4.613 4.613h1.922a4.613 4.613 0 100 9.227h11.149a4.614 4.614 0 000-9.227h1.537v-.004a4.614 4.614 0 010-9.219v-.004h10.38a4.613 4.613 0 100-9.226v-.004a4.614 4.614 0 010-9.219v-.004h2.307a4.613 4.613 0 100-9.227H59.204v-.004a4.614 4.614 0 010-9.218v-.004h-.768a4.613 4.613 0 000-9.227H39.598a4.613 4.613 0 000 9.227 4.613 4.613 0 110 9.226 4.614 4.614 0 000 9.227h3.844a4.613 4.613 0 110 9.227h.77a4.613 4.613 0 100 9.226h7.304a4.614 4.614 0 014.613 4.614z"
          fill="#4FCDF9"
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
        width={173}
        height={173}
      >
        <Circle cx={86.5} cy={86.5} r={86.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M162.236 19.607a4.614 4.614 0 00-4.614-4.614h-9.226a4.614 4.614 0 100 9.227h9.226a4.614 4.614 0 004.614-4.613zm91.497 4.613a4.614 4.614 0 110 9.227h-2.691v.004a4.614 4.614 0 000 9.218v.004h6.151a4.614 4.614 0 110 9.227H190.3a4.613 4.613 0 110-9.227h-1.922a4.613 4.613 0 100-9.226h-15.762a4.614 4.614 0 110-9.227h81.117zm-103.8 101.493a4.613 4.613 0 100-9.226 4.613 4.613 0 010-9.227h-1.153a4.613 4.613 0 100-9.227h-17.3a4.613 4.613 0 110-9.226 4.613 4.613 0 000-9.227h-13.071a4.613 4.613 0 110-9.227h9.995a4.614 4.614 0 100-9.226 4.614 4.614 0 010-9.227h21.529a4.614 4.614 0 110 9.227v.004a4.614 4.614 0 000 9.218v.004h34.985a4.613 4.613 0 010 9.227h-7.689v.004a4.613 4.613 0 000 9.219v.004h3.844a4.614 4.614 0 110 9.226h-5.766l-.001.004a4.613 4.613 0 000 9.219l.001.004h-.769a4.613 4.613 0 010 9.227h-7.689v.004a4.613 4.613 0 000 9.218v.004h-1.538a4.613 4.613 0 010 9.227h-13.84a4.613 4.613 0 010-9.227h-1.538zm34.6-9.226a4.613 4.613 0 11.001 9.227 4.613 4.613 0 01-.001-9.227zm-2.306-59.974a4.614 4.614 0 00-4.614-4.613h-5.382a4.613 4.613 0 100 9.227h5.382a4.614 4.614 0 004.614-4.614zM142.629 38.06a4.614 4.614 0 00-4.613-4.613h-9.227a4.613 4.613 0 100 9.226h9.227a4.614 4.614 0 004.613-4.613zm9.995-4.613a4.614 4.614 0 110 9.226h-1.153a4.613 4.613 0 110-9.226h1.153z"
          fill="#4FCDF9"
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
        width={173}
        height={173}
      >
        <Circle cx={86.5} cy={86.5} r={86.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M118.024 19.607a4.613 4.613 0 00-4.613-4.614H67.278a4.613 4.613 0 110-9.226h18.837a4.613 4.613 0 100-9.227h-6.15a4.613 4.613 0 010-9.227H103.8a4.613 4.613 0 110 9.227h.769v.004a4.613 4.613 0 000 9.219v.004h61.511a4.613 4.613 0 110 9.226h-26.142l-.001.004a4.613 4.613 0 000 9.219l.001.004h1.153a4.613 4.613 0 110 9.227h-29.218a4.613 4.613 0 010-9.227h1.538a4.613 4.613 0 004.613-4.613zm40.752 23.066a4.614 4.614 0 010 9.227H134.94a4.613 4.613 0 110-9.227h23.836zm13.071-13.84a4.614 4.614 0 00-4.614-4.613h-7.689a4.614 4.614 0 000 9.227h7.689a4.614 4.614 0 004.614-4.614zM93.42 24.22a4.613 4.613 0 110 9.227h-7.689a4.613 4.613 0 010-9.227h7.689zm93.42-32.293a4.613 4.613 0 00-4.613-4.614h-59.974a4.613 4.613 0 100 9.227h59.974a4.613 4.613 0 004.613-4.613z"
          fill="#fff"
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
        width={173}
        height={173}
      >
        <Circle cx={86.5} cy={86.5} r={86.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.678 134.94a4.613 4.613 0 110 9.227H31.14a4.613 4.613 0 100 9.226h29.218a4.613 4.613 0 100-9.226h-1.153v-.004a4.614 4.614 0 010-9.219v-.004H69.2a4.613 4.613 0 100-9.227h-5.382v-.004a4.612 4.612 0 010-9.218v-.004h18.069a4.614 4.614 0 000-9.227H36.522a4.613 4.613 0 100 9.227h8.843a4.613 4.613 0 110 9.226H6.535a4.614 4.614 0 000 9.227h26.143zm67.278-4.613a4.614 4.614 0 00-4.614-4.614h-7.689a4.614 4.614 0 000 9.227h7.69a4.613 4.613 0 004.613-4.613z"
          fill="#fff"
        />
      </G>
      <Mask
        id="prefix__e"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={173}
        height={173}
      >
        <Circle cx={86.5} cy={86.5} r={86.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__e)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M129.558 171.847a4.613 4.613 0 110 9.226h-1.538a4.613 4.613 0 000 9.227h29.218a4.613 4.613 0 000-9.227h-1.154v-.004a4.614 4.614 0 010-9.218v-.004h9.996a4.613 4.613 0 000-9.227h-5.382v-.004a4.613 4.613 0 010-9.219v-.004h18.069a4.613 4.613 0 100-9.226h-45.365a4.613 4.613 0 100 9.226h8.842a4.614 4.614 0 010 9.227h-38.828a4.613 4.613 0 100 9.227h26.142zm67.278-4.614a4.613 4.613 0 00-4.614-4.613h-7.689a4.613 4.613 0 000 9.227h7.689a4.614 4.614 0 004.614-4.614z"
          fill="#fff"
        />
      </G>
      <Mask
        id="prefix__f"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={173}
        height={173}
      >
        <Circle cx={86.5} cy={86.5} r={86.5} fill="#fff" />
      </Mask>
      <G mask="url(#prefix__f)">
        <Path
          opacity={0.078}
          fill="#000"
          d="M86.686-9.611h96.297v192.222H86.686z"
        />
      </G>
    </Svg>
  );
}

export default Earth;
