import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Query All Seafood Catches</h2>
      <div className='query'>
        <button type="button" className='button'>Query</button>
      </div>

      <div className='seafoodInfo'>
        <table>
          <tr>
            <th>Catch ID</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Harvest Date</th>
            <th>Ship ID</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Timestamp</th>
            <th>Sale Code</th>
          </tr>
          <tr>
            <td>seafood1</td>
            <td>Tuna</td>
            <td>100 lbs</td>
            <td>11/20/2022</td>
            <td>G30A</td>
            <td>43.687685</td>
            <td>-78.248951</td>
            <td>-15C</td>
            <td>95%</td>
            <td>2022-11-22T17:00:01</td>
            <td>97</td>
          </tr>
          <tr>
            <td>seafood2</td>
            <td>Lobster</td>
            <td>25 lbs</td>
            <td>07/15/2022</td>
            <td>K90B</td>
            <td>32.711471</td>
            <td>136.432143</td>
            <td>-20C</td>
            <td>90%</td>
            <td>2022-07-17T12:01:22</td>
            <td>13</td>
          </tr>
          <tr>
            <td>seafood3</td>
            <td>Salmon</td>
            <td>30 lbs</td>
            <td>06/05/2022</td>
            <td>Z70E</td>
            <td>58.240242</td>
            <td>-148.160771</td>
            <td>-20C</td>
            <td>92%</td>
            <td>2022-06-10T09:25:13</td>
            <td>43</td>
          </tr>
          <tr>
            <td>seafood4</td>
            <td>Eel</td>
            <td>55 lbs</td>
            <td>12/25/2022</td>
            <td>W40F</td>
            <td>30.734467</td>
            <td>-75.289413</td>
            <td>-25C</td>
            <td>91%</td>
            <td>2022-12-28T18:35:40</td>
            <td>55</td>
          </tr>
          <tr>
            <td>seafood5</td>
            <td>Tilapia</td>
            <td>10 lbs</td>
            <td>01/18/2022</td>
            <td>L60Y</td>
            <td>46.577629</td>
            <td>-127.723283</td>
            <td>-15C</td>
            <td>93%</td>
            <td>2022-01-20T02:19:29</td>
            <td>34</td>
          </tr>
          <tr>
            <td>seafood6</td>
            <td>Crab</td>
            <td>20 lbs</td>
            <td>10/29/2022</td>
            <td>V80T</td>
            <td>59.707835</td>
            <td>0.597310</td>
            <td>-22C</td>
            <td>90%</td>
            <td>2022-10-31T23:06:10</td>
            <td>78</td>
          </tr>
          <tr>
            <td>seafood7</td>
            <td>Halibut</td>
            <td>300 lbs</td>
            <td>05/11/2022</td>
            <td>Z70E</td>
            <td>43.810816</td>
            <td>-67.571989</td>
            <td>-5C</td>
            <td>90%</td>
            <td>2022-05-13T15:24:20</td>
            <td>45</td>
          </tr>
        </table>
      </div>

      <div>
        <h2>Query a Specific Seafood Catch</h2>
        <div className='query'>
          <p>Enter a catch ID:</p>
          <input defaultValue="seafood6"></input>
          <button type="button">Query</button>
        </div>
      </div>
      

      <div className='seafoodInfo'>
        <table>
          <tr>
            <th>Catch ID</th>
            <th>Name</th>
            <th>Weight</th>
            <th>Harvest Date</th>
            <th>Ship ID</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Temperature</th>
            <th>Humidity</th>
            <th>Timestamp</th>
            <th>Sale Code</th>
          </tr>
          <tr>
            <td>seafood6</td>
            <td>Crab</td>
            <td>20 lbs</td>
            <td>10/29/2022</td>
            <td>V80T</td>
            <td>59.707835</td>
            <td>0.597310</td>
            <td>-22C</td>
            <td>90%</td>
            <td>2022-10-31T23:06:10</td>
            <td>78</td>
          </tr>
        </table>
      </div>

      <div>
        <h2>Create Seafood Record</h2>
        <form action="/action_page.php" className='newSeafood'>
          <label for="fname">Enter a catch ID:</label> <br />
          <input type="text" id="fname" name="fname" value="seafood7" /><br />
          <label for="lname">Enter a seafood name:</label> <br />
          <input type="text" id="lname" name="lname" value="Halibut" /> <br />
          <label for="fname">Enter a seafood weight:</label> <br />
          <input type="text" id="fname" name="fname" value="300 lbs" /><br />
          <label for="fname">Enter a harvest date:</label> <br />
          <input type="text" id="hdate" name="harvest" value="05/11/2022" /><br />
          <label for="fname">Enter a ship ID:</label> <br />
          <input type="text" id="sid" name="ship" value="Z70E" /><br />
          <label for="fname">Enter a longitude:</label> <br />
          <input type="text" id="long" name="longitude" value="43.810816" /><br />
          <label for="fname">Enter a latitude:</label> <br />
          <input type="text" id="lat" name="latit" value="-67.571989" /><br />
          <label for="fname">Enter a temperature:</label> <br />
          <input type="text" id="temp" name="temperature" value="-5C" /><br />
          <label for="fname">Enter a humidity:</label> <br />
          <input type="text" id="hud" name="humidity" value="90%" /><br />
          <label for="fname">Enter a sale code:</label> <br />
          <input type="text" id="sales" name="sale" value="45" /><br />
          <input type="submit" value="Submit" /> <br />
        </form> 
      </div>

    </div>


  );
}

export default App;
