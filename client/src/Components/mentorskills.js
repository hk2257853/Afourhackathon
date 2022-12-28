import { useEffect, useState } from "react";
import * as api from "../api"
import Skillcard from "./Skillcard";
import Paggination from "./paggination";
// TODO: should I combine userskills n mentorskills??

function Userskills() {
  const [mskilldata, setmskilldata] = useState([]);
  const [search, setSearch] = useState(" ");
  const [searchbardata, setSearchbarData] = useState("");

  const [postperpage, Setpostperpage] = useState(3)
  const [currentpage, Setcurrentpage] = useState(1)
  const indexoflastpost = currentpage * postperpage;
  const indexoffirstpost = indexoflastpost - postperpage;

  const currentpost = mskilldata.slice(indexoffirstpost, indexoflastpost);
  console.log(currentpost)
  const pagginate = (num) => {
    Setcurrentpage(num);
  }

  // juggad for proper search
  /*
  issue: it was searching on the given page only
  soln: on search show full page

  give a cancel search button to revert back to c skills

  TODO: hide pagination part when search != " "
  */
  const handleSubmit = (e) => {
    Setpostperpage(mskilldata.length); 
    setSearch(searchbardata);
  }

  const handleCancel = (e) => {
    Setpostperpage(3); 
    setSearch(" ");    
  }
  
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
    <div className="search-container container text-center">
        <div className="serach-bar">
          <input className="search-input" type="text" name="" id="" placeholder="search" onChange={(event) => { setSearchbarData(event.target.value) }}/>
          <button type="button" className="btn btn-primary" required onClick={handleSubmit}>Submit</button>
          <button type="button" className="btn btn-primary" required onClick={handleCancel}>Cancel</button>
        </div>
      </div>

      
      <div className="menu-container ">
        <div className="card-container container">
          {
            currentpost.filter((val) => {
              if (search === " ") {
                return val
              }
              if (val.skill.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return val;
              }
            }).map((mskilldata) => {
              return (
                <>
                  <Skillcard props={mskilldata} />
                </>
              )
            })
          }
        </div>

        <div className="paagination-section center">
          <Paggination totalpost={mskilldata.length} postperpage={postperpage} pagginate={pagginate} />
        </div>

        <div className="search-container container text-center">
        <div className="serach-bar">
          <input className="search-input" type="number" name="" id="" placeholder="data per page" min="1" max={mskilldata.length} onChange={(event) => { Setpostperpage(event.target.value) }}/>
          {/* <button type="button" className="btn btn-primary" required onClick={handleSubmit}>Submit</button> */}
        </div>
      </div>


      </div>
    </>
  );
}

export default Userskills;
