import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert,StyleSheet, Text, View,TextInput,Button, FlatList,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header';
import TextItem from './components/taskItem';
import AddTask from './components/addTask';

let key=1;
export default function App() {
  

  // const [taskList,setTaskList]=useState([]);
  const [todos,setTodos]=useState([
  //   {name:"Task-1",key:"1"},
  // {name:"Task-2",key:"2"},
  // {name:"Task-3",key:"3"},
  // {name:"Task-3",key:"4"},
  // {name:"Task-3",key:"5"},
  // {name:"Task-3",key:"6"},
  // {name:"Task-3",key:"7"},
  // {name:"Task-3",key:"8"},
  // {name:"Task-3",key:"9"},
  // {name:"Task-3",key:"10"},
  // {name:"Task-3",key:"11"}

]);

  
  const pressHandler=(key)=>
  {
    console.log(key);
    setTodos((prevlist)=>{
      return prevlist.filter((item)=> item.key!=key);
    })
  }

  const buttonHandler=(task)=>{
    // console.log(task);
    // var obj={task:task,key:key};
    // ++key;
    // console.log(obj);
    // console.log(taskList);

    if(task.length>3)
    {
    setTodos((prevList)=>{
      return [...prevList,{name:task,key:Math.random().toString()}];
    });
    }
    else
    {
      Alert.alert("OOPS!","Todo should be over 3 letters long",[
        {text:'Understood',onPress:()=> console.log('alert closed')}
      ]);
    }
  }


  return (
  <View style={styles.container}>
    <Header/>
   <AddTask buttonHandler={buttonHandler}/>
   <View style={styles.content}> 
  {/* <View style={styles.list}> */}
    {todos.length>0?<FlatList
     data={todos}
     contentContainerStyle={{
      paddingBottom: 150
      }}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>{
       return <TextItem name={item.name} keyy={item.key} pressHandler={pressHandler}/>
     }}
    />:<Text style={{color:"#49493f"}}>Todo List Empty!</Text>}
    {/* </View>             */}
  </View>
  </View> );
         
        {/** header */}
        {/* <View style={styles.content}> */}
          {/** to form */}
          {/* <View style={styles.inputContainer}>
          <Text>Add Today's Task</Text>
          <TextInput
          placeholder='Enter you text here'
          multiline
          onChangeText={addTaskHandler}
          style={styles.input}
          />
          <Button title='Add' onPress={buttonHandler}/>
         </View>  */}
         {/* <AddTask buttonHandler={buttonHandler}/> */}
         
{/* 
        </View> */}
    // </View>
    
 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    },
  content:{
    flex:1,
    borderRadius:20,
    top:150,
    width:'80%',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'beige',
  }
  // ,
  // list:{
  //   // position:'absolute',
  //   top:10,
  //   width:"100%",
  //   alignItems:"center",
  //   justifyContent:"center"
  // } 

});
