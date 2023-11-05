import { useEffect, useState } from "react";
import "./main.css";

const PerfilGit = () => {
  const [repos, setRepos] = useState([]);
  const [nomeGit, setNomeGit] = useState("");
  const [avatarLink, setAvatarLink] = useState(""); // Alterado para um estado separado

  const FuncaoCapturaNome = (evento) => {
    setNomeGit(evento.target.value);
  };

  // Requisição do API do GitHub
  useEffect(() => {
    if (nomeGit) {
      // Verifica se um nome foi digitado
      fetch(`https://api.github.com/users/${nomeGit}/repos`)
        .then((res) => res.json())
        .then((resJson) => {
          setRepos(resJson);
        })
        .catch((error) => {
          console.error("Erro na requisição à API do GitHub:", error);
          setRepos([]); // Define repos como um array vazio em caso de erro
        });

      setAvatarLink(`https://github.com/${nomeGit}.png`); // Atualiza o avatarLink apenas se um nome foi digitado
    } else {
      setAvatarLink(""); // Limpa o avatarLink se nenhum nome estiver presente
    }
  }, [nomeGit]);

  const exibirAvatar = () => {
    if (avatarLink) {
      return <img src={avatarLink} alt="avatar user" className="avatar--img" />;
    } else {
      return "";
    }
  };

  return (
    <div className="divForm">
      <form className="centerForm">
        <h2>Hello, which user are you looking for?</h2>
        <input
          onChange={FuncaoCapturaNome}
          type="text"
          id="userNameGit"
          placeholder="Enter user name.."
          className="form-control centerForm--input"
        />
      </form>
      <section>
        <div className="avatar">
           {exibirAvatar()} 
          <h2>welcome {nomeGit}</h2>
          
        </div>
      </section>
      <section className="container">
        <ul className="list">
          {repos.map(({ id, name, language, html_url }) => (
            <li key={id} className="listItem">
                <div className="itemName">
                    <b>Nome :</b>
                    {name}
                </div>
               <div className="itemLanguage">
                    <b>Linguagem :</b>
                    {language}
               </div>
                <a className="itemLink" target=" _blank" href={html_url}>
                  Visite no Git
                </a>
            </li>
          ))}
        </ul>
      </section>
        
      <footer className="footer">
        <div>
          <p>
            {" "}
            2023 ©{" "}
            <a
              href="https://www.linkedin.com/in/tales-lima-de-paula-9b0959299/"
              target=" _black"
            >
              Tales Lima
            </a>{" "}
            - Todos os direitos reservados{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PerfilGit;
