import Button from "../common/Button";

import "./BugSuggestion.scss";

function BugSuggestion() {
  return (
    <section className="bug-suggestion-container">
      <div className="content-bgt">
        <div className="text">Any bug or suggestion</div>
        <Button className="button" color="white">
          REPORT US
        </Button>
      </div>
    </section>
  );
}
export default BugSuggestion;
