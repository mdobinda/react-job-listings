import React from 'react'
import ToDoList from '../components/ToDoList'


const LIST = [
    {
        id: 1,
        text: "first item"
    },
    {
        id: 2,
        text: "second item"
    },
    {
        id: 3,
        text: "third item"
    }, 
    {
        id: 4,
        text: "fourth item"
    },
    {
        id: 5,
        text: "fifth item"
    },
]

const List = () => {
  return (
    <ToDoList initialList={LIST} />
  )
}

export default List