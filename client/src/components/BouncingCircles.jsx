const BouncingCircles = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100"
      height="60"
      className="mx-auto"
    >
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="4"
        r="30"
        cx="50"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-0.4s"
        />
      </circle>
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="4"
        r="30"
        cx="130"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-0.2s"
        />
      </circle>
      <circle
        fill="#FFFFFF"
        stroke="#FFFFFF"
        strokeWidth="4"
        r="30"
        cx="210"
        cy="100"
      >
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2s"
          values="1;0;1"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
    </svg>
  );
};

export default BouncingCircles;
