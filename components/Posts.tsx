import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPosts } from "../store/reducers/ActionCreators";

const Posts = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const { posts, error, isLoading } = useAppSelector(
    (state) => state.postReducer
  );
  const [query, setQuery] = useState({ search: "", type: "" });
  const [typingTimeout, setTypingTimeout] = useState();

  useEffect(() => {
    dispatch(fetchPosts(query));
  }, [query]);

  const onChange = (e: any) => {
    const target = e.target.value;
    setValue(target);

    clearTimeout(typingTimeout);
    const timeout: NodeJS.Timeout = setTimeout(() => {
      dispatch(fetchPosts(setQuery({ ...query, search: target })));
    }, 1000);
    setTypingTimeout(timeout);
  };

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={() => setQuery({ ...query, type: "event" })}>
        Event
      </button>
      <button onClick={() => setQuery({ ...query, type: "new" })}>New</button>

      {isLoading && <h1> Loading... </h1>}
      {error && <h1>Something went wrong</h1>}
      {posts.map((post) => (
        <div key={post.event_date}>
          <h2> Title: {post.title}</h2>
          <div> Description: {post.description}</div>
          <h3> Type: {post.type}</h3>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Posts;
