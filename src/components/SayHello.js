import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function SayHello({ name, greeting, age }) {
  return (
    <>
      <div>
        Components Page
      </div>
      <p>Hello { name }?</p>
      <p>Well { greeting }?</p>
      <p>{ name } is { age }?</p>
    </>
  )
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired, // be sure to use isRequired unless you are passing a default valute to the parameter
  greeting: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
}
