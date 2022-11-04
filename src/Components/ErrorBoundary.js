import React, { Component } from 'react'


export class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return (
            this.state.hasError ? <h1 className='ErrorText'>Something went wrong.</h1> : this.props.children
            
        )
    }
}

export default ErrorBoundary

