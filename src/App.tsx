import { useState, useEffect } from "react";
import * as C from "./App.styles";
import {Item} from "./types/Item";
import {items} from "./data/items";
import {Category} from "./types/Category";
import {categories} from "./data/categories";
import {getCurrentMonth, filterListByMonth} from "./helpers/dateFilter";
import {TableArea} from "./components/TableArea/index"
import Logo from "../src/assets/financa.png";
import { InfoArea } from "./components/Info Area";



const  App = () => {

  const [list, setLIst] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


 
  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth]);

  useEffect(()=> {
    let expenseCount = 0;
    let incomeCount = 0;
    
    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  },[filteredList]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

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

          <InfoArea 
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />

          {/*Area  de insert info. */}

          <TableArea list={filteredList}/>
            
        </C.Body>
      </C.Container>
      
  </>
  )
}

export default App;
