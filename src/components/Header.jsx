const Header = ({ onchange }) => {
    return (
      <div className="flex justify-between items-center text-primary p-4">
        <h2>Buscador de colaboradores</h2>
        <input
          type="text"
          placeholder="Busca un colaborador"
          className="text-primary p-1"
          onChange={onchange}
        />
      </div>
    );
  };
  
  export default Header;