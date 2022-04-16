import React from 'react'

const Experience = ({experience}) => {
  return (
    <>
        <div className='experience card'>
            <h2>Experiencia</h2>
            {experience.map(item => {
                return (
                    <div key={JSON.stringify(item)}>
                        <h3>{item.name}</h3>
                        <p><span>Año: </span>{item.date}</p>
                        <p><span>Lugar: </span>{item.where}</p>
                        <p className='description'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Experience