import "./Styles.css"


const Cover = ()=>{
return (
    <div className="wrapper">

        <img className="logo" src="../img/landscape.png" alt="Logo" />

        <div> 
        <input type="text" placeholder="Enter your destination"></input>
            <select>
            <option>1</option>
            </select>
        <button>GO</button>
        </div>


{

// const headers = new Headers();
// headers.append("X-CSCAPI-KEY", "U0dLM3pIV21QSUxYbDZQeUtOQjF0OHJOWmV0RWFCbVFkeUZnS3BKdA==");

// var requestOptions = {
// method: 'GET',
// headers: headers,
// redirect: 'follow'
// };

// fetch("https://api.countrystatecity.in/v1/countries/IN/cities", requestOptions)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

}

    </div>

)}


export default Cover


