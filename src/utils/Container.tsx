interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-start text-center rounded-lg max-w-fit mx-auto mt-[10rem] backdrop-blur-sm drop-shadow-xl border border-solid border-[#289BB2]">
      {children}
    </div>
  );
};

export default Container;
