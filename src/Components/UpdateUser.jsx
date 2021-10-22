import React, { Component } from 'react';
import UserService from '../Services/UserService';

class UpdateUser extends Component {
constructor(props)
{
super(props)

this.state={
id: this.props.match.params.id,
name:'',
email:''
}

// this.idHandler = this.idHandler.bind(this);
this.nameHandler = this.nameHandler.bind(this);
this.emailHandler = this.emailHandler.bind(this);
this.updateUser = this.updateUser.bind(this);

}//constructor

componentDidMount()
{
UserService.getUserById(this.state.id).then((res) =>{
let user = res.data;
this.setState({name:user.name,
email:user.email
});
});

}

// idHandler=(event) => {
//     this.setState({
//          id: event.target.value});
// }

nameHandler=(event) => {
this.setState({
name: event.target.value});
}

emailHandler=(event) => {
this.setState({
email: event.target.value});
}

updateUser = (e) => {
e.preventDefault();
let user={
//    id: this.state.id,
name: this.state.name,
email: this.state.email
};

UserService.updateUser(user,this.state.id).then((res) => {
this.props.history.push('/users');
});


}

cancel(){
this.props.history.push('/users');
}

render() {
return (
<div>
<div className="container">
<div className="row">
<div className="card col-md-6 offset-md-3 offset-md-3">
<h3 className="text-center">Update User</h3>
<div className="card-body">
    <form>  
        {/* <div className="form-group">
            <label>User ID: </label>
            <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                value={this.state.id} onChange={this.idHandler} />
        </div>    */}
        <div className="form-group">
            <label>User Name: </label>
            <input 
            placeholder="Name" 
            name="name" 
            required
            className="form-control"
            value={this.state.name} onChange={this.nameHandler} />
        </div>   
        <div className="form-group">
            <label>User Email: </label>
            <input 
            placeholder="Email" 
            name="email" className="form-control"
            required
            type='email'
            value={this.state.email} onChange={this.emailHandler} />
        </div>   
        <button className="btn btn-success" onClick={this.updateUser}> Update </button>
        <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
    </form>
</div>
</div>
</div>
</div>
</div>
);
}
}

export default UpdateUser;
