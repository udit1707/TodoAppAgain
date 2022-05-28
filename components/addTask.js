import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

const AddTask=(props)=>{

    const [task,setTask]=useState("");

    const addTaskHandler=(val)=>{
        console.log(val);
        setTask(val);
      }

return (<View style={styles.inputContainer}>
 <Text style={{color:"#49493f",padding:5}}>Add Today's Task</Text>
          <TextInput
          placeholder='Enter you text here'
          multiline
          onChangeText={addTaskHandler}
          style={styles.input}
          />
          <View style={styles.btnCnt}>
          <Button color={"#8e8e80"} title='Add' onPress={()=>{props.buttonHandler(task)}}/>
          </View> 
</View>);
}

const styles=StyleSheet.create({ inputContainer:{
    position:"relative",
    top:150,
    marginBottom:30,
    backgroundColor:'beige',
    width:'80%',
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    padding:20
},
  input:{
    padding:2,
    paddingLeft:2,
    borderWidth:2,
    marginTop:2,
    borderColor:'#fff',
    width: 200,
    backgroundColor: '#fff',
    borderRadius:10,
    marginBottom:5
  },
  btnCnt:{
      width:200,
      marginTop:10,
      marginBottom:10
  }
});

export default AddTask;
