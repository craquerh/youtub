import React, { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button className="menu" onClick={toggleVisibility}><img className="ime" src="src\assets\img\Burger.png"/></button>
      {isVisible && <div className="mem" >
       
        <a href="#">        <button className="q"><img src="src\assets\img\Home.png" /><a href="#"></a><h2>Accueil</h2></button>
</a>
        <button className="q"><img src="src\assets\img\Compass.png" /><h2>Explorer</h2></button>
        <button className="q"><img src="src\assets\img\Shorts.png" /><h2>Shorts</h2></button>
        <button className="q"><img src="src\assets\img\Subscriptions.png" /><h2>Abonnements</h2></button>
        <div className="sep">
        <hr className="sepa" />
        </div>

        <button className="q"><img src="src\assets\img\Group.png" /><h2>Biblioteca</h2></button>
        <button className="q"><img src="src\assets\img\reloj.png" /><h2>Historique</h2></button>
        <button className="q"><img src="src\assets\img\Yourvideos.png" /><h2>Vos vidéos</h2></button>
        <button className="q"><img src="src\assets\img\relo.png" /><h2>Historial</h2></button>
        <button className="q"><img src="src\assets\img\mani.png" /><h2>Vidéos "J'aime"</h2></button>
        
        </div>}
    </div>
  );
}

export default App;
