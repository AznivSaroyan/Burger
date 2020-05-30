import React, {useState} from 'react';
import './App.css';


function App() {

  let plusPrice = 0;
  
  const [price, setPrice] = useState(500); 

  const [mtTopBread, setMtTopBread] = useState(-16); 

  const [mtMeat, setMtMeat] = useState(-15);
  const [mlMeat, setMlMeat] = useState(-30);

  const [mlMarol, setMlMarol] = useState(-35);  
  const [mtMarol, setMtMarol] = useState(0); 

  const [mtTomatoes, setMtTomatoes] = useState(-15);
  const [mlTomatoes, setMlTomatoes] = useState(30);

  const [mtChees, setMtChees] = useState(6);
  const [mlChees, setMlChees] = useState(25);
  
 
  const [mlOnions, setMlOnions] = useState(-15); 
  const [mtOnions, setMtOnions] = useState(10);

 
  const [countMeat, setCountMeat] = useState(1);
  const [countMarol, setCountMarol] = useState(1);
  const [countTopBread, setCountTopBread] = useState(1);
  const [countOnions, setCountOnions] = useState(1);
  const [countTomatoes, setCountTomatoes] = useState(1);
  const [countChees, setCountChees] = useState(1);

////////////////////////////////////// meat
  const plusMeat = () => {
    plusPrice = 700;
    setPrice(price + plusPrice);
    setMlMeat(mlMeat + 30);
    setMtMeat(mtMeat + 12);
    
    setCountMeat((countMeat) => countMeat + 1);
        
    if((countMeat % 2) === 0){   
      setPrice(price - plusPrice);
      setMlMeat(mlMeat-30);
      setMtMeat(mtMeat-12);
    }
  }


////////////////////////////////////// add tomatoes
  const plusTomatoes = () => {
    plusPrice = 200;
    setPrice(price + plusPrice)
    setMtTomatoes(mtTomatoes + 7)
    setMlTomatoes(mlTomatoes - 29);

    setCountTomatoes((countTomatoes) => countTomatoes + 1);
        
    if((countTomatoes % 2) === 0){   
      setPrice(price - plusPrice);
      setMlTomatoes( + 30);
      setMtTomatoes(-15);
    }
  }


////////////////////////////////////// lower bread 
  const pressTopBread = () => { 
    setMtTopBread(- 10);
    setCountTopBread((countTopBread) => countTopBread + 1);
        
    if((countTopBread % 2) === 0){   
      setMtTopBread(mtTopBread - 10);
    }
  } 


////////////////////////////////////// add marol
  const plusMarol = () => { 
    plusPrice = 300;
    setPrice(price + plusPrice)
    setMtMarol(mtMarol - 5) 
    setMlMarol(mlMarol + 35)
    
    setCountMarol((countMarol) => countMarol + 1);
        
    if((countMarol % 2) === 0){   
      setPrice(price - plusPrice);
      setMtMarol(0);
      setMlMarol(- 35);
      
    }
  }


////////////////////////////////////// add chees 
  const plusChees = () => {
    plusPrice = 200;
    setPrice(price + plusPrice)
    setMtChees( - 8)
    setMlChees(mtChees - 6)

    
    setCountChees((countChees) => countChees + 1);
        
    if((countChees % 2) === 0){   
      setPrice(price - plusPrice);
      setMlChees( + 25);
      setMtChees(+ 6);
    }
  }


 ////////////////////////////////////// add onions 
  const plusOnions = () => {
    plusPrice = 100;
    setPrice(price + plusPrice)
    setMlOnions(mlOnions + 15)
    setMtOnions(mtOnions - 17)

    setCountOnions((countOnions) => countOnions + 1);
        
    if((countOnions % 2) === 0){   
      setPrice(price - plusPrice);
      setMlOnions(-15);
      setMtOnions(+10);
    }
  }

  
  return (
    <div className="burgerPage">
     
      <div className="calc">
          <label><input type="reset" className="price" value={price}/><p>դրամ</p></label>
      </div>

      <div className="burger">

            <img src={require('./img/meat.png')}
                  className="meat"
                  style={{marginLeft: mlMeat + "%", marginTop: mtMeat + "%", transition: 2 + "s",   
                          zIndex: 2}}
                  onClick={plusMeat}
                  alt='meat'
            />

            <img src={require('./img/marol.png')}
                  className="marol"
                  style={{marginLeft: mlMarol + "%", marginTop: mtMarol + "%", transition: 2 + "s", 
                          zIndex: 3}}
                  onClick={plusMarol}
                  alt='marol'
            />

            <img src={require('./img/topBread.png')}
                  className='topBread'
                  style={{marginTop: mtTopBread + "%", transition: 2 + "s", zIndex: 7}}
                  onClick={pressTopBread}
                  alt='bread'
            />

            <img src={require('./img/bread.png')}
                  className='bread'
                  style={{marginTop: 4 + "%", zIndex: 1}}  
                  alt='bread'  
            />

            <img src={require('./img/chees.png')}
                  className='chees'
                  style={{marginLeft: mlChees + "%", marginTop: mtChees + "%", transition: 2 + "s", 
                          zIndex: 6}}
                  onClick={plusChees}
                  alt='chees'
            />

            <img src={require('./img/tomatoes.png')}
                  className='tomatoes'
                  style={{marginLeft: mlTomatoes  + "%", marginTop: mtTomatoes + "%", transition: 2 + "s",
                         zIndex: 5}}
                  onClick={plusTomatoes}
                  alt='tomatoes'
            />

            <img src={require('./img/onions.png')}
                  className='onions'
                  style={{marginLeft: mlOnions  + "%", marginTop: mtOnions + "%", transition: 2 + "s", 
                          zIndex: 4}}
                  onClick={plusOnions} 
                  alt='onions'                 
            />

      </div>  
    </div>
  );
}

export default App;
