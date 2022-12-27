import { useEffect, useState } from "react";
import * as api from "../api"
import Skillcard from "./Skillcard";

function Userskills() {
  const [uskilldata, setuskilldata] = useState([]);

  useEffect(() => {
    try {
      api.getUserSkill()
        .then((res) => {
            // console.log(res.data)
            setuskilldata(res.data);
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
            uskilldata.map((uskilldata) => {
              return (
                <>
                  <Skillcard props={uskilldata} />
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default Userskills;
