interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-[10rem] gap-4">
      {children}
    </div>
  );
};

export default Main;
