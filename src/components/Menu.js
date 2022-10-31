import React from 'react'

const Menu = ({data}) => {
  
  return (
    <section className='menu-comp'>
      {data.map((menu)=>{
          const{id,title,price,img,desc}=menu;
            return(
              <section key={id} className='single-menu'>
                <img className='image' src={img} alt={title} />
                <div className="menu-info">
                  <div className="top-info">
                        <h4 className='title'>{title}</h4>
                        <p className='price'>${price}</p>
                       
                   </div>
                       <hr />
                         <p className='desc'>{desc}</p>
                </div>
               
              </section>
            )
      })}
    </section>
  )
}

export default Menu