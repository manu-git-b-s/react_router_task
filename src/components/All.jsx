import Card from "./Card";

function All({ data }) {
  return (
    <div className="row row-cols-4 mt-5">
      {data.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}

export default All;
