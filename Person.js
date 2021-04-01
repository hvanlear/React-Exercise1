const Person = (props) => {
  let reply;
  if (props.age < 18) {
    reply = "You must be 18";
  } else {
    reply = "Go Vote";
  }

  return (
    <div>
      <p>Learn more about this person</p>
      <p>Age : {props.age}</p>
      <p>Name : {props.name}</p>
      <p>Message: {reply}</p>
      <h4>Hobbies</h4>
      <ul>
        {props.hobbies.map((h) => (
          <li>
            <b>{h}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
