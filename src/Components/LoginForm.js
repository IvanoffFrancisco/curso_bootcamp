import React,{useState} from 'react'
import "../Css/LoginForm.css"

export default function LoginForm(props) {
    //creo este estado para poder manejar el error
    const[error,setError]=useState('');

    //desetructuro las props que traigo de Login
    const {data,setData,isLogged}=props;
    const heandlerChangeForm=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const heandlerClick=(e)=>{
        //verifico los datos del formulario
        if(data.email==="profesor@test.com"){
            if(data.password==="profesor123"){
                if(data.tipo==='profesor'){
                    setError('');
                    isLogged();
                console.log(`Ingreso exitoso ${data.email} ${data.tipo}`);
                }else{
                    setError('error')
                }
            }else{
                setError('error')
                
            }
        }else{
            setError('error')
        }
    }


  return (
    <div className='contenedor'>
        <div className='contenedorForm'>
            <h2 className='tituloForm'>Please fill in your unique admin login details below</h2>
            <div className='form'>
                {error==="error" ? (
                    <div className='contenedorError'>
                        <h2 className='error'>Error email y/o contraseña incorrectas</h2>
                    </div>
                ): null
                }
                <div className='contenedorEmail'>
                    <label htmlFor="email" className='labelEmail'>Email address</label>
                    <input type="email" id="email" name="email" className="input" onChange={heandlerChangeForm}/> 
                </div>
                <div className='contenedorTipo'>
                    <label htmlFor="tipo" className='labelTipo'>Tipo</label>
                    <select name="tipo" id="tipo" className='input' onChange={heandlerChangeForm}>
                        <option value="alumno">Alumno</option>
                        <option value="profesor">Profesor</option>
                    </select>
                </div>
                <div className='contenedorPassword'>
                    <label htmlFor="password" className='labelPassword'>Password</label>
                    <input type="password" id="password" name="password" className="input" onChange={heandlerChangeForm}/>
                    <div className='contenedorLinks'>
                        <div>
                            <a href="">forgot password?</a>
                        </div>
                        <div>
                            <a href="">Registrarse</a>
                        </div>
                    </div> 
                        
                </div>
                <div className='contenedorBoton'>
                    <button onClick={heandlerClick} className='Boton'>Sign in</button>
                </div>
            </div>
        </div>
    </div>
  )
}
