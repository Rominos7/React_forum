import React,{Fragment} from "react";
import "./userList.css";

import UserItem from "../UserItem/userItem";

const userList = ({UserList, onStatusChange,onDelete,onRender, onEdit}) =>{
    const item = UserList.map(item => {
        return(<UserItem 
            key={item.id}
            name={item.name} 
            role={item.role} 
            avatar={item.avatar} 
            created={item.created} 
            status={item.status} 
            email={item.email}
            gender={item.gender}
            onStatusChange={()=>onStatusChange(item.id)}
            onDelete={()=>onDelete(item.id)}
            onRender={()=>onRender(item.id)}
            onEdit={()=>onEdit(item.id)}
            />)
    })
    /*
    return(
        <UserItem UserData={UserList} />
    )
    */
   return(

    <div className="container">
        <div className="row">
        <div className="col-lg-12">
          <div className="main-box clearfix">
            <div className="table-responsive"></div>
    <table className="table user-list">
            <thead>
						<tr>
							<th><span>User</span></th>
							<th><span>Created</span></th>
							<th className="text-center"><span>Status</span></th>
							<th><span>Email</span></th>
							<th>&nbsp;</th>
						</tr>
					</thead>
                    <tbody>
                    {item.length !==0? item : <h2>Contact list is empty</h2>}
                    </tbody>
     
    </table>
    </div>
    </div>
    </div>
    </div>
     
   )
}

export default userList;
/*
//includes


const userList =() =>{
    return(
        <Fragment>
        <div className="user_list_spell">
            <h3>User List</h3>
             <UserItem />
             <UserItem />
        </div>
        </Fragment>
    )
}

export default userList;
*/

