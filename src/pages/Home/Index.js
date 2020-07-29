import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Pará!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}      
      />
      <Carousel
        category={dadosIniciais.categorias[3]}      
      />
<<<<<<< HEAD:src/pages/Home/Index.js
=======
      <Footer />
>>>>>>> 5c3a506603e9121e99f58287b142377a08f500dc:src/App.js
      
      <Footer/>
    </div>
  );
}

export default Home;
