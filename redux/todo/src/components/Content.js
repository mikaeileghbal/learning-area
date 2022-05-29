import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const contents = state.map((item) => item.content);
  return {
    contents,
  };
};

function Content({ contents }) {
  return (
    <div>
      <h1>Map State</h1>
      <ul>
        {contents.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps)(Content);
