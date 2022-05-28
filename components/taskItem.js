import { View,StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 




const TaskItem=(props)=>{
    return (
    <View style={styles.masterView}>
    <TouchableOpacity onPress={()=>{props.pressHandler(props.keyy)}}><MaterialIcons style={styles.icon} name="delete" size={24} color="#49493f" /></TouchableOpacity>
        
        <Text style={styles.listItem}>{props.name}</Text>
        </View>
    );
}

const styles=StyleSheet.create({listItem:{
    flex:1,
    padding:15,
    borderRadius:10,
    marginTop:20,
    backgroundColor:'#fff',
    width:200,
    marginBottom:20
  },
masterView:{
    flex:1,
    flexDirection:"row",
    width:200,
    // backgroundColor:"pink"
},
icon:{
    padding:10,
    marginTop:20
}});


export default TaskItem;