import React, {useState, useEffect}from 'react';
import getPosts from './services/getPosts';

function App() {

  const [randomPosts, setPosts] = useState([])
  
  useEffect(() => {
    getPosts().then(post => setPosts(post))
  }, [])
  
  const titulos = []
  const parrafos = []

  randomPosts.forEach(function(element,index) {
    titulos.push(element.title)
    parrafos.push(element.body)
  })

  console.log(titulos)
  console.log(parrafos)

  return (
    <div className="App">
      <section className="seccion_clara website">
      <div className="contenedor-textos-main">
            <h2 className="seccion_titulo left headings">{titulos[0]}</h2>
            <p className="parrafo">{parrafos[0]}</p>

            <h2 className="seccion_titulo left seccion_titulo">{titulos[1]}</h2>
            <p className="parrafo">{parrafos[1]}</p>
        </div>
        <img src="/img/illustration-editor-desktop.svg" alt=""/>
      </section>

      <section className="secion_oscura website">
        <div className="svg-top"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
          className="svg_content">
          <path d="M0.00,49.99 C450.00,50.61 472.57,22.00 502.48,165.09 L500.00,0.00 L0.00,0.00 Z"
            className="svg_style"></path>
          </svg></div>

        <img src="/img/illustration-phones.svg" alt=""/>

        <div className="contenedor-textos-main">
            <h2 className="seccion_titulo left">{titulos[2]}</h2>
            <p className="parrafo">{parrafos[2]}</p>
        </div>
        
        <div className="svg-botton"><svg viewBox="0 0 500 150" preserveAspectRatio="none"
            className="svg_content">
            <path d="M-0.90,-104.30 C-13.31,137.46 31.82,83.19 511.51,87.14 L500.00,150.00 L-32.50,170.02 Z"
                className="svg_style"></path>
        </svg></div>
        
      </section>

      <section className="seccion_clara website">
        <img src="/img/illustration-laptop-desktop.svg" alt=""/>
        <div className="contenedor-textos-main">
            <h2 className="seccion_titulo left headings">{titulos[3]}</h2>
            <p className="parrafo">{parrafos[3]}</p>
        </div>
      </section>


    </div>
  );
}

export default App;
