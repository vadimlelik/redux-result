import './App.css';
import { ADD_TASK, DELETE_TASK } from './store/action';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { getPosts } from './store/selector';
import { useEffect } from 'react';
import { loadTask } from './store/postsReducer';



function App() {
  const posts = useSelector(getPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTask())
  }, [])

  const addPosts = () => {
    dispatch(ADD_TASK())
  }
  const deleteTask = (id) => {
    dispatch(DELETE_TASK(id))
  }

  return (
    <div className="App">
      {posts.map((item) => (
        <div key={item.id} >{item.title} <button onClick={() => deleteTask(item.id)} >Delete Post </button> </div>
      ))}

      <button onClick={addPosts} >Add Posts</button>
    </div>
  );
}

export default App;
