import { useState,useEffect } from "react";
import { getCategories } from "./apiCore";

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: '',
        search:'',
        results: [],
        searched: false
    })

    const loadCategories = () => {
        getCategories().then(data => {
            if(data.error) {
                console.log(data.error)
            }
            else {
                setData({...data, categories: data})
            }
        })
    }

    const {categories,category,search,results,searched} = data;

    useEffect(() => {
        loadCategories()
    }, [])

    return (
        <>
        <div>
            <h2>Search bar {JSON.stringify(categories)}</h2>
        </div>
        </>
      );
}
 
export default Search;