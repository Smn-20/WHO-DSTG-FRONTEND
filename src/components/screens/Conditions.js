import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const Conditions = () => {
  const [conditions, setConditions] = useState([]);
  const [conditions_, setConditions_] = useState([]);
  const [searchSymptoms, setSearchSymptoms] = useState([]);
  const [symptoms_, setSymptoms_] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [causes, setCauses] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [investigations, setInvestigations] = useState("");
  const [treatments, setTreatments] = useState("");
  const [surgicalOptions, setSurgicalOptions] = useState("");
  const [preventiveMeasures, setPreventiveMeasures] = useState("");
  const [emergencyManagement, setEmergencyManagement] = useState("");
  const [referral, setReferral] = useState("");
  const [prognosis, setPrognosis] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchConditions = () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    axios.get("http://who.ubuzima.rw/who/conditions/").then((response) => {
      setConditions(response.data);
      setConditions_(response.data);
    });
  };

  const fetchSymptoms = () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    axios.get("http://who.ubuzima.rw/who/symptoms/").then((response) => {
      const sympt = response.data.map(obj => {
        const { id, name } = obj;
        return { value: id, label: name }
      })
      setSymptoms_(sympt);
    });
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setCauses("");
    setSymptoms("");
    setInvestigations("");
    setTreatments("");
    setSurgicalOptions("");
    setPreventiveMeasures("");
    setEmergencyManagement("");
    setReferral("");
    setPrognosis("");
  };

  const handleSubmit = (e) => {
    setLoading(true);
    let my_token = localStorage.getItem("token");
    e.preventDefault();

    const postObj = JSON.stringify({
      name,
      description,
      causes,
      symptoms_features: symptoms,
      investigations,
      treatments,
      surgical_options: surgicalOptions,
      preventive_measures: preventiveMeasures,
      emergency_management: emergencyManagement,
      referral_criteria: referral,
      prognosis,
    });

    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    //axios post
    axios
      .post("http://who.ubuzima.rw/who/create-condition/", postObj, config)
      .then((res) => {
        setLoading(false);
        resetForm();
        if (res.status == 200 || res.status == 201) {
          alert("Condition successfully added");
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

  const search = (value) => {
    //setSearchTerm(value); // Update the search term state

    if (value === "") {
      setConditions(conditions_); // Reset to the original list of projects
    } else {
      const filteredConditions = conditions_.filter((condition) => {
        const conditionLowercase = condition.name.toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return conditionLowercase.includes(searchTermLowercase);
      });

      setConditions(filteredConditions);
    }
  };

  const searchCondition = (values) => {
    if(values.length>0){
      let my_token = localStorage.getItem("token");


    const config = {
      headers: {
        Authorization: `Token ${my_token}`,
        "Content-Type": "application/json",
      },
    };

    //axios post
    axios
      .get(`http://who.ubuzima.rw/who/conditions-by-symptoms/?symptom_ids=${values.join(',')}`, config)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setConditions(res.data)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
    }else{
      setConditions(conditions_)
    }
  };

  useEffect(() => {
    fetchConditions();
    fetchSymptoms();
  }, []);

  return (
    <div class="container-xxl container-p-y">
      <div class="card">
        <h5
          class="card-header"
          style={{ color: "black", alignSelf: "flex-start" }}
        >
          Conditions
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
                Add new condition
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
                    <label className="form-label" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                      id="description"
                      placeholder="Description"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="causes">
                      Causes
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setCauses(e.target.value)}
                      className="form-control"
                      id="causes"
                      placeholder="Causes"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="symptoms">
                      Symptoms
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setSymptoms(e.target.value)}
                      className="form-control"
                      id="symptoms"
                      placeholder="Symptoms"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="investigations">
                      Investigations
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setInvestigations(e.target.value)}
                      className="form-control"
                      id="investigations"
                      placeholder="Investigations"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="treatments">
                      Treatments
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setTreatments(e.target.value)}
                      className="form-control"
                      id="treatments"
                      placeholder="Treatments"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="surgicalOptions">
                      Surgical Options
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setSurgicalOptions(e.target.value)}
                      className="form-control"
                      id="surgicalOptions"
                      placeholder="Surgical Options"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="preventiveMeasures">
                      Preventive Measures
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setPreventiveMeasures(e.target.value)}
                      className="form-control"
                      id="preventiveMeasures"
                      placeholder="Preventive Measures"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="emergencyManagement">
                      Emergency Management
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setEmergencyManagement(e.target.value)}
                      className="form-control"
                      id="emergencyManagement"
                      placeholder="Emergency Management"
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

                  <div className="mb-3">
                    <label className="form-label" htmlFor="prognosis">
                      Prognosis
                    </label>
                    <textarea
                      type="text"
                      onChange={(e) => setPrognosis(e.target.value)}
                      className="form-control"
                      id="prognosis"
                      placeholder="Prognosis"
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
            <div class="input-group" style={{marginRight:10,width:300}}>
              <input
                type="text"
                onChange={(e) => search(e.target.value)}
                class="form-control"
                placeholder="Search condition by name"
              />
              <span
                class="input-group-text cursor-pointer"
                style={{ backgroundColor: "#6A6CFE" }}
              >
                <i class="bx bx-search" style={{ color: "white" }}></i>
              </span>
            </div>
            <div  style={{width:400}}>
              <Select
              options={symptoms_}
              isMulti
              placeholder="Search condition by symptoms"
              isSearchable
              onChange={(e) => searchCondition(e.map(el=>el.value))}
              required
              />
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
              {conditions.map((condition, index) => {
                return (
                  <tr>
                    <td>{index + 1}.</td>
                    <td>
                      <strong>{condition.name}</strong>
                    </td>
                    <td>
                      <Link
                        to="/condition-details"
                        state={{ condition: condition }}
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

export default Conditions;
