export const CharacterCard = ({ characters = [] }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {characters.map((character) => (
        <div className="col" key={character.id}>
          <div className="card h-100">
            <img
              src={character.image}
              className="card-img-top"
              alt={character.name}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#64A50B' }}>{character.name}</h5>
              <p className="card-text"><b>Gender:</b> {character.gender}</p>
              <p className="card-text"><b>Origin:</b> {character.origin.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
