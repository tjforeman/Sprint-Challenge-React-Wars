import React from 'react'
import Char from './char'
const List = props =>{
    return(
        <div ClassName='list-container'>
        {props.chars.map(char =>(
    <Char key={char.edited} char={char} />
    ))}
        </div>
    )
}
export default List