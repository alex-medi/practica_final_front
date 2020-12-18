import useFetch from './useFetch';

export const useTemaList = () => useFetch('http://localhost:8080/api/tematicas')

export const useUserInform = (id) => useFetch('http://localhost:8080/api/usuarios/'+id)

export const useTemaById = (id) => useFetch('http://localhost:8080/api/preguntas/'+ id)

export const usePreguntaById = (id) => useFetch('http://localhost:8080/api/respuestas/'+ id)

export const buscar = async (clave) => {
  const ret = await fetch('http://localhost:8080/api/pregunta/' + clave)
  const data = await ret.json()
  return data
}

export const login = async (login, password) => {
    const ret = await fetch('http://localhost:8080/api/usuarios/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ login, password })
      })
      const data = await ret.json()
      return data
}

export const register = async (fd) => {
    const ret = await fetch('http://localhost:8080/api/usuarios', {
      method: 'POST',
      //headers: { 'Content-Type': 'application/json' },
      body: fd
    })
    const data = await ret.json()
    return data
  }

  export const pregunta = async (id, fd, token) => {
    
    const ret = await fetch('http://localhost:8080/api/preguntas/'+id, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token },
      body: fd
    })
    const data = await ret.json()
    return data
  }

  export const respuesta = async (id, fd, token) => {
    
    const ret = await fetch('http://localhost:8080/api/respuestas/'+id, {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token},
      body: fd
    })
    const data = await ret.json()
    return data
  }

  export const edit = async (fd, token) => {
    
    const ret = await fetch('http://localhost:8080/api/usuarios/',{
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + token },
      body: fd
    })
    const data = await ret.json()
    return data
  }

  
  