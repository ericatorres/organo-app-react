import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="rodape-pagina">
      <div className='contatos'>
        <a href="facebook.com" target="_blank">
          <img src="/img/fb.png" alt="O facebook da Organo"/>
        </a>
        <a href="twitter.com" target="_blank">
          <img src="/img/tw.png" alt="O twitter da Organo"/>
        </a>
        <a href="instagram.com" target="_blank">
          <img src="/img/ig.png" alt="O instagram da Organo"/>
        </a>
      </div>
      <div className='logo'>
        <img src="/img/logo.png" alt="A logo da Organo"/>
      </div>
      <div>
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  )
}

export default Rodape;
