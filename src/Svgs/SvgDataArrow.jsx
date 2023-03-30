import React from "react";

const SvgDataArrow = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 32 32"
      viewBox="0 0 32 32"
      id="data-arrow"
    >
      <path
        d="M16.44,17.979c-0.45-0.246-1.009-0.077-1.251,0.376l-3.761,7.015L11.425,2.934C11.425,2.417,11.012,2,10.502,2
			c-0.51,0-0.923,0.418-0.923,0.934l0.003,22.51l-3.85-7.093c-0.245-0.451-0.808-0.616-1.253-0.369
			c-0.447,0.248-0.611,0.815-0.365,1.268l5.572,10.267C9.848,29.814,10.159,30,10.496,30c0.001,0,0.001,0,0.002,0
			c0.338-0.001,0.648-0.188,0.809-0.488l5.505-10.267C17.055,18.792,16.888,18.225,16.44,17.979z"
      ></path>
      <path
        d="M27.886,12.751L22.313,2.484C22.152,2.186,21.841,2,21.504,2c0,0-0.001,0-0.002,0c-0.338,0.001-0.648,0.188-0.809,0.488
			l-5.505,10.267c-0.243,0.453-0.076,1.021,0.372,1.266c0.14,0.076,0.291,0.113,0.439,0.113c0.328,0,0.646-0.178,0.813-0.489
			l3.761-7.015l0.002,22.437c0,0.517,0.414,0.934,0.923,0.934c0.509,0,0.923-0.418,0.923-0.934l-0.003-22.51l3.85,7.093
			c0.245,0.451,0.806,0.614,1.253,0.369C27.968,13.771,28.131,13.203,27.886,12.751z"
      ></path>
    </svg>
  );
};

export default SvgDataArrow;