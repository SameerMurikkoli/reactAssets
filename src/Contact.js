import React from 'react';
 


function Contact(Props)
{

    return
    (
        
         <div>
                 <h1> {Props.name} Contact</h1>
                 <label>Email ID:</label>
                <input type="text" /> 
                <br/>

                <label> Message </label>


                <textarea>

                </textarea>
                <button>Submit</button>
                
        </div>
    ) 


} 



    export default Contact;

    



     
 