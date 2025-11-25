import {useState} from "react";

const UserData = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[mobile, setMobile] = useState("");
    const[data, setData] = useState([]);
    const uniqueId = () => crypto.randomUUID();

    const handleAdd = (e) =>{
        
        let obj = {
            "id" :uniqueId(),
            "name":name,
            "email": email,
            "mobile":mobile
        }
    setData(data.push(obj))
    setData([...data]);
    console.log(data)

    setName("");
    setEmail("");
    setMobile("");
    }
    return (
        <div>
            <h1>UserData</h1>
            
                <input type = "text" 
                placeholder = "Enter Name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <input type = "text" 
                placeholder = "Enter Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input type = "text" 
                placeholder = "Enter Mobile No."
                value = {mobile}
                onChange = {(e) => setMobile(e.target.value)}
                />
                <br />
                <br />
                <button onClick = {handleAdd}>Add</button>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=>(
                        <tr key = {item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            
        </div>
    )
}

export default UserData;