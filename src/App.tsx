import { useState } from "react";
import * as C from "./App.styles";
import {Item} from "./types/Item";
import {Category} from "./types/Category";
import {items} from "./data/items";
import {categories} from "./data/categories";
import {getCurrentMonth} from "./helpers/dateFilter";




const  App = () => {


  const [list, setLIst] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState();
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  return (

    <>
    <C.Global/>

    <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          {/*Area  de info. */}

          {/*Area  de insert info. */}

          {/*Tabela de itens. */}

            
        </C.Body>
      </C.Container>
      
  </>
  )
}

export default App;
