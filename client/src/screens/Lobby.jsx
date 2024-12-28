import {useState} from 'react'

const Lobby = () => {
    const [email, setEmail] = useState('');
    const [room, setRoom] = useState('');
    const handleSubmit = (e) => {  
        e.preventDefault();
        console.log(email, room);
    }
  return (
    <div>
    <h1> Welcome to the Lobby</h1>
    <form>
        <label htmlFor="email">Email Id:</label>
        <input
         type="email" 
         id="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value) } 

         />
        <br/>
        <label htmlFor="room">Room:</label>
        <input type="text" id="room"
        value={room}
        onChange={(e)=>setRoom(e.target.value) } 
         />
        <br/>
        <button type="submit" onClick={handleSubmit}>Join</button>
    </form>

    </div>
  )
}

export default Lobby