import PostTable from "../../components/Admin/Post/PostTable";
import PostAdmin from "../../components/Admin/Post/PostTitle";
import SearchBar from "../../components/Admin/SearchBar/SearchBar";



const Post = () => {
    return (
<>
<PostAdmin />
<SearchBar />
<PostTable />
</>
    );
};

export default Post;