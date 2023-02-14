import './Search.css';

function Search() {
  return (
    <section className='searchContainer'>
      <h1 className='searchTitle'>Buscar</h1>
      <p className='searchParagraph'>Selecione um tribunal para listar os processos ou buscar pelo número unificado</p>
      <form className='searchForm'>
        <label>
          <input type='number' />
        </label>
        <label>
          <input type='number' placeholder='Número do processo'/>
        </label>
        <input type='submit' value='Buscar' />

      </form>
    </section>
  );
}

export default Search;
