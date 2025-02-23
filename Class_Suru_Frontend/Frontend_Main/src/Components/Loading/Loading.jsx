import { createContext, useContext, useState } from "react";
import Style from "../../css/loading.module.css";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const addLoading = () => {
    setLoading(true);
  };

  const removeLoading = () => {
    setLoading(false);
  };

  return (
    <>
      <LoadingContext.Provider value={{ loading, addLoading, removeLoading }}>
        {loading && (
          <div className={Style.loadingContainer}>
            <div className={Style.spinnerContainer}>
              <div className={Style.spinner}></div>
            </div>
          </div>
        )}

        {children}
      </LoadingContext.Provider>
    </>
  );
};
