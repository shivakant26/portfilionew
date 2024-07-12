const ExperienceCard = ({data,key}) => {
  return (
    <>
      <div className="card" key={key}>
        <h3>{data.session}</h3>
        <h4>{data.title}</h4>
        <p>{data.collage}</p>
      </div>
    </>
  );
};

export default ExperienceCard;
