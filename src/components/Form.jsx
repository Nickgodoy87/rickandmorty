import { useState } from 'react'
import style from './Form.module.css'
import Image from './img/Rick_y_Morty_Serie_de_TV-157026175-large.jpg'
import Validation from './validation'



const Form = (props) => {
       

  const handleSubmit=(event)=>{
    event.preventDefault()
    props.login(userData)
  }
       

      const [userData , setUserData ] = useState({
        email:"",
        password:""
      });

      const handleChange = (event) => {

        const property = event.target.name;
        const value = event.target.value;


        setErrors(Validation({
           ...userData,[property]:value
        }))
        
        
        
       
        setUserData({...userData, [property]:value})
       
      }
        
     const [errors , setErrors] = useState({
        email:"",
        password:""
     })







    return(
           <div className={style.principal}>
            <form onSubmit={handleSubmit}>
                
                 <div>
                 <img className={style.image}src={Image}></img>
                 </div>


                <div className={style.user}>
                <div>
                <label className={style.texto} htmlFor="email">EMAIL</label>
                </div>
                <div>
                <input className={style.inp} type="text" name="email" value={userData.email} onChange={handleChange}></input>
                
                </div>
                <span className={style.errorEmail}>{errors.email}</span>
                </div>
                <div className={style.pass}>
                <div>
                <label className={style.texto} htmlFor="password">PASSWORD</label>
                </div>
                <div>
                <input className={style.inp} type="text" name="password" value={userData.password} onChange={handleChange}></input>
                </div>
                <span className={style.errorPass}>{errors.password}</span>
                </div>
                <div className={style.btn}>
                <button className={style.boton}type="submit">SUBMIT</button>
                </div>






            </form>




           </div>
    )
}


export default Form