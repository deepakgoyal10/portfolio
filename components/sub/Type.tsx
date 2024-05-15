import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer.",
          "Freelancer.",
          "Mern-stack Developer.",
          "Full-stack Developer.",
          "Front-end Developer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
