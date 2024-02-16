import Card from "./Card";

function CyberSecurity({ data }) {
  const filteredData = data.filter((item) => item.field === "cybersecurity");
  return (
    <div className="row row-cols-4 mt-5">
      {filteredData.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}

export default CyberSecurity;
