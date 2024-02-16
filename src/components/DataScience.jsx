import Card from "./Card";

function DataScience({ data }) {
  const filteredData = data.filter((item) => item.field === "dataScience");
  return (
    <div className="row row-cols-4 mt-5">
      {filteredData.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}

export default DataScience;
