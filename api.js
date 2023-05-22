// const url =
//   'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

/* yaha uper humne ek wikipidia ki url li hai . jo hum free mai use ker
sakte hai. it means humko login karne k zarurat nahi padti hai. directly 
ye link ka data milta hai. 
 */



 function searchItems()
 {
   let item = document.getElementById( "searchTerm" ).value;

  /*  yaha humne srsearch=${item} liya hai. it means input texbox mai jo 
  bhi search kerte hai wo.... jo uper humne item name ke var mai store
  kiya hai isliye srsearch= ${item} liya*/

  /* use of fetch without parameter   */
 
  fetch( `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=30&format=json&origin=*&srsearch=${item}` )
  .then(y=>y.json())
  .then(y=>{
    console.log(y);
    displayData(y);
  })
  
 }  

    /* now uper ki url ka sara data humko json format mai milega, bt humko
    sara data nahi chahiye usme se sirf search mai jo humne liya hai wo h data
    chahiye. wo data queary mai search mai hai. so write value.query.search
    then apply map function taki wo search kiya hai uski sari value humko mil
    jaye.
    ab humne <a> tag mai humne title liya(ye main title hai) then <h4> mai 
    title liya then <p> mai snippet liya. 
    yaha pura div humne <a> mai wrap krva diya hai. taki jo bhi 
    search box mai search karenge uske related sara data mil jaye. usme se
    humko jo data chahiye wo link per click karenge to mil jayega.  yaha 
    maine search box mai javascript search kiya then niche bahut sare <a> mai
    div dikhai diye. jo bhi javascript ki information chahiye uske related
    div hoga wo click karenge to 
    https://en.wikipedia.org/wiki/JavaScript   page open hoga. to yaha 
    ${value.title} liya  it means yaha javascript title hai to wo page
    open hoga then <h4> mai Javascript likha hoga then snippet means javascript
    ka discription hoga. is tarah api se only javascript ka data liya.
   */

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
    
