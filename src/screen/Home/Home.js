import {FlatList } from "react-native"
import posts from '../../assets/data/posts.json'
import Post from "../../components/post/Post.js";

const Home = () => {
  return(
    <FlatList 
    data={posts}
    renderItem={(item) => <Post post={item} />}
    showsVerticalScrollIndicator={false}
    />
   )

  };


export default Home;