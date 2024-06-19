"use client";

import React from 'react'
import {useEffect, useState} from "react";
import {useInputHook} from "../../hooks/page"


function user(props) {
  console.log(props);
  const {value: firstNameValue, bind: firstNameBind} = useInputHook();
  const {value: lastNameValue, bind: lastNameBind} = useInputHook();
  const {value: documentIdValue, bind: documentIdValueBind} = useInputHook();
  const {value: emailValue, bind: emailBind} = useInputHook();
  const {value: phoneValue, bind: phoneBind} = useInputHook();
  let [user, setUser] = useState(null);

  useEffect(() => {
    user && register();
  }, [user]);

  const register = () => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  /**
   * @method
   * @description this method use for get data from the HTML inputs,
   * also through convert to JSON object for next time send to any server
   */
  const getFormData = () => {
    setUser({
      email: emailValue,
      first_name: firstNameValue,
      last_name: lastNameValue,
      phone: phoneValue,
      document_id: documentIdValue
    });
  };

  return (
    <form>
      <label>
        Nombre:
        <input type="text" {...firstNameBind} />
      </label><br/>
      <label>
        Apellido:
        <input type="text" {...lastNameBind} />
      </label><br/>
      <label>
        Identificación:
        <input type="text" {...documentIdValueBind} />
      </label><br/>
      <label>
        email:
        <input type="text" {...emailBind} />
      </label><br/>
      <label>
        Telefono:
        <input type="text" {...phoneBind} />
      </label><br/>
      <input type="button" value="Enviar"
             onClick={(event) => getFormData(event)}/>
    </form>
  );
}

export default user