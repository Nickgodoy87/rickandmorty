
import '../App'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'








export default function Card(props) {
   return (
      <div className={styles.div}>
         <div className={styles.btn2}>
          <button className={styles.btn} onClick={props.onClose}>X</button>
          </div>
          <img className={styles.img} src={props.image} alt='' /> 
         
        <div className={styles.divName}>
        <Link to={`/detail/${props.id}`} >
         <h2 className= {styles.nombre}>{props.name}</h2>
         </Link>
         </div>
         
  
         <div className={styles.divRest}>
         <div className={styles.divGen}>
         <h2 className= {styles.h2}>{props.species}</h2>
         </div>
         <div >
         <h2 className= {styles.h2}>{props.gender}</h2>
         </div>
         </div>
         
        
      </div>
   );
}

