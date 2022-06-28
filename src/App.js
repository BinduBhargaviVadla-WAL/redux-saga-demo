import './App.css';
import { getUsersFetch } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.myFirstReducer.users);
  console.log(users);
  return (
    <div className='App'>
      <h1>Redux demo</h1>
      <button
        onClick={() => {
          dispatch(getUsersFetch());
        }}
      >
        Get Users
      </button>
      <div>
        Users:
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
