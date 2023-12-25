type Props = {
  children: React.ReactNode;
};

const PagesLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[820px] p-6 sm:p-16">{children}</div>
  );
};

export default PagesLayout;
