import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

import "./App.css";

//import { RiCloseFill } from "react-icons/RiCloseFill";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  //const [id, setId]= useState();
 const [checked, setChecked] = useState(false);


const addTodo =()=>{
  if(userInput === ""){
    alert("You need to type something!")
  }else{
    setTodos([...todos,{ id: todos.length,   text: userInput, completed: false}]);

  }
  
  setUserInput('')
}

const listItemStyle = {
  textDecoration: 'line-through',
  color: '#555',
};


const toggleTask = (index) => {

  const updatedTasks = todos.map((todo) =>{
    if (todo.id === index){
      return { ...todo, completed : !todo.completed}
    }
    return todo;
  })
  console.log(updatedTasks)
 
  setTodos(updatedTasks);

}

const deleteTask = (index) => {
  const updatedTasks = [...todos];
  updatedTasks.splice(index, 1);
  setTodos(updatedTasks);
};
    
  

 

  
  return (
    <div className="App">
      <Container className="p-4">
        <Col md="4">
          <Card className="card-color">
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center card-title">
                Todo
              </Card.Title>
              <div className="d-flex justify-content-center align-items-center mb-4">
                <div>
                  <input
                    name="text"
                    value={userInput}
                    placeholder="Enter Name"
                    onChange={e=>setUserInput(e.target.value)}
                  />
                </div>
                <div>
                  <input type="button" onClick={addTodo} value="Submit" />
                </div>
              </div>

              <div className="todo-list">
                <h4> Todo List</h4>
              </div>
              <ListGroup as="ul">
              
                {todos.map((item)=>(
                  <ListGroup.Item as="li" key={item.id} >
                    <input type="checkbox" name ="text"  checked={item.completed}  onChange={()=>toggleTask(item.id)} />
                    <span>

                     {
                      item.completed ?  (<span style = {{textDecoration:'line-through'}}>{item.text}</span>) :item.text} 
                    
                    </span>
                  
                    
                    <Button style={{float: 'right'}} className="float-right" variant="outline-danger" onClick={() => deleteTask(item.id)}>&times;</Button>
                    
                  </ListGroup.Item>
                   
                   )        
                   
                )}
            

              </ListGroup>
                
              {/* <ul className="unstyled">
                {todos.map((item, index)=>(
                  <li key={index} >
                    <input type="checkbox" name ="text" value={item.text} onChange={handleChange} />
                    <span> {
                      checked ? (<span style = {listItemStyle}>{item.text}</span>):item.text}
                    
                    </span>               
                   
            <button onClick={() => deleteTask(index)}>Delete</button>
                    
                   
                  </li>
                   
                   )        
                   
                )}
              </ul> */}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default App;
