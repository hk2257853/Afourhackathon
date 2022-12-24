import { useEffect, useState } from "react";
import * as api from "../../api"
import Cards from "./cards";

function Menu() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    try {
      api.fetchAdminItems()
        .then((res) => {
          setItem(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <div className="container-text container text-center">
        <h4>basic store retrival code</h4>
      </div>
      <div className="menu-container ">
        <div className="card-container container">
          {
            item.map((item) => {
              return (
                <>
                  <Cards item={item} />
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Menu;
