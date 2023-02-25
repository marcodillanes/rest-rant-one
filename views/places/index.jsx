const React = require('react')

const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home

const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404


const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6">
          <h2>
            <a href={`/places/${index}`} >{place.name}
              </a> 
            </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}></img>
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
        <Def>
            <main>
                <h1>PLACES TO RAVE ABOUT</h1>
                <div className="row">
                {placesFormatted}

                </div>
                
            </main>
        </Def>
    )
    // ...
  }
  

module.exports = index


