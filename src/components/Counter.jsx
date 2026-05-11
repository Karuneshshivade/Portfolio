import CountUp from 'react-countup';

function Counter() {
  return (
    <section className="counter-section py-5">
      <div className="container">

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <h1>
              <CountUp end={4} duration={8} />+
            </h1>
            <p>Projects Completed</p>
          </div>

          <div className="col-md-4 mb-4">
            <h1>
              <CountUp end={1} duration={8} />+
            </h1>
            <p>Years Experience</p>
          </div>
  <div className="col-md-4 mb-4">
            <h1>
              <CountUp end={8} duration={8} />+
            </h1>
            <p>Skills</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Counter;