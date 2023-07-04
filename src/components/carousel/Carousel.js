import {View , Image , FlatList , useWindowDimensions} from 'react-native'
import {useState , useRef} from 'react'
import colors from '../../theme/colors';

const Carousel = ({images}) => {
    const {width}  = useWindowDimensions();
    const [activeImageIndex , setActiveImageIndex] = useState(0);

    const viewabilityConfi = {
        itemVisiblePecentThreshold: 51,
    };

    const onViewableItemsChanged = useRef(({viewableItems}) => {
        if(viewableItems > 0) {
            setActiveImageIndex(viewableItems[0].index);
        }
    });

    return(
        <View>
            <FlatList
            data={images}
            renderItem={({item}) => (
                <Image source={{uri:item}} style={{width:width , aspectRatio:1}} />
            )}
            horizontal
            pagingEnabled
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewabilityConfi}
            />
        <View
        style={{
            flexDirection:'row',
            justifyContent:'center',
            position:'absolute',
            bottom:0,
            width:'100%'
        }}>
        {images.map((_,index) => (
            <View
            key={index}
            style={{
                width:10,
                aspectRatio:1, 
                borderRadius:5,
                backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
                margin:10,
                marginHorizontal:5,
            }}
            />
        ))}

        </View>

        </View>
    )
}

 export default Carousel