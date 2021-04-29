import { Result, Button } from "antd";
import Mainlayout from "../components/common/Layout";
import { Link } from "react-router-dom";

import "./Page404.scss";

function Page404() {
  return (
    <Mainlayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to="/dashboard" className="link">
              Back Home
            </Link>
          </Button>
        }
      />
    </Mainlayout>
  );
}
export default Page404;
