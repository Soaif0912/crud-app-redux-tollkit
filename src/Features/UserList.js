
import { selectAllUsers } from "./UserSlice"
import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUser} from "./UserSlice";
import { useState, useEffect } from "react";

const UserList =()=>{

    const dispatch = useDispatch();

    const [editId, SetEditId] = useState(false);

    const allUsers = useSelector(selectAllUsers);
    const orderedUsers = allUsers.slice().sort((a, b) => b.id - a.id);

    const deleteUser =(userId)=>{
        dispatch(removeUser({id: userId}))
    }

    const onClickEdit =(id)=>{
        SetEditId(id);
    }

    const updateUserDetails =(id)=>{
        const newText = document.querySelector(`[class='${editId + 'name'}']`).textContent;
        dispatch(updateUser({id, newName: newText}));
        SetEditId(false);
    }

    useEffect(()=>{
        if(!editId) return;

        const selectedId = document.querySelectorAll(`[class = '${editId+'name'}' ]`);
        if(selectedId){
            selectedId[0].focus();
        }
    },[editId])

    const displayUser = orderedUsers.map(user => {
        return(
            <section key={user.id}>
                <span>
                    <h2 className={user.id+'name'} contentEditable={editId == user.id}>{user.name}</h2> 

                    <button onClick={()=>deleteUser(user.id)}> Delete</button>
                    {editId !== user.id ? 
                        <button onClick={()=>onClickEdit(user.id)}> Edit</button> :
                        <button onClick={()=>updateUserDetails(user.id)}> Update</button>
                    }
                </span>
            </section>
        )
    })

    return(
        <section>
            {displayUser}
        </section>
    )
}

export default UserList;