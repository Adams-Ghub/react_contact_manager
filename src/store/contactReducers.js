// import react from 'react';

const initialState= {
    contact:[
        {name:"",
        phone:"",
        category:""}
    ]
   
}

const ContactReducer=(state=initialState,action)=>{
    switch(action.type){
        case"ADD_CONTACT":
        const newcContact={
            name:action.payload.name,
            phone:action.payload.phone,
            category:action.payload.category
        }

        
        return{...state, contact:[...state.contact, newcContact] };
        
        case "DEL_CONTACT":
           const filteredContact= state.contact.filter(contact=>contact.id!==action.payload)
           return{...state, contact:filteredContact   };

         default:
            return state;  
    }
}
export default ContactReducer;