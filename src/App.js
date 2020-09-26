import React from 'react';

import './App.css';
import Contact from './components/Contact.jsx';
import AddNewContactComponent from './components/AddNewContactComponent';
import EditContactComponent from './components/EditContactComponent';




class App extends React.Component{
    constructor(props){
            super(props)
            
            this.state={
            
                contact: []
            }
            
            this.Database=this.Database.bind(this)
    
    }
 
          Database(data){
              this.setState({contact:[...this.state.contact, data]})
             
            
        
        }
       
    render(){
       let storage=[]
        
        storage.push(this.state.contact)
        return(
            <div style={{display:"flex",flexDirection:"row"}}>
                <div style={{width:"50vw"}}>
                
                {this.state.contact.map((icontact,index)=>(<Contact name={icontact.name} phone={icontact.phone} category={icontact.category} key={index}/>))}
                </div>
                <div style={{borderLeftStyle:"solid",borderLeftColor:"#eeeeee",paddingLeft:"20px"}}>
                    <br/>
                    <div>
                        
                        <AddNewContactComponent 
                            MyDatabase={this.Database}   />
                    </div>
                    <div style={{marginTop:"30px"}}>
                        <EditContactComponent/>
                    </div>   

                </div>
               
            </div>
            
        )
    }
}

export default  App;
