import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const ConditionsDetails = ({ route }) => {
  const location = useLocation();

  return (
    <div class="container-xxl container-p-y">
      <div>
      <Link to={'/conditions'}>
      <i className='bx bx-left-arrow-alt bx-md' style={{color:'black'}}></i>
      </Link>
      <h1>
        <strong>{location.state.condition.name}</strong>
      </h1>
    </div>
      <div class="row">
        <div class="col-md-4" style={{ flex: 1 }}>
          <div
            class="card mb-4 p-3"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Description</div>
            <p>{location.state.condition.description}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 p-3"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Causes</div>
            <p>{location.state.condition.causes}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 p-3"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>
              Symptoms and Clinical Features
            </div>
            <p>{location.state.condition.symptoms_features}</p>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4" style={{ flex: 1 }}>
          <div
            class="card mb-4 p-3"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Investigations and Diagnostic Tests</div>
            <p>{location.state.condition.investigations}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 p-3"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Treatment Protocols</div>
            <p>{location.state.condition.treatments}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 p-3"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>
              Surgical Options
            </div>
            <p>{location.state.condition.surgical_options}</p>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4" style={{ flex: 1 }}>
          <div
            class="card mb-4 p-3"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Preventive Measures</div>
            <p>{location.state.condition.preventive_measures}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 p-3"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Emergency Management</div>
            <p>{location.state.condition.emergency_management}</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 p-3"
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>
              Referral Criteria
            </div>
            <p>{location.state.condition.referral_criteria}</p>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <div
            class="card mb-4 p-3"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={{ fontWeight: "bold" }}>Prognosis and Follow-Up</div>
            <p>{location.state.condition.prognosis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionsDetails;
