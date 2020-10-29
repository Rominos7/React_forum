import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { v4 as uidv4} from "uuid";
import "./index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// include componets
//import Sidebar from "./Components/Sidebar/sidebar";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import UserList from "./Components/UserList/userList";
import NotFound from "./Components/NotFound/NotFound";
import Account_info from "./Components/Account_info/Account_info";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";


class App extends React.Component{
 
  state = {
    List:[
      {
        id:uidv4(),
        name: "Mila Kunis",
        role: "Admin",
        avatar:"3",
        created: "2013/08/08",
        status: "Inactive",
        email: "mila@kunis.com",
        gender:'women',
      },

      {
        id:uidv4(),
        name: "George Clooney",
        role: "Admin",
        avatar:"2",
        created: "2013/08/08",
        status: "Active",
        email: "marlon@brando.com",
        gender:'men'
      },

      {
        id:uidv4(),
        name: "Ryan Gossling",
        role: "Registered",
        avatar:"1",
        created: "2013/03/03",
        status: "Banned",
        email: "jack@nicholson",
        gender:'men'
      },
    ],
    
    CustomList:[

    ],
    EditList:[

    ]
  };

  
  
   onStatusChange =(id)=>{
      const index = this.state.List.findIndex((elem)=>elem.id === id);
      const tmpList = this.state.List.slice();
      switch (tmpList[index].status) {
        case "Active": tmpList[index].status ="Inactive"
        break;
        case "Inactive": tmpList[index].status ="Banned"
        break;
        case "Banned": tmpList[index].status ="Pending"
        break;
        case "Pending": tmpList[index].status ="Active"
        break;
      }
      this.setState({
        List:tmpList,
      });
   }

   onDelete =(id) =>{
     const index = this.state.List.findIndex((elem)=>elem.id===id);
     const tmpList = this.state.List.slice();
     tmpList.splice(index,1);
     //console.log(tmpList)
     this.setState({
       List:tmpList,
     })
   }

   onRender =(id) =>{
     const index = this.state.List.findIndex((elem)=>(elem.id===id));
     const tmpList = this.state.List.slice();
     const newItem = tmpList[index];
     this.setState({
      CustomList:newItem,
     })
   }

   onEdit =(id) =>{
    const index = this.state.List.findIndex((elem)=>(elem.id===id));
    const tmpList = this.state.List.slice();
    const newItem = tmpList[index];
    this.setState({
     EditList:newItem,
    })
  }

   onCreate = (name, role, avatar, status, email, gender) => {
    let newContact = {
      id: uidv4(),
      name: name,
      role: role,
      avatar: avatar,
      created: Date.now(),
      status: status,
      email: email,
      gender: gender,
    };

    const newList = [...this.state.List, newContact];
    this.setState(() => {
      return {
        List: newList,
      };
    });
  };

  onEdit_2 = (name, role, avatar, status, email, gender,created,id) => {
    
    let newContact = {
      id: id,
      name: name,
      role: role,
      avatar: avatar,
      created: created,
      status: status,
      email: email,
      gender: gender,
    };
  

    const index = this.state.List.findIndex((elem)=>(elem.id===id));
    const tmpList = this.state.List.slice();
    
    tmpList[index] = newContact; 

    //const newList = [...this.state.List, newContact];
    this.setState(() => {
      return {
        List: tmpList,
      };
    });
    

  };

  render(){
   
    return(
      <Router>
        <Header />
        <Switch>   
              <Route
               path="/"
               exact
               render={() => <UserList  
                onStatusChange={this.onStatusChange}
                onDelete={this.onDelete}
                onRender={this.onRender}
                onEdit={this.onEdit}
                UserList ={this.state.List} />}
              />
              <Route
                path="/account_info"
                render={()=> <Account_info
                ItemList ={this.state.CustomList}
                />}
              />
               <Route
               path="/add-new-contact"
                render={()=><AddContact onCreate={this.onCreate}/>}
               />
               <Route
               path="/edit_contact"
               render={()=><EditContact
               onEdit_2={this.onEdit_2}
               EditList ={this.state.EditList}
                />}
               />
              <Route component={NotFound}/>    
      </Switch>
    </Router>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));