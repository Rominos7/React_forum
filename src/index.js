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
import Account_info from "./Components/Account_info/Account_info" 


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
                UserList ={this.state.List} />}
              />
              <Route
                path="/account_info"
                render={()=> <Account_info
                ItemList ={this.state.CustomList}
                />}
              /> 
              <Route component={NotFound}/>    
      </Switch>
    </Router>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'));