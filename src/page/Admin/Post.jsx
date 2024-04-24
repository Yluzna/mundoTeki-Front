import React, { useState } from "react";
import NewPost from "../../components/Admin/Post/NewPost";
import PostAdmin from "../../components/Admin/Post/Post";



const Post = () => {
    return (
<>
<PostAdmin />
<NewPost />
</>
    );
};

export default Post;