import { connect } from "react-redux";
import { addTodo } from "../data/actions";

const mapStateToProps = (state) => ({
  state,
});

const mapDislatchToProps = {
  addTodo,
};

const AddTodo = ({ state, addTodo }) => {
  return (
    <div>
      <p>Add Todo</p>
      <ul>
        {state.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("Meeting")}>Add Todo</button>
    </div>
  );
};
//console.log(connect(mapStateToProps, mapDislatchToProps)(AddTodo));
export default connect(mapStateToProps, mapDislatchToProps)(AddTodo);
