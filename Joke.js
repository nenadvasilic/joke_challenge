export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  const [messages, setMessages] = React.useState(["a", "b"]);

  function toogleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  /*  
  {!isShown && <button onClick={toogleShown}>Show Punchline</button>}
  {isShown && <button onClick={toogleShown}>Hide Punchline</button>}
*/
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toogleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}!
        </h1>
      )}
      <hr />
    </div>
  );
}
/*
{messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread message{messages.length > 1 && "s"}!
        </h1>
      )}
*/
