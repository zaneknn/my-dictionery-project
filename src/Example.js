export default function Example(props) {
  if (props.examples) {
    return (
      <em>
        <strong>Example: </strong>
        {props.examples}
      </em>
    );
  } else {
    return null;
  }
}
