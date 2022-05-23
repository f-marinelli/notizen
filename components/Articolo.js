import Link from 'next/link';

const Articolo = (props) => {
  return (
    <Link
      href={{
        pathname: `/articolo${props.id}`,
        query: { id: props.id, titolo: props.titolo, testo: props.testo },
      }}
    >
      <div className="card" style={{ width: '13rem' }}>
        <div className="card-body">
          <h5 className="card-title">{props.titolo}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">{props.testo}</p>
        </div>
      </div>
    </Link>
  );
};

export default Articolo;
