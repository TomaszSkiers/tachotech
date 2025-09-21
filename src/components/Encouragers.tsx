interface EncouragesProps {
  text: string;
}

const Encouragers: React.FC<EncouragesProps> = ({ text }) => {
  return (
    <div className="p-3 text-2xl text-center text-white font-goldman tracking-wide bg-gradient-to-r from-blue-950 to-blue-900 border-t ">
      {text}
    </div>
  );
};
export default Encouragers;
