import { StyleSheet, Text, View } from 'react-native';


const Header=()=>{
    return (
        <View style={styles.header}>
        <Text style={styles.title}>Todo App Again</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    header:{
      position:"absolute",
      top:40,
      width:'100%',
      // borderRadius:20,
      backgroundColor:'beige',
      justifyContent:'center',
      alignItems:"center",
      textAlign:"center",
    },
    title:{
        padding:20,
        fontWeight:"bold",
        fontSize:25,
      color:"#49493f"    }
  });

export default Header;
