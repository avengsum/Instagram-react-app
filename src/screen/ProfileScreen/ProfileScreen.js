import { Image, FlatList} from 'react-native'
import user from '../../assets/data/user.json'
import ProfileHeader from './ProfileHeader'

const ProfileScreen = () => {
    return(
        <FlatList
            data={user.posts}
            renderItem={({item}) => (
                <Image
                source={{uri: item.image || item.images[0]}}
                style={{flex:1 , margin:1 , aspectRatio: 1 , maxWidth: '33%'}}
                />
            )}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ProfileHeader}
             />
    )
}

export default ProfileScreen