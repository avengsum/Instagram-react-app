import { Image, View , Text, FlatList} from 'react-native'
import user from '../../assets/data/user.json'
import styles  from './styles'
import Button from '../../components/Button/Button'

const ProfileHeader = () => {
    return(
        <View>
            <View>
                <Image
                source={{uri:user.image}} style={styles.avatar}
                 />

                <View>
                    <Text >98</Text>
                    <Text>Posts</Text>
                </View>

                <View>
                    <Text>198</Text>
                    <Text>Followers</Text>
                </View>

                <View>
                    <Text>298</Text>
                    <Text>Following</Text>
                </View>
            </View>
            <Text>{user.name}</Text>
            <Text>{user.bio}</Text>
            
            <View style={{flexDirection:'row'}}>
                <Button
                text="Edit Profile"
                onPress = {() => console.log('on edit profile')}
                />
                <Button
                text="Another Profile"
                onPress = {() => console.log('on another profile')}
                />
            </View>
            
        </View>
    )
};

export default ProfileHeader