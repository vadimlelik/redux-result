import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, isGetLoading } from './store/selector';
import { useEffect, useState } from 'react';
import { postAdd, postDelete, taskLoad } from './store/postsReducer';

function App() {
  const [value, setValue] = useState('')
  const posts = useSelector(getPosts)
  const isLoading = useSelector(isGetLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(taskLoad())
  }, [])

  const addPosts = () => {
    dispatch(postAdd({ title: value, id: Date.now() },))
    setValue('')
  }
  const deleteTask = (id) => {
    dispatch(postDelete(id))
  }

  if (isLoading) {
    return <h1>Loading</h1>
  }

  return (
    <div className="App">
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addPosts} >Add Posts</button>
      </div>

      {posts.map((item) => (
        <div key={item.id} >{item.title} <button onClick={() => deleteTask(item.id)} >Delete Post </button> </div>
      ))}

    </div>
  );
}

export default App;
