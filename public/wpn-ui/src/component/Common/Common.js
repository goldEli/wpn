import React from "react";
import {
  CellHeader,
  CellBody,
  Form,
  FormCell,
  Input,
  Label,
} from "react-weui";

const md = {};

md.renderForm = (data) => {
  return(
    <Form>
      {data.map((e,i)=>{
        const {key, label, inputName, placeholder, onChange, value} = e;
        const addProps = {}
        if (value) {
          addProps.value = value;
        }
        return (
          <FormCell key={key} style={{height:"1rem",lineHeight:"1rem",width:"100%", fontSize:"0.4rem"}}>
          <CellHeader >
            <Label style={{width:"2.8rem"}}>{label}</Label>
          </CellHeader>
          <CellBody>
            <Input
              name={inputName}
              placeholder={placeholder}
              onChange={onChange || function(){}}
              {...addProps}
            />
          </CellBody>
        </FormCell>
        )
      })}    
    </Form>
  )
}

export default md;