import React from 'react'

const Categories = ({categories,filterCategory}) => {
  return (
    <section className='buttons'>
      {categories.map((category,index)=>
        <button key={index} className='cate-button' onClick={()=>filterCategory(category)}>{category}</button>
      )}
    </section>
  )
}

export default Categories