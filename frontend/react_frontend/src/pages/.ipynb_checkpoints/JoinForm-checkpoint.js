import React from "react";


class JoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        code: "",
        username: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var name = e.target.name;

    if (name === "code") {
      var value2 = e.target.value;
      this.setState({
        activeItem: {
          ...this.state.activeItem,
          code: value2,
        },
      });
    }
  }

 

  handleSubmit(e) {
    e.preventDefault();
    var code = this.state.activeItem.code;
    var url = `http://127.0.0.1:8000/core/join/${code}`;

    fetch(url, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then(
        this.setState({
          activeItem: {
            code: "",
          },
        })
      );
  }

  render() {
    return (
      <div>
        <div className="createFormWrapper">
          <div className="createForm">
            <div className="Form">
              <form onSubmit={this.handleSubmit} id="form">
                <input
                  onChange={this.handleChange}
                  className="form-title inset"
                  value={this.state.activeItem.code}
                  type="text"
                  name="code"
                  placeholder="Add code of class"
                />
                <input
                  className="form-submit-btn submit-btn"
                  type="submit"
                  name="Add"
                  value="join"
                />
              </form>
            </div>
            
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default JoinForm;
