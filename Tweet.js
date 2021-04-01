const Tweet = (props) => {
  return (
    <div className="tweet">
      <p className="username">{props.username}</p>
      <p>{props.name}</p>
      <p className="date">{props.date}</p>
      <p>{props.tweet}</p>
    </div>
  );
};
