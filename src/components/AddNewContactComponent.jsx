import React from 'react';
import '../customstyle.css';




class AddNewContactComponent extends React.Component{
    constructor(props){
        super(props)
    
            this.state={
            name:"",
            phone:"",
            category:""
        }
       
        this.handlesChange=this.handlesChange.bind(this);
        this.handlesSubmit=this.handlesSubmit.bind(this)
        

    }

   


    handlesChange(e){
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
        
        
    }

    handlesSubmit(e){
        e.preventDefault()       
       this.props.MyDatabase(this.state)
       this.setState({
           name:"",
           phone:"",
           category:""
       })
       
    }

    
   
    render(){
        
        return(
            <div>
                <div className="componentBox">
                    <h2 className="componentTitle">
                        Add Contact Form
                    </h2>
                    <form onSubmit={this.handlesSubmit}>
                        <div><label>Name:</label><input name="name" type="text" value={this.state.name} onChange={this.handlesChange} /></div>
                        <div><label>Phone:</label><input name="phone" type="text" value={this.state.phone} onChange={this.handlesChange}/></div>
                        <div>
                            {/* <input onSelect={this.handlesChange} type="radio" name="category" value="friend" checked/>friend
                            <input onSelect={this.handlesChange} type="radio" name="category" value="family"/>family
                            <input onSelect={this.handlesChange} type="radio" name="category" value="customer"/>customer */}
                            <select value={this.state.category} name="category" onSelect={this.handlesChange}>
                                <option value="friend">friend</option>
                                <option value="family">family</option>
                                <option value="customer">customer</option>
                            </select>
                            
                           
                            
                            <div ><input  type="submit" value="Add contact" /></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}export default AddNewContactComponent;
