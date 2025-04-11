
import React from 'react';

export default class MyClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {count:0}
        this.increment = this.increment.bind(this);

    }

    componentDidMount() {
        // Fetch data when component mounts
        this.fetchUserData(this.props.userId);
      }
    
      componentDidUpdate(prevProps) {
        // Re-fetch data if userId prop changes
        if (prevProps.userId !== this.props.userId) {
          this.fetchUserData(this.props.userId);
        }
      }
    
      componentWillUnmount() {
        // Cleanup (e.g., cancel API requests)
        this.abortController.abort();
      }

      fetchUserData(userId) {
        // Example API call
        this.abortController = new AbortController();
        fetch(`/api/users/${userId}`, { 
          signal: this.abortController.signal 
        })
          .then((res) => res.json())
          .then((data) => this.setState({ user: data }));
      }
    increment() {
        // Update state using setState (async operation)
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }
    

    render() {
        const count = this.state.count
        return (
            <>
            <h1>{count}</h1>
            <button onClick={this.increment}>count</button>

            </>
             
        )
    }
}