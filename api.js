//const url =
//'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';



 function searchItems()
 {
   let item = document.getElementById( "searchTerm" ).value;

  fetch( `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch= ${item}` )
  .then(y=>y.json())
  .then(y=>{
    console.log(y);
    displayData(y);
  })
  
 }  

    

   function displayData(value)
    {
      let output = value.query.search.map(( value )=>
      {
  
        return ` <div class="results" id="results">
        <div class="articles">
          <a href="https://en.wikipedia.org/wiki/${value.title}" 
          target="_blank">
             
            <h4>${value.title}</h4>
            <p>${value.snippet}</p>
          </a>
        </div>
          </div> `
  
      } )
  
    document.getElementById( "results" ).innerHTML = output .join( " " );  
    
  }  
    
