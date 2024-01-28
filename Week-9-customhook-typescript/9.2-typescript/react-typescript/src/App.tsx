import "./App.css";

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}
// interface TodInput {
//   todo: TodoType;
// }

export const TODO = (props: TodoType) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
};

function App() {
  return (
    <>
      <TODO title="hello" description="todo" done={false} />
    </>
  );
}

export default App;
