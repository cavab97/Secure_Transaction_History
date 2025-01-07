import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostView from "./post.view";
import { postRequest } from "../../redux/Post/Actions";

function PostContainer(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.post);
  const shouldLog = useRef(true); // useEffect Unmount
  useEffect(() => {
    if (shouldLog.current) shouldLog = false;
    dispatch(postRequest());
  }, [postRequest]);
  return <PostView data={data} {...props} />;
}

export default PostContainer;
