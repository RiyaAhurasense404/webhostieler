import { Component, ReactNode, ErrorInfo } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render() {
    if(this.state.hasError) {
      return <h2>Kuch galat ho gaya! 😥</h2>
    }
    return this.props.children
  }
}

export default ErrorBoundary