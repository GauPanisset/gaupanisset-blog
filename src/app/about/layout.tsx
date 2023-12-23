type Props = {
  children: React.ReactNode;
};

const AboutLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[820px] py-6 sm:py-16">{children}</div>
  );
};

export default AboutLayout;
