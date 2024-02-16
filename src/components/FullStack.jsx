import Card from "./Card";

function FullStack({ data }) {
  const filteredData = data.filter((item) => item.field === "fullstack");
  return (
    <div className="row row-cols-4 mt-5">
      {filteredData.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}

export default FullStack;
