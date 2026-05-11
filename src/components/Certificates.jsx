function Certificates() {

  const certificates = [
    {
      title: 'Full Stack Java Development',
      institute: 'Seed Infotech'
    },
    {
      title: 'Web Development Internship',
      institute: 'Streamline Tech'
    }
  ];

  return (
    <section className="certificates-section py-5">
      <div className="container">

        <h2 className="section-title text-center mb-5">
          Certificates
        </h2>

        <div className="row">
 {certificates.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>

              <div className="certificate-card">
                <h4>{item.title}</h4>
                <p>{item.institute}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certificates;