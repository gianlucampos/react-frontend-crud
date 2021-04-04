import { useHistory } from 'react-router';
import '../styles/components/MusicaCad.css'

export function MusicaCad() {
  const history = useHistory();

  function saveMusica() {
    
  }

  function cancel() {
    history.push('/musicas');
  }

  return (
    <div className={"container"}>
      <div className={"box"}>
        <div className={"formCad"}>
          <h2>Cadastro</h2>
          <label> Música </label>
          <input placeholder="Nome da música" name="nomeMusica" />
          <br />
          <label> Artista </label>
          <select name="cmbArtista">
            <option value="1">Red Hot Chili Peppers</option>
            <option value="2">Blink 182</option>
          </select>
          <br />
          <label> Album </label>
          <select name="cmbArtista">
            <option value="1">Stadium Arcadium</option>
            <option value="2">The Enema of State</option>
          </select>
          <br />
          <div className="formButtons">
            <button onClick={saveMusica}> Salvar </button>
            <button onClick={cancel}> Cancelar </button>
          </div>
        </div>
      </div>
    </div>
  );
}