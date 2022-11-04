import React, { Component } from 'react'
import { logError } from "../lib/errorLib";

export class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        logError(error, info);
    }

    render() {
        return (
            this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children
            
        )
    }
}

export default ErrorBoundary

