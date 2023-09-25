import { useState } from "react";

export const LoginForm = ({ onClose }) => {
  const [user, setUser] = useState('');
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <input value={user} onChange={(event) => setUser(event.target.value)} />
      <button
        onClick={() => {
          onClose(user);
        }}
      >
        OK
      </button>
    </div>
  );
};
