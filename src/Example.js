export default function Example(props) {
  if (props.examples) {
    return <em>{props.examples}</em>;
  } else {
    return null;
  }
}
