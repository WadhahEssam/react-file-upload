import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    file: null
  }

  render() {
    return (
      <div className="App">
        <h1>UPLOAD FILE PAGE</h1>
        <div>
          <label>Select File : </label>
          <input 
            name="file" 
            type="file"
            onChange={this.handleFile}  
          />
        </div>
        <br/>
        <button onClick={this.handleUpload}>upload file</button>
      </div>
    );
  }

  handleFile = (e) => {
    this.setState({file: e.target.files[0]})
  }

  handleUpload = () => {
    let file = this.state.file
    let formdata = new FormData()
    formdata.append('file', file);
    formdata.append('name', 'file')

    axios({
      url: 'http://localhost:8000/upload',
      method: 'POST',
      data: formdata
    })
    .then((response) => {
      console.log(response.data);
    })
  }
}

export default App;
