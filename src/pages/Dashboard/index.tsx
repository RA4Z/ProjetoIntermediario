import React, { useState, FormEvent } from 'react';
import { FiFastForward } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Repositories, Form } from './styles';

interface Repository {
  nome: string;
  atividade: string;
  owner: {
    email: string;
    uf: string;
    municipio: string;
    cnpj: string
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }

  return (
    <>
      <Title>Projetos passados enviados ao GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a key="GitHubRepository" href="https://github.com/RA4Z/GitHubRepository">
          <img
            src="https://avatars.githubusercontent.com/u/82897913?v=4"
            alt="RAZ"
          />
          <div>
            <strong>Repositório do GitHub</strong>
            <p>Projeto atual que está sendo criado como forma de aprendizado em React.</p>
          </div>
          <FiFastForward size={20} />
        </a>
      </Repositories>
      <Repositories>
        <a key="GitHubRepository" href="https://github.com/RA4Z/Consultor">
          <img
            src="https://i.pinimg.com/originals/9b/d4/62/9bd46236c29f887f8f61715e0a86c59a.png"
            alt="Jotaro"
          />
          <div>
            <strong>Projeto Consultoria</strong>
            <p>Projeto da WEG criado para realização do papel de um Consultor de acordo com as vontades da empresa.</p>
          </div>
          <FiFastForward size={20} />
        </a>
      </Repositories>
      <Repositories>
        <a key="GitHubRepository" href="https://github.com/RA4Z/ProjetoLoja">
          <img
            src="https://i.pinimg.com/280x280_RS/c5/84/ea/c584ea46a1c1f14fdb2573b26c1f2ef9.jpg"
            alt="Levi Ackerman"
          />
          <div>
            <strong>Projeto Loja</strong>
            <p>Projeto no qual foi desenvolvido todo um esquema para um sistema de uma loja com seu banco de dados.</p>
          </div>
          <FiFastForward size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
