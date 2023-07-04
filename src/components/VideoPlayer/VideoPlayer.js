import Video from 'react-native-video'
import style from '../post/style'
import { View , Text , StyleSheet ,Pressable } from 'react-native'
import { useState } from 'react'
import colors from '../../theme/colors'


const VideoPlayer = ({uri}) => {

    const [muted , setMuted] = useState(true)

    return(
    <View>
        <Video
        source={{uri}}
        style={styles.video}
        resizeMode='cover'
        repeat
        muted={muted} />

        <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
            <Ionicons
            name={muted ? 'volume-mute': 'volume-medium'}
            size={14}
            color="white"
             />
        </Pressable>
    </View>)
    
}


const styles = StyleSheet.create({
    video:{
        width: '100%',
        aspectRation:1,  

    },
    muteButton: {
        backgroundColor:colors.black,
        padding:5,
        borderRadius:25,
        position:'absolute',
        bottom:10,
        right:10,
    }
})

export default VideoPlayer