const ServiceCard = ({ item, index ,Icons }) => {
  return (
    <>
      <div className="service-card" key={index}>
        <span>{<Icons />}</span>
        <h4>{item.labelName}</h4>
      </div>
    </>
  );
};
export default ServiceCard;
