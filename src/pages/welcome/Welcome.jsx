import { Link } from "react-router-dom";
import thinking from "../../images/thinkph.gif";

export function Welcome() {
  return (
    <section className="section">
      <div>
        <img src={thinking} alt="Refers to thinking" />
      </div>
      <div>
        <p>Welcome to quiz system</p>
        <h2>Quiz system</h2>
        <Link to={"/home"}>start quiz</Link>
      </div>
    </section>
  );
}
