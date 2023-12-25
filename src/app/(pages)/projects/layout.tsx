type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const ProjectsLayout: React.FunctionComponent<Props> = ({
  children,
  modal,
}) => {
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default ProjectsLayout;
