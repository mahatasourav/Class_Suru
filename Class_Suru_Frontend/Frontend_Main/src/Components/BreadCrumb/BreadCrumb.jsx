import { Link, useLocation } from "react-router-dom";
import Style from "../../css/breadcrumb.module.css"

function BreadCrumb({defalutlLink="/"}) {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  let path = "";
  const breadcrumbItems = pathParts.map((part, index) => {
    path += `/${part}`;
    return (
      <span key={index} className={Style.breadcrumbSpan}>
        {index > 0 && " > "}
        <Link to={path} className={Style.breadcrumbLink}>{decodeURIComponent(part)}</Link>
      </span>
    );
  });

  return (
    <div className={Style.breadcrumbContainer}>
      {/* <Link to={defalutlLink}>Home</Link> */}
      {/* {breadcrumbItems.length > 0 && <span className={Style.breadcrumbGT}> &gt; </span>} */}
      {breadcrumbItems}
    </div>
  );
}

export default BreadCrumb;
