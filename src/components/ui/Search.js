import React ,{ useState } from 'react' ;

const Search = ({ getQuery }) => {

   const onChange=(q) => 
   {
       setText(q)
       getQuery(q)
   }

    const [text,setText] = useState('')
    return (
        <section className="search">
            <form>
                <input type="text"  placeholder="Search" 
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus/>
                
            </form>
        </section>
    )
}

export default Search;
