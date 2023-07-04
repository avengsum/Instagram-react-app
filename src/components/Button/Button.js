import { Pressable , Text } from "react-native";



const Button = ({text = '' , onPress = () => {}}) => {
    return(
    <Pressable onPress={onPress}>
        <Text>Button</Text>
    </Pressable>)
}

export default Button