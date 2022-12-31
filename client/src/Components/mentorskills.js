import { useEffect, useState } from "react";
import * as api from "../api"
import Skillcard from "./Skillcard";
import MentorSkillCard from "./MentorSkillCard";
import Paggination from "./paggination";
import { useLocation } from "react-router";
// TODO: should I combine userskills n mentorskills??

function Userskills() {
  const [skilldata, setskilldata] = useState([]);
  const [search, setSearch] = useState(" ");
  const [searchbardata, setSearchbarData] = useState("");
  const location = useLocation()

  const [postperpage, Setpostperpage] = useState(5)
  const [currentpage, Setcurrentpage] = useState(1)
  const indexoflastpost = currentpage * postperpage;
  const indexoffirstpost = indexoflastpost - postperpage;

  const currentpost = skilldata.slice(indexoffirstpost, indexoflastpost);
  // console.log(currentpost)
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
    Setpostperpage(skilldata.length); 
    setSearch(searchbardata);
    Setcurrentpage(1)
  }

  const handleCancel = (e) => {
    Setpostperpage(5); 
    setSearch(" ");    
  }
  
  useEffect(() => {
    if(location.pathname ==="/mentordata")
    {
      try {
        api.getMentorDatas()
          .then((res) => {
              // console.log(res.data)
              setskilldata(res.data);
          });
      } catch (error) {
        console.log(error.message);
      }
  }
  else{
    try {
      api.getUserSkill()
      .then((res) => {
            // console.log(res.data)
            setskilldata(res.data);
        });
    } catch (error) {
      console.log(error.message);
    }

  }

  }, []);

  const deleteSkill = (id) => {
    let ans = window.confirm("Are you sure you want to delete?");
    const newskillData = skilldata.filter((skill) => {return skill._id != id}); // TODO: delete once I get response from server... just do res = api.deleteUserSkill(id)
    setskilldata(newskillData);
  
    if (ans){
        if(location.pathname == "/uskilldata")
        {
            try {
                api.deleteUserSkill(id)
            } catch (error) {
                console.log(error)
            }                
        }
        else
        {
            try {
                api.deleteMentorData(id);
            } catch (error) {
                console.log(error)
            }
        }
    }

  }

  const updatePost = (id, updateddata) => {
    // api.updatePost(id, updateddata);
    try {
      if(location.pathname ==="/mentordata") api.updatePost(id, updateddata);
      else api.updateUserSkill(id, updateddata);
      // RESEARCH: if I directly update the state things will be easier... do directly here... just make a note n discuss with the hackathon guy b4 final sub
      // so react is faster if we set a new state in place of mutating the old state?
      const newskillData = skilldata.map((skill) => {return skill._id == id ? updateddata : skill});
      setskilldata(newskillData);
    } catch (error) {
      console.log(error)
    }
  }

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
            }).map((skilldata) => {
              return (
                <>
                  {location.pathname === "/uskilldata" &&<Skillcard key={skilldata._id} props={skilldata} deleteSkill={deleteSkill} updatePost={updatePost} />}
                  {location.pathname === "/mentordata" &&<MentorSkillCard key={skilldata._id} props={skilldata} deleteSkill={deleteSkill} updatePost={updatePost} />}
                </>
              )
            })
          }
        </div>

        <div className="paagination-section center">
          <Paggination totalpost={skilldata.length} postperpage={postperpage} pagginate={pagginate} />
        </div>

        <div className="search-container container text-center">
        <div className="serach-bar">
          <input className="search-input" type="number" name="" id="" placeholder="data per page" min="1" max={skilldata.length} onChange={(event) => { Setpostperpage(event.target.value) }}/>
          {/* <button type="button" className="btn btn-primary" required onClick={handleSubmit}>Submit</button> */}
        </div>
      </div>


      </div>
    </>
  );
}

export default Userskills;
