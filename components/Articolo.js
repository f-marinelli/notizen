const Articolo = (prop) => {
  return (
    <div className="card" style={{ width: '13rem' }}>
      <div className="card-body">
        <h5 className="card-title">{prop.titolo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{prop.testo}</p>
      </div>
    </div>
  );
};

export default Articolo;
