import useFetch from './useFetch';

export const useTemaList = () => useFetch('http://localhost:8080/api/tematicas')

export const useUserInform = (id) => useFetch('http://localhost:8080/api/usuarios/'+id)

export const useTemaById = (id) => useFetch('http://localhost:8080/api/preguntas/'+ id)

export const usePreguntaById = (id) => useFetch('http://localhost:8080/api/respuestas/'+ id)

export const login = async (email, password) => {
    const ret = await fetch('http://localhost:8080/api/usuarios/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
      })
      const data = await ret.json()
      return data
}

export const register = async (nombre, email, login, password, experto, empresa) => {
    const ret = await fetch('http://localhost:8080/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, login, password, experto, empresa})
    })
    const data = await ret.json()
    return data
  }

  export const pregunta = async (id, titulo, cuerpo, token) => {
    
    const ret = await fetch('http://localhost:8080/api/preguntas/'+id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ titulo, cuerpo })
    })
    const data = await ret.json()
    return data
  }

  export const respuesta = async (id, descripcion, token) => {
    
    const ret = await fetch('http://hab.trek-quest.com/users/'+id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ descripcion })
    })
    const data = await ret.json()
    return data
  }

  export const edit = async (id, login, password, experto, empresa, token) => {
    
    const ret = await fetch('http://localhost:8080/api/usuarios/'+id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ login, password, experto, empresa })
    })
    const data = await ret.json()
    return data
  }
  