import React , {useState , useEffect} from 'react';
import './App.css';
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import Pagination from "./components/ui/Pagination";
import axios from 'axios';

function App() {

  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchItems=async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      // console.log(result.data)
      
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  },[query])

  const indexOfLastPost=currentPage * postsPerPage ;
  const indexOfFirstPost= indexOfLastPost-postsPerPage;
  const currentPosts=items.slice(indexOfFirstPost,indexOfLastPost)

  const paginate= pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
    <Search getQuery={(q) => setQuery(q)}/>
    <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
    <CharacterGrid isLoading={isLoading} items={currentPosts}/>
  
    
    </div>
  );
}

export default App;
