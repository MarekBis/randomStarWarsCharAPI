import './App.css'
import React from 'react'

class StarWars extends React.Component{
  constructor(){ 
    super()
    this.state={
      name:null,
      height:null,
      homeworld:null,
      img:null,
      diedLocation:null,
      loadedCharacter:false
    }
  }
  getNewCharacter(){
    const randomNumber = Math.round(Math.random()*88);
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`;
    fetch(url)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      this.setState({
        name:data.name,
        height:data.height,
        homeworld:data.homeworld,
        img:data.image,
        wiki:data.wiki,
        diedLocation:data.diedLocation,
        loadedCharacter:true
      })

    })
  }
  render(){
    return(
      <>
      <div className='content'>
        {
          !this.state.loadedCharacter &&
          <>
          <div className="imgContainer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Star_Wars_Logo..png" alt="logo" />
          </div>
            </>
        }
        {
          this.state.loadedCharacter &&
          <div>
            <div className="imgContainer">
            <img src={this.state.img} alt={this.state.img} />
            </div>
            <h1>{this.state.name}</h1>
            <a href={this.state.wiki} target="_blank">Wiki</a>
            <p>Height: {Math.round(this.state.height *100)} cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            {
              this.state.diedLocation &&
              <div>
                <p>Died : {this.state.diedLocation}</p>
              </div>
            }

          </div>
        }
      </div>
        <button type="button" onClick={()=>this.getNewCharacter()} className='btn'>Generate random character</button>
        </>
    )
  }

}


function App() {
  return (
    <>
    <StarWars />
    </>
  )
}

export default App
