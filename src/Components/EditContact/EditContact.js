import React from "react";
import "./EditContact.css";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom"

class EditContact extends React.Component{
    
    state = {
      id:this.props.EditList.id,
      name:this.props.EditList.name,
      role:this.props.EditList.role,
      avatar:this.props.EditList.avatar,
      created:this.props.EditList.created,
      status:this.props.EditList.status,
      email:this.props.EditList.email,
      gender:this.props.EditList.gender,
        isRedirect: false,
      };
    
      getName = (event) => {
        this.setState({
          name: event.target.value,
        });
      };
      getRole = (event) => {
        this.setState({
          role: event.target.value,
        });
      };
      getAvatar = (event) => {
        this.setState({
          avatar: event.target.value,
        });
      };
      getStatus = (event) => {
        this.setState({
          status: event.target.value,
        });
      };
      getEmail = (event) => {
        this.setState({
          email: event.target.value,
        });
      };
    
      getGender = (event) => {
        this.setState({
          gender: event.target.value,
        });
      };
    
      onSendData = (event) => {
        event.preventDefault();
        const { name, role, avatar, status, email, gender, created, id} = this.state;
        this.props.onEdit_2(name, role, avatar, status, email, gender,created,id);
        this.setState({
          isRedirect: true,
        });
      };
    
    
    render(){

      let URL = `https://bootdey.com/img/Content/avatar/avatar${this.state.avatar}.png`;
 
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
          }

        return(
            <div className="container">
            <div className="row">
              <div className="col-md-12">
              <h2>Edit Contact</h2>
              <img className="avatart-img" src = {URL} alt="" />
                <form onSubmit={this.onSendData} className="form-group-width">
                  <div className="form-group">
                    <div>
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.getName}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div>
                    <label>Role</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Role"
                        value={this.state.role}
                        onChange={this.getRole}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div>
                    <label>Avatar(number)</label>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        className="form-control"
                        placeholder="Avatar"
                        value={this.state.avatar}
                        onChange={this.getAvatar}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div>
                    <label>Status</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Status"
                        value={this.state.status}
                        onChange={this.getStatus}
                      />
                    </div>
                  </div>
    
                  <div class="form-group">
                    <div>
                    <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.getEmail}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div>
                    <label>Gender</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                        value={this.state.gender}
                        onChange={this.getGender}
                      />
                    </div>
                  </div>
    
                  <div class="form-group">
                    <div>
                      <button type="submit" class="btn btn-default">
                        Edit contact
                      </button>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        );
        
    }
}

export default EditContact;