import React from 'react'
import styled from 'react-emotion'

const CustomInput = styled('input')({
  padding: 5,
  border: 'none',
  margin: '10px 0 20px 0',
  boxShadow: '0 0 1px 1px rgba(0,0,0,.3)',
})

const Label = styled('div')({
  fontSize: 10
})

const FormItem = ({ label, onChangeFn, name, value }) => {
  return (
    <div>
      <Label>{label}</Label>
      <CustomInput
        name={name}
        value={value}
        onChange={onChangeFn}
      />
    </div>
  )
}

export default FormItem