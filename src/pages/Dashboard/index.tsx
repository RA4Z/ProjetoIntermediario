import React, { useState, FormEvent } from 'react';
import { FiFastForward } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Repositories, Form } from './styles';

interface Repository {
  id: number;
  name: string;
  pokemon: {
    url: string;
  };
  sprites: {
    front_default: string;
  };
  version_group: {
    name: string;
  };
  types: Tipo[];
}

interface Tipo {
  type: {
    name: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [tipo, setTipo] = useState<Tipo[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`https://pokeapi.co/api/v2/pokemon-form/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setTipo(repository.types);
    setNewRepo('');
  }
  return (
    <>
      <Title>Pesquisa Pokémon</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do Pokémon"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.id} href={repository.pokemon.url}>
            <img
              src={repository.sprites.front_default}
              alt="pokemon"
            />
            <div>
              <strong>{repository.name}</strong>
              <p>Type: {repository.types.map(p => (
                <span>{p.type.name}, </span>
              ))}</p>
              <p>Game version: {repository.version_group.name}</p>
              <p>Poke ID: {repository.id}</p>
            </div>
            <b><img
            src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png"
            alt="pokebola"
            /></b>
          </a>
          
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
