import IconMemory from "../assets/icon-memory.svg"
import IconReaction from "../assets/icon-reaction.svg"
import IconVerbal from "../assets/icon-verbal.svg"
import IconVisual from "../assets/icon-visual.svg"

const RESULT_DATA = [
  {title: "Reaction", score: 80, icon: IconReaction},
  {title: "Memory", score: 92, icon: IconMemory},
  {title: "Verbal", score: 61, icon: IconVerbal},
  {title: "Visual", score: 73, icon: IconVisual},
]

const Summary = () => {
  return (
    <section className="summary">
      <h2 className="summary__title">Summary</h2>
      <ul className="summary__score-list">
        {RESULT_DATA.map((data) => (
          <li className="summary__score-card" key={data.title}>
            <p className="summary__score-title">
              <img
                src={data.icon}
                alt=""
                className="summary__score-icon"
                aria-hidden="true"
              />
              {data.title}
            </p>
            <p className="summary__score">
              {data.score}
              <span className="summary__total"> / 100</span>
            </p>
          </li>
        ))}
      </ul>
      <button type="button" className="summary__cta">
        Continue
      </button>
    </section>
  );
}

export default Summary