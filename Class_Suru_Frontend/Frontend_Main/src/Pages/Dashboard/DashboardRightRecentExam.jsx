import { useEffect, useState } from "react";
import Style from "../../css/profile.module.css";
import { getUsersResultsApi } from "../../apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardRightRecentExam = () => {
  const userData = useSelector((state) => state.user.userData);
  const [recentExam, setRecentExam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const getRecentExam = async () => {
    setLoading(true);
    try {
      if (userData && userData.id) {
        const response = await axios.get(
          `${getUsersResultsApi}/${userData.id}/${currentPage}`
        );
        // console.log("Recent exam data:", response.data);
        console.log("Recent exam data:", response.data.result);

        if (response.status === 200) {
          setRecentExam(response.data.result);
        }
      }
    } catch (error) {
      console.log("Error fetching recent exam data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecentExam();
  }, [userData]);

  return (
    <div className={Style.RecentExam}>
      <div className={Style.recentExamContainer}>
        {loading ? (
          <div className={Style.loadingSpinner}>
            <div className={Style.spinner}></div>
          </div>
        ) : recentExam === null || recentExam.length === 0 ? (
          <div className={Style.noExams}>No recent exams yet</div>
        ) : (
          recentExam.map((exam, index) => {
            const examDate = new Date(exam.created_at);

            const now = new Date();
            const timeDifference = Math.floor(
              (now.getTime() - examDate.getTime()) / 1000
            ); // Difference in seconds
            console.log(timeDifference);

            let timeAgo;

            if (timeDifference < 60) {
              timeAgo = `${timeDifference} sec ago`;
            } else if (timeDifference < 3600) {
              timeAgo = `${Math.floor(timeDifference / 60)} min ago`;
            } else if (timeDifference < 86400) {
              timeAgo = `${Math.floor(timeDifference / 3600)} hr ago`;
            } else {
              timeAgo = examDate.toLocaleDateString("en-GB"); // Format as dd/mm/yy
            }

            return (
              <Link
              key={index}
              className={Style.RecentExamLower}
              to={`/user/dashboard/result/${exam.result_id}/${exam.exam_id}/${exam.title.replace(/[\s/]/g, "-")}`}
              >
              <div className={Style.RecentExamLowerTopics}>
                <h3>{exam.title}</h3>
                <div className={Style.examDetails}>
                <p>{exam.exam_subject}</p>
                <p>{exam.type}</p>
                </div>
              </div>
              <div className={Style.RecentExamLowerMarks}>
                <h3>{timeAgo}</h3>
              </div>
              </Link>
            );
          })
        )}
      </div>
      <div className={Style.pagination}>
        <button
          className={Style.paginationButton}
          disabled={currentPage === 1}
          onClick={async () => {
            setCurrentPage((prev) => prev - 1);
            try {
              await getRecentExam();
            } catch (error) {
              console.log("Error fetching recent exam data:", error);
            }
          }}
        >
          Previous
        </button>
        {Array.from(
          { length: Math.min(10, totalPages - (Math.floor((currentPage - 1) / 10) * 10)) },
          (_, index) => {
            const pageNumber = Math.floor((currentPage - 1) / 10) * 10 + index + 1;
            return (
              <button
                key={index}
                className={`${Style.paginationButton} ${
                  currentPage === pageNumber ? Style.activePage : ""
                }`}
                onClick={async () => {
                  setCurrentPage(pageNumber);
                  try {
                    await getRecentExam();
                  } catch (error) {
                    console.log("Error fetching recent exam data:", error);
                  }
                }}
              >
                {pageNumber}
              </button>
            );
          }
        )}
        <button
          className={Style.paginationButton}
          disabled={currentPage === totalPages}
          onClick={async () => {
            setCurrentPage((prev) => prev + 1);
            try {
              await getRecentExam();
            } catch (error) {
              console.log("Error fetching recent exam data:", error);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardRightRecentExam;
