const OrbitAnimation = () => {
  const orbits = [
    { size: 300, rotate: "rotate-[20deg]", duration: "16s", delay: "0s" },
    { size: 260, rotate: "rotate-[60deg]", duration: "20s", delay: "1s" },
    { size: 220, rotate: "rotate-[100deg]", duration: "24s", delay: "2s" },
  ];

  const colors = ["#71ded0", "#50c4b1", "#a0f0ed"];

  return (
    <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
      {orbits.map((orbit, index) => (
        <div
          key={index}
          className={`absolute ${orbit.rotate}`}
          style={{
            width: `${orbit.size}px`,
            border: "2px solid #b17a5e",
            borderRadius: "50%",
            opacity: 0.3,
            animation: `spinOrbit ${orbit.duration} linear infinite`,
            animationDelay: orbit.delay,
          }}
        >
          <div
            className="absolute rounded-full shadow-md"
            style={{
              width: "14px",
              height: "14px",
              backgroundColor: colors[index % colors.length],
              top: "-7px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default OrbitAnimation;
