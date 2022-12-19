import './App.css';
import Navbar from './components/Navbar';

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chat from './components/Chat';

function App() {
  const [user] = useAuthState(auth)
  console.log(user)


  return (
    <div className="App">
      <div className="container">
        <Navbar />
        {user ? <Chat /> : null}
      </div>
      <span className='madeWith'>Made with React & Firebase</span>
      <span className='madeWith2'>by Epic</span>
    </div>
  );
}

export default App;
