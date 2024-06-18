import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const SymptomDetails = ({ route }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [conditions, setConditions] = useState([]);

  const fetchConditionsBySymptom = () => {
    setLoading(true);
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(`http://who.ubuzima.rw/who/symptom/${location.state.symptom.id}/`)
      .then((response) => {
        setLoading(false);
        if (response.status == "200" || response.status == "201") {
          setConditions(response.data.conditions);
        }
      });
  };

  useEffect(() => {
    fetchConditionsBySymptom();
  }, []);

  return (
    <div class="container-xxl container-p-y">
      <div>
        <Link to={"/symptoms"}>
          <i
            className="bx bx-left-arrow-alt bx-md"
            style={{ color: "black" }}
          ></i>
        </Link>
        <h1>
          <strong>{location.state.symptom.name}</strong>
        </h1>
      </div>
      {!loading ? (
        <div>
          <div class="row">
            <div class="col-md-4" style={{ flex: 1 }}>
              <div
                class="card mb-4 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ fontWeight: "bold", color: "black" }}>
                  Associated Conditions
                </div>
                <p className="mt-1">
                  {conditions.map((el) => el.name).join(", ")}.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card mb-4 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ fontWeight: "bold", color: "black" }}>
                  Description of each condition
                </div>
                <div className="mt-1">
                  {conditions.length > 0 ? (
                    conditions.map((el) => {
                      return (
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            {el.name}:{" "}
                          </span>
                          {el.description}
                        </div>
                      );
                    })
                  ) : (
                    <p className="mt-1">No Info...</p>
                  )}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card mb-4 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ fontWeight: "bold", color: "black" }}>
                  Further Management
                </div>
                <div className="mt-1">
                    <p className="mt-1">{location.state.symptom.further_management}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-4">
              <div
                class="card mb-4 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ fontWeight: "bold", color: "black" }}>
                  Investigations and diagnostic tests
                </div>
                <div className="mt-1">
                  {conditions.length > 0 ? (
                    conditions.map((el) => {
                      return (
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            {el.name}:<br />{" "}
                          </span>
                          {el.investigations}
                        </div>
                      );
                    })
                  ) : (
                    <p className="mt-1">No Info...</p>
                  )}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 p-3"
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
              >
                <div style={{ fontWeight: "bold",color:'black' }}>Initial treatments</div>
                <div className="mt-1">
                {conditions.length>0?(
                    conditions.map(el=>{return(
                        <div>
                            <span style={{fontWeight:'bold'}}>{el.name}:<br/> </span>{el.treatments}
                        </div>
                    )})
                ):(
                    <p className="mt-1">No Info...</p>
                )}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="card mb-4 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ fontWeight: "bold", color: "black" }}>
                  Other symptoms to look for
                </div>
                <div className="mt-1">
                  {conditions.length > 0 ? (
                    conditions.map((el) => {
                      return (
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            {el.name}:<br />{" "}
                          </span>
                          {el.symptoms_features}
                        </div>
                      );
                    })
                  ) : (
                    <p className="mt-1">No Info...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3 mb-3">
            <div class="col-md-4">
              <div
                class="card mb-4 p-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ fontWeight: "bold", color: "black" }}>
                  Referral Criteria
                </div>
                <div className="mt-1">
                    <p className="mt-1">{location.state.symptom.further_management}</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{height:20}}></div>
        </div>
      ) : (
        <p>No Details yet...</p>
      )}
    </div>
  );
};

export default SymptomDetails;
