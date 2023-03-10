const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div className='img-container'>
                    <img src="/images/cat-hiding.jpg" alt="cat hidng in shade" 
                    width="200px"
                    height="200px" />
                    <div className='attribute'>
                        photo by Photo by <a href="https://unsplash.com/ja/@haru21?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haru</a> on <a href="https://unsplash.com/t/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
                    </div>
                </div>
            
            </main>
        </Def>
    )
}

module.exports = error404