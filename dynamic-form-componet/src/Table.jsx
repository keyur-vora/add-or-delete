import { useState } from "react"
import './table.css'


const Table = () => {

    const [tableInput, SetInput] = useState([
        { id: "", name: "", email: "", mobile: "" }
      ] )

    const add = () => {
        let newfield = { id: Math.floor(Math.random() * 1000), name: "", email: "", mobile: "" }
        SetInput([...tableInput, newfield]);
    }
    const remove = (id) => {
        let updatedata = tableInput.filter((item) => item.id != id);
        SetInput(updatedata);
    }

    const handleInputChange = (id, field, value) => {
        const updatedtableInput = tableInput.map((item) => 
            item.id === id ? { ...item, [field]: value } : item
        );
        SetInput(updatedtableInput);
    };


    return (
        <>
        <div className="headings">
            <h1 align="center">React - Add & Delete table Rows Dyanamically</h1>
        </div>
        <div className="main" align="center">
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>mobile</th>
                        <th><button onClick={() => add()}>Add</button></th>
                    </tr>
                </thead>
                <tbody>
                {
                        tableInput.map((val) => (
                            <tr key={val.id} align="center">
                                <td>
                                    <input type="text" value={val.name} placeholder="enter your name here" onChange={(e) => handleInputChange(val.id, 'name', e.target.value)} />
                                </td>
                                <td>
                                    <input type="text" value={val.email} placeholder="enter your email here" onChange={(e) => handleInputChange(val.id, 'email', e.target.value)} />
                                </td>
                                <td>
                                    <input type="text" value={val.mobile} placeholder="enter your mobile here" onChange={(e) => handleInputChange(val.id, 'mobile', e.target.value)}/>
                                </td>

                                <td>
                                    <button onClick={() => remove(val.id)}>Clear</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
        </>
    )
}

export default Table