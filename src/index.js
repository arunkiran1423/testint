import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class DocumentsFieldSet extends React.Component {
  state = {
    rows: [],
    name: null
  };
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChangeInput = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    alert(name);
    this.setState({
      rows
    });
  };

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleAddRow = () => {
    console.log(this.state);
    let id = 0;
    if (this.state.rows.length > 0) {
      id = parseInt(this.state.rows[this.state.rows.length - 1].id) + 1;
    }
    const item = {
      id: id,
      name: this.state.topicBox,
      date: String(new Date())
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = id => {
    let rows = [];
    if (this.state.rows.length > 0) {
      for (var v = 0; v < this.state.rows.length; v++) {
        if (this.state.rows[v].id != id) {
          rows.push(this.state.rows[v]);
        }
      }
    }
    console.log(rows);
    this.setState({
      rows: rows
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <input className = "input"
                type="text"
                name="topicBox"
                placeholder="Enter topic here..."
                value={this.state.name}
                onChange={this.handleChange}
              />

              <button
                onClick={this.handleAddRow}
                className="btn btn-default pull-left"
              >
                Add Row
              </button>
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> #ID </th>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> Date </th>
                    <th className="text-center"> Delete </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx + 1}</td>
                      <td>{this.state.rows[idx].name}</td>
                      <td>{this.state.rows[idx].date}</td>
                      <td>
                        <button
                          onClick={() =>
                            this.handleRemoveRow(this.state.rows[idx].id)
                          }
                          className="pull-right btn btn-default"
                        >
                          Delete Row
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DocumentsFieldSet />, document.getElementById("root"));
