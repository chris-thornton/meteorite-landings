import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <title>Meteorite Landings</title>
      <header style={{marginTop: -27}}> 
      <h1 className="Center" style={{width: '90%', fontSize: '40px'}}>
      Meteor<span style={{color: 'rgb(252, 61, 33)'}}>i</span>te Land<span 
      style={{color: 'rgb(252, 61, 33)'}}>i</span>ngs</h1>
      </header>
      <div style={{marginBottom: '1em'}} className="Center">
      <input type='text' placeholder=' Search by name' id='searchBar' 
      style={{fontSize: '20px',
      borderRadius: '5px', paddingLeft: '2px', width: '250px'}}/>
       <button onClick={filterMeteorites}>Search</button>
      </div>
      <div className = "tableScroll">
      <table id="meteorTable">
        <thead>
          <tr style={{fontSize: '20px'}}>
            <th>Name</th>
            <th>ID</th> 
            <th>Name Type</th>
            <th>Rec Class</th>
            <th>Mass (g)</th> 
            <th>Fall</th>
            <th>Year</th>
            <th>Latitude</th> 
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        </tr>
        </tbody>
        <tbody>
        <tr>
        </tr>
        </tbody>
      </table>
      </div>
      {meteoriteApi()}
      </div>
  );
}

function meteoriteApi() { fetch('https://data.nasa.gov/resource/gh4g-9sfh.json/')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('meteorTable');
    for(let i = 0; i < data.length; i++){
     let row = table.insertRow(-1);
     let meteoriteName = document.createTextNode(`${data[i].name}`);
     let cell0 = row.insertCell(0);
     cell0.appendChild(meteoriteName);
     let meteoriteId = document.createTextNode(`${data[i].id}`);
     let cell1 = row.insertCell(1);
     cell1.appendChild(meteoriteId); 
     let meteoriteNameType = document.createTextNode(`${data[i].nametype}`);
     let cell2 = row.insertCell(2);
     cell2.appendChild(meteoriteNameType);
     let meteoriteRecClass = document.createTextNode(`${data[i].recclass}`);
     let cell3 = row.insertCell(3);
     cell3.appendChild(meteoriteRecClass);
     let meteoriteMass;
     if(data[i].mass !== undefined){
      meteoriteMass = document.createTextNode(`${data[i].mass}`);
      } else{
      meteoriteMass = document.createTextNode('Undocumented');
     }
     let cell4 = row.insertCell(4);
     cell4.appendChild(meteoriteMass);
     let meteoriteFall = document.createTextNode(`${data[i].fall}`);
     let cell5 = row.insertCell(5);
     cell5.appendChild(meteoriteFall);
     let meteoriteYear;
     if (data[i].year !== undefined){
      meteoriteYear = document.createTextNode(`${data[i].year.substring(0, 4)}`);
     } else {
      meteoriteYear = document.createTextNode('Undocumented');
     }
     let cell6 = row.insertCell(6);
     cell6.appendChild(meteoriteYear);
     let meteoriteLat;
     if(data[i].reclat !== undefined){
      meteoriteLat = document.createTextNode(`${data[i].reclat}`);
      } else{
      meteoriteLat = document.createTextNode('Undocumented');
     };
     let cell7 = row.insertCell(7);
     cell7.appendChild(meteoriteLat);
     let meteoriteLong;
     if(data[i].reclong !== undefined){
      meteoriteLong = document.createTextNode(`${data[i].reclong}`);
      } else{
      meteoriteLong = document.createTextNode('Undocumented');
     };
     let cell8 = row.insertCell(8);
     cell8.appendChild(meteoriteLong);
    }
  })
  .catch(err => console.log(err));
};

function filterMeteorites() {
  const table = document.getElementById('meteorTable');
  let tbodylog = document.getElementsByTagName("tbody")[1];
  console.log(tbodylog);
  let textBar = document.getElementById("searchBar").value.toLowerCase();
  if (textBar.length === 0) {
    tbodylog.remove();
    let newTbody = document.createElement("tbody")
    newTbody.insertRow(0);
    table.appendChild(newTbody);
    meteoriteApi();
  } else {
    tbodylog.remove();
    let newTbody = document.createElement("tbody")
    newTbody.insertRow(0);
    table.appendChild(newTbody);
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json/')
    .then(response => response.json())
    .then(data => {
    for(let i = 0; i < data.length; i++){
     let nameLowerCase = data[i].name.toLowerCase();
     if (nameLowerCase.includes(`${textBar}`)) {
     let row = table.insertRow(-1);
     let meteoriteName = document.createTextNode(`${data[i].name}`);
     let cell0 = row.insertCell(0);
     cell0.appendChild(meteoriteName);
     let meteoriteId = document.createTextNode(`${data[i].id}`);
     let cell1 = row.insertCell(1);
     cell1.appendChild(meteoriteId); 
     let meteoriteNameType = document.createTextNode(`${data[i].nametype}`);
     let cell2 = row.insertCell(2);
     cell2.appendChild(meteoriteNameType);
     let meteoriteRecClass = document.createTextNode(`${data[i].recclass}`);
     let cell3 = row.insertCell(3);
     cell3.appendChild(meteoriteRecClass);
     let meteoriteMass;
     if(data[i].mass !== undefined){
      meteoriteMass = document.createTextNode(`${data[i].mass}`);
      } else{
      meteoriteMass = document.createTextNode('Undocumented');
     }
     let cell4 = row.insertCell(4);
     cell4.appendChild(meteoriteMass);
     let meteoriteFall = document.createTextNode(`${data[i].fall}`);
     let cell5 = row.insertCell(5);
     cell5.appendChild(meteoriteFall);
     let meteoriteYear;
     if (data[i].year !== undefined){
      meteoriteYear = document.createTextNode(`${data[i].year.substring(0, 4)}`);
     } else {
      meteoriteYear = document.createTextNode('Undocumented');
     }
     let cell6 = row.insertCell(6);
     cell6.appendChild(meteoriteYear);
     let meteoriteLat;
     if(data[i].reclat !== undefined){
      meteoriteLat = document.createTextNode(`${data[i].reclat}`);
      } else{
      meteoriteLat = document.createTextNode('Undocumented');
     };
     let cell7 = row.insertCell(7);
     cell7.appendChild(meteoriteLat);
     let meteoriteLong;
     if(data[i].reclong !== undefined){
      meteoriteLong = document.createTextNode(`${data[i].reclong}`);
      } else{
      meteoriteLong = document.createTextNode('Undocumented');
     };
     let cell8 = row.insertCell(8);
     cell8.appendChild(meteoriteLong);
    }
  }
  })
  .catch(err => console.log(err));
  }


}

export default App;
