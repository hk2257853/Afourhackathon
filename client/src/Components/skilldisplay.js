import { useEffect, useState } from "react";
import * as api from "../api"
import Skillcard from "./usercard";
import MentorSkillCard from "./mentorcard";
import Paggination from "./paggination";
import { useLocation } from "react-router";
import "../Components/style.css"

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

  const pagginate = (num) => {
    Setcurrentpage(num);
  }

  // juggad for proper search
  /*
  issue: it was searching on the given page only
  soln: on search show full page

  give a cancel search button to revert back to c skills

  TODO: hide cancel part when search != " "
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
      api.getMentorDatas()
        .then((res) => {
            setskilldata(res.data);
      })
      .catch(error => {
        console.log(error)          
      });
  }
  else{
    api.getUserSkill()
    .then((res) => {
          setskilldata(res.data);
    })
    .catch(error => {
      console.log(error)          
    });;

  }

  }, []);

  const deleteSkill = (id) => {
    let ans = window.confirm("Are you sure you want to delete?");
  
    if (ans){
        const newskillData = skilldata.filter((skill) => {return skill._id !== id}); // TODO: delete once I get response from server... just do res = api.deleteUserSkill(id)
        setskilldata(newskillData);

        if(location.pathname === "/uskilldata")
        {
            api.deleteUserSkill(id)
            .catch(error => {
              console.log(error)
            });          
        }
        else
        {
            api.deleteMentorData(id)
            .catch(error => {
              console.log(error)          
            });
        }
    }

  }

  const updatePost = (id, updateddata) => {
    try {
      if(location.pathname ==="/mentordata") api.updatePost(id, updateddata);
      else 
      {
        api.updateUserSkill(id, updateddata)
        .catch(error => {
          console.log(error)
        });
      }
      // RESEARCH: if I directly update the state things will be easier... do directly here... just make a note n discuss with the hackathon guy b4 final sub
      // so react is faster if we set a new state in place of mutating the old state?
      const newskillData = skilldata.map((skill) => {return skill._id === id ? updateddata : skill});
      setskilldata(newskillData);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className="search-container container text-center">
        <div className="serach-bar">
          <input onChange={(event) => { setSearchbarData(event.target.value) }} type="search-input" className="" name="" id="" placeholder="Search Skill" required/>
          <button type="button" className="btn btn-primary" required onClick={handleSubmit}>Submit</button>
          <button type="button" className="btn btn-primary" required onClick={handleCancel}>Cancel</button>
        </div>
      </div>

      
      <div class="mySkill-main">
      {location.pathname === "/uskilldata"? <h1>My Skills.</h1>:<h1>Skills.</h1>}        
        <div class="row skill-cards-container">
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
          <input className="" type="number" name="" id="" placeholder="cards per page" min="1" max={skilldata.length} onChange={(event) => { 
            const newpostperpage = event.target.value;
            if(newpostperpage > 0 && newpostperpage <= skilldata.length) Setpostperpage(event.target.value) ;
            }}/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Userskills;
