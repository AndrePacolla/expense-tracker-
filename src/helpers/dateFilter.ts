import {Item} from "../types/Item"



export const getCurrentMonth = () => {
    let now = new Date();
    let month = now.getMonth()+1;

    return `${now.getFullYear()} - ${addZeroToDate(month)}`;
};

export const filterListByMonth = (list: Item[], date: string ): Item[] => {
    let newList:Item[] = [];
    let [year , month] = date.split("-");
    

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ){
            newList.push(list[i]);
        };   
    };
    return newList;
};

export const formatDate = (date: Date): string => {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();      

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate  = (n: number) => n < 10 ? `0${n}` : `${n}`;


export const formatCurrentMonth = (currentMonth: string): string => {
    let [year , month] = currentMonth.split("-");
    let months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];


}
