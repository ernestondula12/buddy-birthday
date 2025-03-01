import React from 'react'
import Person from './Person'

const List = ({usuarios}) => {
  return (
    <section>
        {usuarios.map((usuario) => {
            return <Person key={usuario.id} {...usuario} />
        })}
    </section>
  )
}

export default List
