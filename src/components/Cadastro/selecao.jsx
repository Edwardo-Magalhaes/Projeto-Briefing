
function selecao() {
  // Estado para armazenar a seleção do usuário
  const [selectedOption, setSelectedOption] = useState(null);

  // Função que atualiza o estado quando o usuário clica em uma opção
  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container">
      <h1>Selecione seu tipo de usuário</h1>
      
      <div className="buttons">
        <button
          className={selectedOption === 'profissional' ? 'selected' : ''}
          onClick={() => handleSelection('profissional')}
        >
          Profissional
        </button>

        <button
          className={selectedOption === 'cliente' ? 'selected' : ''}
          onClick={() => handleSelection('cliente')}
        >
          Cliente
        </button>
      </div>

      {/* Exibe a opção selecionada */}
      {selectedOption && (
        <div className="result">
          <p>Você selecionou: <strong>{selectedOption === 'profissional' ? 'Profissional' : 'Cliente'}</strong></p>
        </div>
      )}
    </div>
  );
}

export default selecao;
