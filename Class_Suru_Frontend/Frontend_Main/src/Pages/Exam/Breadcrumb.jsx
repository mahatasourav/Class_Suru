import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  let path = "";
  const breadcrumbItems = pathParts.map((part, index) => {
    path += `/${part}`;
    return (
      <span key={index}>
        {index > 0 && " > "}
        <Link to={path}>{decodeURIComponent(part)}</Link>
      </span>
    );
  });

  return (
    <div style={{ marginBottom: "20px", fontSize: "18px" }}>
      <Link to="/">Exam Portal</Link>
      {breadcrumbItems.length > 0 && <span> </span>}
      {breadcrumbItems}
    </div>
  );
}

export default Breadcrumb;
