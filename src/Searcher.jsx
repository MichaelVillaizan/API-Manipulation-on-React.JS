import React from "react";
import { useQuery } from "react-query";
import { getMovies } from "./movies";



export default function Searcher({searchValue, setSearchValue}){
    let [mListContent, setmListContent] = React.useState();
    
    


    const fetchResults= async (search)=>{
        let searchInput = search.target.value;
        setSearchValue(searchInput);
        const movie =  await getMovies(searchInput);
        const contenido = [];

        let searchResultRows = movie.rows;
        setmListContent();
        
        const  addContent=  () =>{
            searchResultRows.forEach(element => {
                contenido.push(<div><p>{element.title}</p></div>);        
          });}
        await addContent();
        setmListContent(contenido);
       
    }
    ;

    return[
        
        <label for="searcher" className="searcher-label">
        <span>🔍</span>
        <input id ="searcher" className="searcher" type="text" onChange={fetchResults }  value={searchValue}></input>
        </label>
        ,
        <div id="listOfMovies" className="listOfMovies">
        {mListContent}
        </div>
    ];


}
