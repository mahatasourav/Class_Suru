import Style from "../../css/profile.module.css";

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
  return (
    <div className={Style.RecentExam}>
      <div className={Style.RecentExamUpper}>
        <span className={Style.RecentExamUpperSpan}>All</span>
      </div>
      {RecentExamData.map((exam, index) => (
        <div key={index} className={Style.RecentExamLower}>
          <div className={Style.RecentExamLowerTopics}>
            <h3>{exam.topic}</h3>
            <p>{exam.subjects}</p>
          </div>
          <div className={Style.RecentExamLowerMarks}>
            <h3>{exam.Marks} Marks</h3>
            <p>{exam.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardRightRecentExam;
