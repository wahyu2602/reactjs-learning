import NavBar from './components/navbar/NavBar';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState(
    {
      title: '',
      font: '',
      fontsize: '',
    }
  )

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((state) => ({
      ...state,
      [name]: value,
    }))
  }

  const reset = () => {
    setInput(
      {
        title: '',
        font: '',
        fontsize: '',
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((state) => ([...state, input]));
    reset();
  }


  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="bg-secondary rounded p-3">
          {data.length == 0 ?
            <>
              <p>Title One</p>
              <p>Title Two</p>
              <p>Title Three</p>
            </> : data.map((d) =>
              <p style={{ fontFamily: d.font }} className={d.fontsize} key={d.title}>{d.title}, {d.font}</p>
            )
          }

        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control name="title" type="text" placeholder={`title `} value={input.title} onChange={handleInput} />
              </Form.Group>
            </div>
            <div className="col-3">
              <Form.Select name="font" onChange={handleInput}>
                <option>Font</option>
                <option value="arial">Arial</option>
                <option value="Ramaraja">Ramaraja</option>
                <option value="ubuntu">Ubuntu</option>
              </Form.Select>
            </div>
            <div className="col-3">
              <Form.Select name="fontsize" onChange={handleInput}>
                <option>Font Size</option>
                <option value="f-12">12</option>
                <option value="f-14">14</option>
                <option value="f-16">16</option>
              </Form.Select>
            </div>
            <div className="col-3">
              {data.length >= 3 ?
                <Button disabled variant="primary">Simpan</Button> :
                <Button type="submit" variant="primary">Simpan</Button>
              }
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
