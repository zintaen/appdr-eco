import Button from "../common/Button";

import "./BugSuggestion.scss";

function BugSuggestion() {
  return (
    <div>
      <div className="bugsuggestion">
        <div className="content-bgt">
          <div className="text">Any bug or suggestion</div>
          <Button className="button" color="white">
            REPORT US
          </Button>
        </div>
      </div>
    </div>
  );
}
export default BugSuggestion;
