import React from 'react';
import List from './List.jsx';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            store: []
        }
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(i) {
        let updated = window.prompt('');
        this.state.store.splice(i, 1, updated);
        this.setState({
            text: ''
        })
    }

    handleDelete(i) {
        this.state.store.splice(i, 1);
        this.setState({
            text: ''
        })
    }

    handleSubmit() {
        this.setState({
            store: this.state.store.concat([this.state.text])
        })
    }

    handleText(e) {
        // console.log(e.target.value);
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return(
            <div>
                <h1>Hello from test!</h1>
                <div>
                    <input type="text" onChange={this.handleText}></input>
                    <button onClick={() => {this.handleSubmit()}}>Submit</button>
                    <div>
                        <List handleDelete={this.handleDelete} handleEdit={this.handleEdit}text={this.state.store}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;