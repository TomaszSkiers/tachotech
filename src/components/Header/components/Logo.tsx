import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex w-full items-center"
      aria-label="Tacho-Tech - Strona główna"
    >
      <span
        className="text-blue-500 text-2xl font-bold pl-2"
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        TACHO
      </span>
      <span
        className="text-2xl font-bold"
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        -
      </span>
      <span className="text-red-600 text-2xl font-bold">tech</span>
    </Link>
  );
};

export default Logo;
