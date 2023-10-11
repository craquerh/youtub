import Penu2 from './menu/Penu2.jsx';
import LogoYoutube from './assets/img/LogoYoutube.png';
import Menu from './menu/Menu.jsx/';
import Carru from './pen/Carru.jsx';
import Vieos from './videos/Videoss.jsx';


export function Inicio() { 
    return (
      
        <div className='padre'>
          <div className='hj'>
           
                <Menu />  <div className='im'><img src={LogoYoutube}/></div> 
                <div className='relle'></div>
                 <div className='inp'>
                  <div className='bus'><input type="text" />
                 <button className='inpbt'><img src="src\assets\img\lupa.png"  /></button></div>
                 <div className=''><button className='micro'><img src="src\assets\img\Mic.png" /></button></div>
                 <div className='fi'>
                 <div className='cent'><img src="src\assets\img\lala.png" /></div>
                 <div className='cent'><img src="src\assets\img\ca.png" /></div>
                 <div className='cent'><img src="src\assets\img\vi.png" /></div>
                 </div>
                 </div>
               
          </div>
          <div className='hj2'> <Penu2 /> </div>
            <div className='hj3'><Carru /><Vieos /></div>
        </div>
      
    );
  }
  
  export default Inicio;