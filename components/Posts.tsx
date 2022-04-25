import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchPosts } from "../store/reducers/ActionCreators";

const Posts = () => {
  console.log("rerender");
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const { posts, error, isLoading } = useAppSelector(
    (state) => state.postReducer
  );
  const [query, setQuery] = useState({ search: "", type: "" });
  const [typingTimeout, setTypingTimeout] = useState<any>();
  const [isChecked, setChecked] = useState(false);

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
    setTypingTimeout(() => timeout);
  };

  const handleCheckedEvent = ({ target: { checked } }) => {
    setChecked(checked);
    checked
      ? setQuery({ ...query, type: "event" })
      : setQuery({ ...query, type: "" });
  };

  const handleCheckedNew = ({ target: { checked } }) => {
    setChecked(checked);
    checked
      ? setQuery({ ...query, type: "new" })
      : setQuery({ ...query, type: "" });
  };

  return (
    <>
      <h1>List of posts</h1>
      <input type="text" value={value} onChange={onChange} />
      <label htmlFor="">
        Event
        <input type={"checkbox"} onChange={handleCheckedEvent} />
      </label>
      <label htmlFor="">
        New
        <input type={"checkbox"} onChange={handleCheckedNew} />
      </label>

      {isLoading && <h1> Loading... </h1>}
      {error && <h1>Something went wrong</h1>}
      {console.log(posts)}
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
