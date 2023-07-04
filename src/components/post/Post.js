import { Image, View ,Text , Pressable } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import colors from "../../theme/colors"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from "./style"
import Comment from "../comment/Comment"
import { useState } from "react"
import Carousel from "../carousel/Carousel"
import VideoPlayer from "../VideoPlayer/VideoPlayer"


const Post = ({post}) => {
  const [isDesc,setDesc] = useState(false)
  const [like,setLike] = useState(false)

  const toggleDesc = () => {
    setDesc(value => !value)
  }
  const toggleLike = () => {
    setLike(value => !value)
  }

  let lastTap = 0;
  const handleDoubleLike = () => {
    const now = Date.now()
    if(now - lastTap < 300 ) {
      toggleLike();
    }
    lastTap = now;
  }

  let content = null 

  if(post.image){
    content = (
      <Image source={{
        uri: post.image
      }} 
      style={styles.image}
      />
    )
  }
  else if (post.images){
    content = (<Carousel  images = {post.images} />)
  }
  else if (post.video){
    content = (<VideoPlayer  video ={post.video}/>)
  }

  return(
    <View style={styles.post}>

      <View>
        <Image
        source={{
          uri: post.user.image
        }} 
        style={styles.userAvatar}
         />
         <Text style={styles.userName}>{post.user.username}</Text>

         <Entypo name="dots-three-horizontal" size={16}
         style={styles.threeDots}
          />
      </View>
      <Pressable onPress={handleDoubleLike}>
          {content}
      </Pressable>
      
      

      <View style={styles.footer}>
      <View style={styles.iconContianer}>
        <Pressable onPress={toggleLike}>
        <AntDesign name={like ? 'heart' : 'hearto'} 
        size={24} style={styles.icon}
        color ={like ? colors.like : colors.black} />
        </Pressable>
        
        <Ionicons name='chatbubble-outline' size={24} style={styles.icon} color ={colors.black} />
        <Feather name="send" size={24} style={styles.icon} color ={colors.black} />
        <Feather name ="bookmark" size={24} style={{marginLeft:'auto'}} color ={colors.black} />
      </View>

      <Text style={styles.text}>
        Liked by{' '}
        <Text style={styles.bold}>jsfjsdj</Text> and{' '}
        <Text style={styles.bold}>{post.noflikes} others</Text>
      </Text>

      <Text style={styles.text} numberOfLines={isDesc ? 0 : 3}>
        <Text>{post.user.username}</Text>{' '}
        {post.description}
      </Text>
      <Text onPress={toggleDesc}>{isDesc ? 'less' : 'more'}</Text>

      <Text>View all {post.nofComments} comments</Text>

      {post.comments.map(com => (
        <Comment key={com.id} comment={com} />
      ))}
      
      <Text>{post.createdAt}</Text>
      </View>

    </View>
  )
}



export default Post