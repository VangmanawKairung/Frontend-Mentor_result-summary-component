const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Your Result</h1>
      <div className="hero__score-block">
        <span className="hero__score">76</span>
        <span className="hero__total-score">of 100</span>
      </div>
      <p className="hero__feedback">Great</p>
      <p className="hero__description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
}

export default Hero