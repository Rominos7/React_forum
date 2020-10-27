import React from "react"
import "./Account_info.css"

class Account_info extends React.Component{ 
    
    state ={
        name:this.props.ItemList.name,
        role:this.props.ItemList.role,
        avatar:this.props.ItemList.avatar,
        created:this.props.ItemList.created,
        status:this.props.ItemList.status,
        email:this.props.ItemList.email,
        gender:this.props.ItemList.gender,
    }

    render(){
        const {name,role,status,avatar,created,email,gender} = this.props.ItemList;
        let URL = `https://bootdey.com/img/Content/avatar/avatar${this.state.avatar}.png`;
        return(
            <div className="container">
                <div className="row">
                   <h1>Account Info</h1>
                   <img className="avatar" src={URL} alt=""></img>
                   <h2>Name: {name}</h2>
                   <p>gender: {gender} </p>
                   <p>Role: {role} </p>
                   <p>Created: {created} </p>
                   <p>Status: {status} </p>
                   <p>Email {email}</p>   
                </div>
            </div>
        )
    }
    
}

export default Account_info;