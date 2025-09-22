import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState, type ReactNode} from "react";

interface InfoBoxProps {
  icon: IconProp;
  text: string;
  children?: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, text, children }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-t-2 border-gray-500 p-3 grid grid-cols-1 bg-gradient-to-r from-gray-200 to-white overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <FontAwesomeIcon icon={icon} className="text-blue-500 text-5xl" />
        <p className="font-goldman text-md tracking-wide">{text}</p>
        <button
          className="font-goldman border p-2 rounded-md"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "mniej" : "więcej"}
        </button>
      </div>

      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${showMore ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;