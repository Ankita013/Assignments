import {useState} from "react";

const UserData = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[mobile, setMobile] = useState("");
    const[data, setData] = useState([]);
    const[deleted, setDeleted] = useState([]);

    const handleAdd = (e) =>{
        
        let obj = {
            "name":name,
            "email": email,
            "mobile":mobile
        }
    setData([...data, obj]);
    console.log(data)

    setName("");
    setEmail("");
    setMobile("");
    }
    const handleDelete = (email)=>{
        const row = data.find(item => item.email === email);
        setDeleted([...deleted, row]);
        setData(data.filter(item=>item.email!=email));

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
                             <th>Action</th> {/* Add a column for the button */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item)=>(
                        <tr key = {item.email}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>
                                <button onClick={() => handleDelete(item.email)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h2>Deleted Users</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {deleted.map((item)=>(
                        <tr key = {item.email}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            
                        </tr>

                        ))}
                    </tbody>
                    
                </table>
                 {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
            
            
        </div>
    )
}

export default UserData;