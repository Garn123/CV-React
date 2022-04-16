import React from 'react'

const Education = ({education}) => {
  return (
    <>
        <div className='education card'>
            <h2>Formación</h2>
            {education.map(item => {
                return (
                    <div key={JSON.stringify(item)}>
                        <h3>{item.name}</h3>
                        <p><span>Año: </span>{item.date}</p>
                        <p><span>Unibersida: </span>{item.where}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Education