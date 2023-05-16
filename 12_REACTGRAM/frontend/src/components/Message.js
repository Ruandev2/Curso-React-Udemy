import "./Message.css";
const Message = ({msg, type}) => {
  return (
    <div className={`menssage ${type}`}>
        <p>{msg}</p>
    </div>
  )
}

export default Message