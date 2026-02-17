import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
    };

    state = { hasError: false }

    static getDerivedFromStateError() {
        return {hasError: true}
    }

    componentDidCatch (error) {
        console.log(error)
    }

    render () {
        if(state.hasError) {
            <p>Fallback ui</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;