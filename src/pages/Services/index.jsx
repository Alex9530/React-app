import Comment from "../../components/comment";

const MockComment = [
  {
    id:1,
    name: "Emily Johnson",
    location: "USA, California",
    text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
  },
  {
    id:2,
    name: "John Smith",
    location: "USA, California",
    text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
  },
  {
    id:3,
    name: "Samantha Davis",
    location: "USA, California",
    text: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
  },

]

const Services = () => {
  return (
    <main>
      <h2>What My Clients Say</h2>
      <div className="cars">
        {MockComment.map(item =>
          <Comment key={item.id} item={item}/>
        )}
      </div>
    </main>
  );
}

export default Services;