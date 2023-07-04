import { StyleSheet } from "react-native";
import colors from "../../theme/colors"


export default StyleSheet.create({
    comment:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor :'red'
      },
      commentText:{
        color:colors.black,
        flex:1,
        lineHeight:18,
      },
      icon:{
        marginHorizontal: 5,
      },
})