type Props = {
  children: React.ReactNode;
};

const PagesLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[820px] p-6 sm:p-16 [&_h1]:duration-500 [&_h1]:animate-in [&_h1]:fade-in [&_h1]:fill-mode-backwards">
      {children}
    </div>
  );
};

export default PagesLayout;
