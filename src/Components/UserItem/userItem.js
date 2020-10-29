import React from "react";
import "./userItem.css";
import {Link} from "react-router-dom"

import Account_info from "../Account_info/Account_info";
import EditContact from "../EditContact/EditContact";


class userItem extends React.Component{
    state ={
        name:this.props.name,
        role:this.props.role,
        avatar:this.props.avatar,
        created:this.props.created,
        status:this.props.status,
        email:this.props.email,
        gender:this.props.gender,
    }
    
    render(){  
        const {onStatusChange} = this.props;
        const {onDelete} = this.props;
        const {onRender} = this.props;
        const {onEdit} = this.props;
        const {status} = this.props;
        
        let URL = `https://bootdey.com/img/Content/avatar/avatar${this.state.avatar}.png`;
        
        let labelStyle = 'pointer label label-default';

        if(status === "Active"){
            labelStyle = "pointer label label-success";
        }
        else if(status=== "Inactive"){
            labelStyle = "pointer label label-default";
        }
        else if(status === "Banned"){
            labelStyle = "pointer label label-danger";
        }
        else if(status === "Pending"){
            labelStyle = "pointer label label-warning";
        }


        return(         
                        <tr>
							<td>
								<img src = {URL} alt="" />
                                 <Link to="/account_info" className="user-link" onClick={onRender}>
                                   {this.state.name}
                                 </Link>
								<span className="user-subhead">
                                    {this.state.role}
                                </span>
							</td>
							<td>
                            {this.state.created}
							</td>
							<td className="text-center" >
								<span className={labelStyle} onClick={onStatusChange}>
                                {status}
                                </span>
							</td>
							<td>
								<a href="#">{this.state.email}</a>
							</td>
							<td>
								<Link to="/account_info" className="table-link">
									<span className="fa-stack" onClick={onRender}>
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
								<Link to="/edit_contact" className="table-link" onClick={onEdit}>
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
								<a href="#" className="table-link danger">
									<span className="fa-stack" onClick={onDelete}>
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
									</span>
								</a>
							</td>
						</tr>
        )
    }
}

export default userItem;