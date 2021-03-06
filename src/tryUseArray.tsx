import { useArray, useMount } from "utils"
import React from "react"

export const TsReactTest = () => {
  const persons: { name: string; age: number}[] = [
    {name:'jack', age: 25},
    {name:'ma', age: 22}
  ]

  const { value, clear, removeIndex, add } = useArray(persons)
  useMount(() => {
    // console.log(value.notExist)
    // add({name:'david'})
    // removeIndex(2)
  })
  return (
    <div>
      <button onClick={() => add({name:'john', age: 22})}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{marginBottom:'50px'}} onClick={() => clear()}>cleat</button>
      {
        value.map((persons:{age:number, name:string}, index:number) => (
          <div style={{marginBottom: '30px'}} key={index}>
            <span style={{color: 'res'}}>{index}</span>
            <span>{persons.name}</span>
            <span>{persons.age}</span>
          </div>
        ))
      }
    </div>
  )
}