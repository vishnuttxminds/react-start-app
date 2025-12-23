import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../context/UserContext";

function Chat() {
  const user = useContext(UserContext);

  const [messages, setMessages] = useState([
    { id: 1, name: "Anu", text: "Hi!" },
    { id: 2, name: "Vishnu", text: "Hello 👋" },
    { id: 3, name: "Anu", text: "How are you?" },
  ]);


  const chatBoxRef = useRef(null);
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div style={{ width: "350px", marginTop: "20px" }}>
      <h3>Logged in as: {user?.name}</h3>

      {/* Chat Box */}
      <div
        ref={chatBoxRef}
        style={{
          border: "1px solid #ccc",
          height: "200px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg) => (
          <p
            key={msg.id}
            style={{
              textAlign: msg.user === user?.name ? "right" : "left",
              color: msg.user === user?.name ? "green" : "black",
            }}
          >
            <strong>{msg.user}:</strong> {msg.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Chat;
