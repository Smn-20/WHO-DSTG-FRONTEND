import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import axios from "axios";
const Symptoms = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [symptoms_, setSymptoms_] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [conditions_, setConditions_] = useState([]);
  const [name, setName] = useState("");
  const [furtherManagement, setFurtherManagement] = useState("");
  const [referral, setReferral] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchConditions = () => {

    let my_token = localStorage.getItem('token');
    const config = { headers: { "Authorization": `Token ${my_token}`, "Content-Type": "application/json" } };


    axios.get(`http://who.ubuzima.rw/who/conditions/`,config).then(response => {
      const cond = response.data.map(obj => {
        const { id, name } = obj;
        return { value: id, label: name }
      })
      setConditions(cond)
    });

  }


  const fetchSymptoms = () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    axios.get("http://who.ubuzima.rw/who/symptoms/").then((response) => {
      setSymptoms(response.data);
      setSymptoms_(response.data);
    });
  };

  const resetForm = () => {
    setName("");
    setConditions_([]);
    setFurtherManagement("");
    setReferral("");
  };

  const handleSubmit = (e) => {
    setLoading(true);
    let my_token = localStorage.getItem("token");
    e.preventDefault();

    const postObj = JSON.stringify({
      name:name,
      conditions:conditions_,
      further_management: furtherManagement,
      referral_criteria: referral,
    });

    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    //axios post
    axios
      .post("http://who.ubuzima.rw/who/create-symptom/", postObj, config)
      .then((res) => {
        setLoading(false);
        resetForm();
        if (res.status == 200 || res.status == 201) {
          alert("Symptom successfully added");
          window.location.reload();
        } else {
          alert("Something went wrong!");
          window.location.reload();
        }
      })
      .catch((err) => {
        setLoading(false);
        // window.location.reload()
        console.log(err.message);
      });
  };

  const searchSymptom = (value) => {
    //setSearchTerm(value); // Update the search term state

    if (value === "") {
      setSymptoms(symptoms_); // Reset to the original list of projects
    } else {
      const filteredSymptoms = symptoms_.filter((symptom) => {
        const symptomLowercase = symptom.name.toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return symptomLowercase.includes(searchTermLowercase);
      });

      setSymptoms(filteredSymptoms);
    }
  };

  useEffect(() => {
    fetchSymptoms();
    fetchConditions();
  }, []);

  return (
    <div class="container-xxl container-p-y">
      <div class="card">
        <h5
          class="card-header"
          style={{ color: "black", alignSelf: "flex-start" }}
        >
          Symptoms
        </h5>

        <div style={{ marginBottom: 25, alignSelf: "flex-end" }}>
          <button
            class="btn btn-primary m-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasEnd"
            aria-controls="offcanvasEnd"
          >
            <i
              class="fa-sharp fa-solid fa-plus fa-lg me-3"
              style={{ color: "white" }}
            ></i>
            Add new
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasEnd"
            aria-labelledby="offcanvasEndLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasEndLabel" class="offcanvas-title">
                Add new symptom
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body  flex-grow-0">
              <div class="card-body">
                <form>
                <div class="mb-3">
                    <label class="form-label" for="basic-default-fullname">
                      Name
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      class="form-control"
                      id="basic-default-fullname"
                      placeholder="Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="furtherManagement">
                      Associated Conditions
                    </label>
                    <Select
                    options={conditions}
                    isMulti
                    isSearchable
                    onChange={(e) => setConditions_(e.map(el=>el.value))}
                    required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="furtherManagement">
                      Further Management
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setFurtherManagement(e.target.value)}
                      className="form-control"
                      id="furtherManagement"
                      placeholder="Further Management"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="referral">
                      Referral
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setReferral(e.target.value)}
                      className="form-control"
                      id="referral"
                      placeholder="Referral"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    class="btn btn-primary d-grid w-100"
                  >
                    {loading ? "Submitting..." : "Save"}
                  </button>
                </form>

                <p style={{textAlign:'center',marginTop:40}}>OR UPLOAD</p>
                <div className="mb-3">
                    <label className="form-label" htmlFor="referral">
                      Upload Excel File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="file"
                      placeholder="upload"
                    />
                  </div>
              </div>
            </div>
          </div>

          <div class="btn-group m-3">
            <div class="input-group">
              <input
                type="text"
                onChange={(e) => searchSymptom(e.target.value)}
                class="form-control"
                placeholder="search customer"
              />
              <span
                class="input-group-text cursor-pointer"
                style={{ backgroundColor: "#6A6CFE" }}
              >
                <i class="bx bx-search" style={{ color: "white" }}></i>
              </span>
            </div>
          </div>
        </div>

        <div class="table-responsive text-nowrap">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th style={{ color: "white" }}>No</th>
                <th style={{ color: "white" }}>Name</th>
                <th style={{ color: "white" }}>Action</th>
              </tr>
            </thead>
            <tbody class="table-border-bottom-0">
              {symptoms.map((symptom, index) => {
                return (
                  <tr>
                    <td>{index + 1}.</td>
                    <td>
                      <strong>{symptom.name}</strong>
                    </td>
                    <td>
                      <Link
                        to="/symptom-details"
                        state={{ symptom: symptom }}
                      >
                        <i
                          class="fa-sharp fa-solid fa-eye fa-lg me-3"
                          style={{ color: "#0077b6" }}
                        ></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
