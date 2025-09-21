interface EncouragesProps {
  text: string;
}

const Encouragers: React.FC<EncouragesProps> = ({ text }) => {
  return (
    <div className="p-3 text-2xl text-center text-white font-goldman tracking-wide bg-blue-950 border-t ">
      {text}
    </div>
  );
};
export default Encouragers;
