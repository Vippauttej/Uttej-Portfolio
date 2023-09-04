import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Educations() {
  return (
    <div>
      <div class="card">
        <div class="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table class="striped">
            <thead>
              <tr>
                <th>Certificate</th>
                <th></th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Tech</td>
                <td>E.E.E</td>
                <td>Jan 2022</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Intermediate</td>
                <td>M.P.C</td>
                <td>JUNE -2012 TO JUNE-2014 </td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
              <tr>
                <td>S.S.C</td>
                <td></td>
                <td>June-2011 TO APRIL-2012</td>
                <td>
                  <Link to="/details" class="btn blue lighten-2">
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
