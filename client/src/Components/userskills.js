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
    {/* {TODO: replace this bootrap with tailwind} */}      
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
