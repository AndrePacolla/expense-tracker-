import { useState, useEffect } from "react";
import * as C from "./App.styles";
import {Item} from "./types/Item";
import {items} from "./data/items";
import {Category} from "./types/Category";
import {categories} from "./data/categories";
import {getCurrentMonth, filterListByMonth} from "./helpers/dateFilter";
import {TableArea} from "./components/TableArea/index"
import Logo from "../src/assets/financa.png"




const  App = () => {


  const [list, setLIst] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

 
  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth))
    console.log(filteredList);

  },[list, currentMonth]);

  return (

    <>
    <C.Global/>

    <C.Container>
        <C.Header>
          <C.Image/>          
          <C.HeaderText>
            Sistema Financeiro
            </C.HeaderText>
        </C.Header>
        <C.Body>
          {/*Area  de info. */}

          {/*Area  de insert info. */}

          <TableArea/>

            
        </C.Body>
      </C.Container>
      
  </>
  )
}

export default App;
