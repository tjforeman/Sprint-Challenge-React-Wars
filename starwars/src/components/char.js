import React from 'react'

const Char= props => {
    return(
<div className='char-container'>
<div className='name'>
<h2>{props.char.name}</h2>
</div>
<div className='info'>
<p>Born In: {props.char.birth_year}</p>
<p>Height: {props.char.height}</p>
<p>Mass: {props.char.mass}</p>
<p>Skin Color: {props.char.skin_color}</p>
</div>
</div>
)
}

export default Char
