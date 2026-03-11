interface Props {
  message: string
}

const ErrorMessage = ({ message }: Props) => {
  return <p>Error: {message} ❌</p>
}

export default ErrorMessage