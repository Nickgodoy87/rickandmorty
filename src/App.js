import './App.css';
import React , {useState ,useEffect} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import axios from 'axios'
import { Routes ,Route} from 'react-router-dom';
import About from './components/view/About.jsx'
import Detail from './components/Deatil.jsx'
import Form from './components/Form.jsx';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function App() {

    const [characters , setCharacters] = useState([])
     
     
     const onClose = (id) => {
      const filtered = characters.filter(char => char.id !== id)
      setCharacters(filtered)
         
    }
      async function onSearch(id){
         try {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
            
         } catch (error) {
            error('No esta logueado')
         }
       }
   
    const location = useLocation();


    const Renderizado = () => {
        if(location.pathname !== '/'){
          return(
            <Nav onSearch={onSearch}/>
          )
        }
    }
    const email =  "nicogodoy540@gmail.com"
    const pass = "nunu2387"
    const navigate = useNavigate();

  
  
  
  const [access , setAccess]= useState(false)


  const login =(userData)=>{
   if (userData.password === pass && userData.email === email) {
      setAccess(true);
      navigate('/home')
   }



  }
  useEffect(() => {
   !access && navigate('/');
}, [access]);


   return (
      
      <div className='App'>
        
         <Renderizado/>
         

         <Routes>

            <Route path='/' element={<Form login={login}/>}></Route>
      
         
             <Route path="/home"
                        element= { <Cards 
               
                        characters={characters}
                        onClose={ onClose}
            />}>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            
        
          
            </Routes>
         
      </div>
      
   );
}

export default App;
