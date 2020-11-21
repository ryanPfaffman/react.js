import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class SimpleMath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      which_one: '',
      answer: '',
    };  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  } handleChange(e, name) {
    this.setState({
      [name]: e.target.value
    })
  } handleSubmit(e) {
    e.preventDefault();
    if (this.state.which_one.toLowerCase() === 'add') {
      this.setState({answer: parseInt(this.state.value1) + parseInt(this.state.value2)});
    } else if (this.state.which_one.toLowerCase() === 'subtract') {
      this.setState({answer: parseInt(this.state.value1) - parseInt(this.state.value2)});
    } else if (this.state.which_one.toLowerCase() === 'multiply') {
      this.setState({answer: parseInt(this.state.value1) * parseInt(this.state.value2)});
    } else if (this.state.which_one.toLowerCase() === 'divide') {
      this.setState({answer: (parseInt(this.state.value1) / parseInt(this.state.value2)).toFixed(2)});
    } else {
      alert("Invalid input. Try again");
    }
  } render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table id="table">
            <tr>
              <td colSpan="2"><h1 id="table_header">Simple Math</h1></td>
            </tr>
            <tr>
              <td>Number 1:</td>
              <td>
              <input type="text" name={this.state.value1} onChange={ (e) => this.handleChange(e, 'value1')} />
              </td>
            </tr>
            <tr>
              <td>Number 2:</td>
              <td>
              <input type="text" name={this.state.value2} onChange={ (e) => this.handleChange(e, 'value2')} />
              </td>
            </tr>
            <tr>
              <td>Choose one (Add, Subtract, Multiply, Divide):</td>
              <td>
              <input type="text" name={this.state.which_one} onChange={ (e) => this.handleChange(e, 'which_one')} />
              </td>
            </tr>
            <tr>
              <td>Calculate:</td>
              <td>
              <input type="submit" value="Calculate" />
              </td>
            </tr>
            <tr>
              <td>Answer:</td>
              <td>
              <input type="text" name="answer" value={this.state.answer} />
              </td>
            </tr>
          </table>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<SimpleMath />, document.getElementById('root'));
