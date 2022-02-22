import Menu from "./Menu";

const Layout = ({
  title = "title",
  description = "description",
  className,
  children,
}) => {
  return (
    <>
      <div>
        <Menu />
        <div className="jumbotron">
          <h2>{title}</h2>
          <p className="lead">{description}</p>
        </div>
      </div>
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
