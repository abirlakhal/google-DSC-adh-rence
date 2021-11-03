import React, {Component} from 'react'
import formService from './services/form.service';
import img from'./GDSC.png'

export default class Body extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangetel = this.onChangetel.bind(this);
        this.save = this.save.bind(this);
       
        this.state = {
            id: null,
            name: "",
            email: "",
            level: "",
            tel: "",
           
        };
    }
    
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeLevel(e) {
        this.setState({
            level: e.target.value
        });
    }

    onChangetel(e) {
        this.setState({
            tel: e.target.value
        });
    }

    save() {
        
        var data = {
            name: this.state.name,
            email: this.state.email,
            level: this.state.level,
            tel: this.state.tel
        };
    
        formService.create(data)
            .then(response => {
                this.useState({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    level: response.data.level,
                    tel: response.data.tel

                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }        
    
    render() {
        return (
            <div className="submit-form">
                <h1 class="font-weight-bold" >GDSC EPI</h1>
                <h2>Google Developer Student Club</h2>
               
                <form>
                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input class="form-control" type="text" placeholder="Enter your name" id="name"
                        value={this.state.name} onChange={this.onChangeName} name="name"   />
                    </div>

                    <div >
                        <label htmlFor="email">Email Address</label>
                        <input class="form-control"type="text" placeholder="Enter email address" id="email"
                        value={this.state.email} onChange={this.onChangeEmail} name="email"   />
                    </div>

                    <div >
                        <label htmlFor="level">Level</label>
                        <input class="form-control" type="text" placeholder="Enter level" id="level"
                        value={this.state.level} onChange={this.onChangeLevel} name="level"  />
                    </div>

                    <div>
                        <label htmlFor="tel">Phone number</label>
                        <input class="form-control" type="text" placeholder="Enter phone number" id="tel"
                        value={this.state.tel} onChange={this.onChangetel} name="tel"  />
                    </div>

                    <div className="row">
                        <button onClick={this.save} className="btn btn-sucess " >Register</button>
                    </div>
                </form>
                <img src={img} alt="GDSC"></img>
            </div>
        );
    }          
}


