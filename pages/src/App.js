import "./App.css";
import Footer from "./components/footer";
import { useState } from "react";
import axios from "axios";
import lixeira from "./assets/lixeira.png";
import editar from "./assets/edit.png";
import logo from "./assets/logo192.png";

function App() {
  const [cursos, setCursos] = useState();
  const [curso, setCurso] = useState();
  const [edit, setEdit] = useState();
  const [editInput, setEditInput] = useState(false);
  const [key, setKey] = useState("");

  return (
    <div className="Body">
      <nav className="navigation">
        <div className="topNav">
          <img alt="" className="logo" width={100} src={logo} />
          <p>CRUD - React</p>
        </div>
        <button onClick={() => getCursos()} className="styledButton">
          cursos
        </button>
        <div />
        <Footer />
      </nav>
      {/* <div className="main"> */}

      <div className="container">
        <div className="postCurso">
          <button onClick={() => postCursos()} className="novoCurso">
            Novo Curso
          </button>
          <input
            onChange={(e) => {
              setCurso(e.target.value);
            }}
            placeholder="nome do curso"
            className="inputPost"
          />
        </div>
        <div className="cursos">
          cursos disponiveis:
          {cursos
            ? cursos.map((item, key) => (
                <div className="item" key={key}>
                  <p>{item}</p>
                  <div className="editDelete">
                    <button
                      onClick={() => {
                        setEditInput(!editInput);
                        setKey(key);
                        setEdit(item);
                      }}
                    >
                      <img alt="" className="edit" width={30} src={editar} />
                    </button>
                    <button
                      onClick={() => {
                        deleteCurso(key);
                      }}
                    >
                      <img alt="" className="delete" width={30} src={lixeira} />
                    </button>
                  </div>
                </div>
              ))
            : null}
          {editInput ? (
            <div className="CampoEdit">
              <input
                className="inputEdit"
                onChange={(e) => setEdit(e.target.value)}
                value={edit}
              />
              <button
                className="buttonEdit"
                onClick={() => {
                  editCurso(key, edit);
                }}
              >
                Editar
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    // </div>
  );

  async function getCursos() {
    await axios
      .get("http://localhost:3001/cursos")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function postCursos() {
    if (curso) {
      await axios
        .post("http://localhost:3001/cursos", { name: curso })
        .then((response) => {
          setCursos(response.data);
          console.log("apareceu", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  async function deleteCurso(id) {
    await axios
      .delete("http://localhost:3001/cursos/" + id)
      .then((response) => {
        getCursos();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function editCurso(id, name) {
    await axios
      .put("http://localhost:3001/cursos/" + id, { name })
      .then((response) => {
        getCursos();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default App;
