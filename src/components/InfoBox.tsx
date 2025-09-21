import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface InfoBoxProps{
    icon: IconProp;
    text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({icon, text}) => {
  return (
    <div className="border-t-2 border-gray-500 p-3 grid grid-cols-1  bg-gradient-to-r from-gray-200 to-white">
      <div className="flex items-center justify-between gap-2">
        <FontAwesomeIcon
          icon={icon}
          className="text-blue-500 text-5xl"
        />
        <p className="font-goldman text-md tracking-wide">{text}</p>
        <button className="font-goldman border p-2 rounded-md">więcej</button>
      </div>
    </div>
  );
};
export default InfoBox;
