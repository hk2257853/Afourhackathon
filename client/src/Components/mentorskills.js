import { useEffect, useState } from "react";
import * as api from "../api"
import Skillcard from "./Skillcard";

function Userskills() {
  const [mskilldata, setmskilldata] = useState([]);

  useEffect(() => {
    try {
      api.getMentorDatas()
        .then((res) => {
            // console.log(res.data)
            setmskilldata(res.data);
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
            mskilldata.map((mskilldata) => {
              return (
                <>
                  <Skillcard props={mskilldata} />
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
