const App = () => {
  return (
    <div>
      <CompOne name="Hunter" />
      <Tweet
        username="hvl"
        name="Hunter"
        date={new Date().toLocaleString()}
        tweet="HELLO WORLD"
      />
      <Person age={16} name="bob" hobbies={["golf", "chillen"]} />
      <Person age={20} name="jeff" hobbies={["games", "chicks"]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
