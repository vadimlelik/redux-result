import "./App.css";
import { useSelector } from "react-redux";
import { getPosts, isGetLoading } from "./store/selector";
import { useEffect, useState } from "react";
import { postAdd, postDelete, taskLoad } from "./store/postsReducer";
import { useAppDispatch } from "store";

export interface PostItem {
    id: number;
    title: string;
}

function App(): JSX.Element {
    const [value, setValue] = useState<string>("");
    const posts = useSelector(getPosts);
    const isLoading = useSelector(isGetLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(taskLoad());
    }, []);

    const addPosts = () => {
        dispatch(postAdd({ title: value, id: Date.now() }));
        setValue("");
    };
    const deleteTask = (id: number) => {
        dispatch(postDelete(id));
    };

    if (isLoading) {
        return <h1>Loading</h1>;
    }
    return (
        <div className="App">
            <div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={addPosts}>Add Posts</button>
            </div>

            {posts.map((item: PostItem) => (
                <div key={item.id}>
                    {item.title}{" "}
                    <button onClick={() => deleteTask(item.id)}>
                        Delete Post{" "}
                    </button>{" "}
                </div>
            ))}
        </div>
    );
}

export default App;
