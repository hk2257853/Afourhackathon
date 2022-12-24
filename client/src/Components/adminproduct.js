import React,{useState} from 'react';
import * as api from "../api"

const AdminProduct = () => {

    const [item,setItem] = useState();

    function handleChange(e) {
        setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
        // console.log(item)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemdata = {            
            name: item.name,
        };
        
        //console.log(itemdata);
        
        try {
            api.createAdminItems(itemdata); // send data to backend            
            // console.log(api.fetchAdminItems());
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="container adminproduct-heading">
                <h3>store data</h3>
            </div>
            <div className="container admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input onChange={handleChange} type="text" className="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="container adminProduct-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AdminProduct;