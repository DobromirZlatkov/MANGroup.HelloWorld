import React, { ErrorInfo } from 'react'
import { State, Props } from './MANGroup.ErrorBoundaryTypes'

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // save to error logging service
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { hasError } = this.state

    if (hasError) return <h1>Sorry.. there was an error</h1>

    const { children } = this.props

    return children
  }
}

export default ErrorBoundary
