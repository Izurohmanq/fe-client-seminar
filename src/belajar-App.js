import './App.css';
import { Title } from "./components/title";
import Button from './components/button';
import Table from './components/Table';
import { useState } from 'react';
import Input from './components/Input';

const users = [
  {
    _id:1,
    name: 'Asep',
    kelas: 'SI4403',
    status: true
  },
  {
    _id:2,
    name: 'Padli',
    kelas: 'SI4403',
    status: true
  },
  {
    _id:3,
    name: 'Jmbt',
    kelas: 'SI4403',
    status: false
  },
]

const isLogin = false


function App() {
  
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({
    name : '',
    usia : '',
    tahun: ''
  })

  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (form.name === '') {
      setError('field tidak boleh kosong')
    } else {
      setForm({...form, usia: 2022 - form.tahun})
    }
  }

  const handleChange = (e) => {
    setError('')
    if (e.target.name === 'name') {
      if (e.target.value.length < 3 ) {
        setError("Minimal karakter 3")
      }
    }
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Testing lagi gan</h1>
      <Title title='asu'/>
      
      <Button onClick={() => alert('click save masseh')}>Save</Button>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>{isLogin ? 'Sudah Login' : 'Login'}</li>
      </ul>

      <ul>
        {/* kalau mau nampilin data pake map, kalau pake foreach, agak */}
        {/* kalau pake {} itu harus di-return */}

        <Table users={users}/>
      </ul>

      <>
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => count ? setCount(count - 1) : ''}>Kurang</button>
      </>


      <h1>Pengisian Siswa</h1>
      Nama: {''}
      <Input type='text' value={form.name} handleChange={handleChange} name='name'/>
      Tahun: {''}
      <Input type='number' value={form.tahun} handleChange={handleChange} name='tahun'/>
      Usia: {form.usia}

      <button onClick={handleSubmit}> SUBMIT </button>
      <p style={{ color: 'red' }} > {error} </p>
    </>
  );
}

export default App;
