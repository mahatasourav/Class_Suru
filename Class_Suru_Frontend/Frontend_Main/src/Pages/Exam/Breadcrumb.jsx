import { Link, useLocation } from "react-router-dom";
import Style from "../../css/Exam.module.css";

function Breadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  let path = "";
  const breadcrumbItems = pathParts.map((part, index) => {
    path += `/${part}`;
    return (
      <span key={index} className={Style.breadcurmbSpan}>
        {index > 0 && " > "}
        <Link to={path} className={Style.textStyle}>{decodeURIComponent(part)}</Link>
      </span>
    );
  });

  return (
    <div style={{ marginBottom: "20px", marginTop: "20px", marginLeft: "20px",fontSize: "18px" }}>
      <Link to="/" className={Style.textStyle}>Home</Link>
      {breadcrumbItems.length > 0 && <span> &gt; </span>}
      {breadcrumbItems}
    </div>
  );
}

export default Breadcrumb;
