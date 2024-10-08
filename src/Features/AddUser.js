import { useState } from "react";
import { addUser } from "./UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "./UserSlice";

const AddUser=()=>{

    const dispatch = useDispatch();

    const allUser = useSelector(selectAllUsers);
    const lastUserId = allUser.length > 0 ? allUser[allUser.length - 1].id : 0;

    const [name, setName] = useState('');

    const handleNameChange =(e)=>{
        setName(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(name){
            dispatch(addUser({id: lastUserId+1, name: name}));
        }
        setName('');
    }

    return(
        <section>
            <form>
                <input type="text" value={name} onChange={handleNameChange}/>
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </section>
    )
}

export default AddUser;