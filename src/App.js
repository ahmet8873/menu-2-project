import './App.css';
import menu from './data/data';
import {useState} from 'react'
import Categories from './components/Categories'
import Menu from './components/Menu'

function App() {
  const allCategories= ['all',...new Set(menu.map((menu)=>menu.category)) ]  
    

  const[data,setData]=useState(menu)
  const[categories,setCategories]=useState(allCategories)
  

    
   
     const filterCategory=(category)=>{
      if(category==='all'){
        setData(menu)
        return;
      }
      const newItems= menu.filter((item)=>item.category===category)
      setData(newItems)
    }
     

  return (
    <main className='container'>
      <div className="title-section">
        <h2 className='title' >Our Menu</h2>
        <div className="underline"></div>
       </div>
      <Categories filterCategory={filterCategory} categories={categories}/> 
      
      <Menu data={data}/>
      
    </main>
  );
}

export default App;
