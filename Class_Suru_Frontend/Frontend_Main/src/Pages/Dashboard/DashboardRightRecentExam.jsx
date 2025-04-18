import { useEffect, useState } from "react";
import Style from "../../css/profile.module.css";
import { getUsersResultsApi } from "../../apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RecentExamData = [
  {
    topic: "Units and Measurement",
    subjects: "Physics",
    Marks: 90,
    date: "24/10/2025, 3:00pm",
  },
  {
    topic: "Chemical Reactions",
    subjects: "Chemistry",
    Marks: 85,
    date: "25/10/2025, 4:00pm",
  },
  {
    topic: "Chemical Reactions",
    subjects: "Chemistry",
    Marks: 85,
    date: "25/10/2025, 4:00pm",
  },
  {
    topic: "Chemical Reactions",
    subjects: "Chemistry",
    Marks: 85,
    date: "25/10/2025, 4:00pm",
  },
  {
    topic: "Chemical Reactions",
    subjects: "Chemistry",
    Marks: 85,
    date: "25/10/2025, 4:00pm",
  },
];

const DashboardRightRecentExam = () => {
  
  const userData = useSelector((state) => state.user.userData);
  const [recentExam, setRecentExam] = useState([]);
  const [loading, setLoading] = useState(false);
  const getRecentExam = async ()=>{
    setLoading(true);
    try {
      if(userData && userData.id){
      const response = await axios.get(`${getUsersResultsApi}/${userData.id}`);
      // console.log("Recent exam data:", response.data);

      if(response.status === 200)
      {
        setRecentExam(response.data.result);
      }
    }
      
    } catch (error) {
      console.log("Error fetching recent exam data:", error);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecentExam();
  }, [userData]);




  return (
    <div className={Style.RecentExam}>
      {loading ? (
        <div className={Style.loadingSpinner}>
          <div className={Style.spinner}></div>
        </div>
      ) : recentExam.length === 0 ? (
        <div className={Style.noExams}>No recent exams yet</div>
      ) : recentExam.map((exam, index) => (
        <Link key={index} className={Style.RecentExamLower} to={`/user/dashboard/result/${exam.result_id}`}>
          <div className={Style.RecentExamLowerTopics}>
            <h3>{exam.title}</h3>
            <div className={Style.examDetails}>
              <p>{exam.exam_subject}</p>
              <p>{exam.type}</p>
            </div>
          </div>
          <div className={Style.RecentExamLowerMarks}>
            <h3>{exam.score} Marks</h3>
            <p>out of {exam.total_marks}</p>
          </div>
        </Link>
      ))}
      
    </div>
  );
};

export default DashboardRightRecentExam;
