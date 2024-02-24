import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { quizReset } from "../../Redux/actions/quizAction";

export function Result() {
  const correctAnswers = useSelector((state) => state.correctAnswers);
  const incorrectAnswers = useSelector((state) => state.incorrectAnswers);
  const userscore = useSelector((state) => state.score);

  const dispatch = useDispatch();
  return (
    <section className="result-section">
      <div className="">
        <div className="content">
          <div>
            <ul className="list-bar">
              <li>Your Test Result </li>
              <li>Score:{userscore}</li>
              <li>Correct Answers {correctAnswers.length} /10</li>
              <li>Incorrect Answers {incorrectAnswers.length} /10</li>
            </ul>
          </div>
          <div className="correct-answer-text">
            <span>Correct Answers</span>
          </div>
          {/*Here I have divided the page into two parts
          - Correct answers first */}
          <div className="questions">
            <ul className="questions-list-one">
              {/*here a two map to display a correct Answers and choices */}
              {correctAnswers.map((answer) => {
                const { question, degree, choices, correct_choice } = answer;
                return (
                  <li key={question} className="questions-degree">
                    <h3>{question}</h3>
                    <p> Degree: {degree}</p>
                    <ul>
                      {choices.map((choice, choiceIndex) => {
                        let isCorrect = choiceIndex + 1 === correct_choice;

                        return (
                          <li
                            key={choiceIndex}
                            className={isCorrect ? "correct-answer" : ""}
                          >
                            {choice}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="incorrect-answer-text">
            <span>InCorrect Answers</span>
          </div>
          {/* Here i display a incorrectAnswers */}
          <div className="questions">
            <ul className="questions-list-one">
              {incorrectAnswers.map((answer) => {
                const { question, degree, choices, correct_choice } = answer;
                return (
                  <li key={question} className="questions-degree">
                    <h3>{question}</h3>
                    <p>Degree: 0</p>
                    <ul>
                      {choices.map((choice, choiceIndex) => {
                        let isCorrect = choiceIndex + 1 === correct_choice;
                        return (
                          <li
                            key={(choice, choiceIndex)}
                            className={isCorrect ? "correct-answer" : ""}
                          >
                            {choice}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="newquiz-button">
          <Link
            to={"/home"}
            onClick={() => {
              dispatch(quizReset);
            }}
          >
            New Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}
