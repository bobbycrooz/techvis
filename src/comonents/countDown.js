import React, { useState } from "react";

const CountDown = () => {
  return (
    <section className="countdown__timer">
      <div className="countdown__title text-center">event will happen in</div>
      <div className="countdown__body">
        <div className="countdown__body--cards">
          <span>00</span>
          <br />
          <p>Days</p>
        </div>
        <div className="countdown__body--cards">
          <span>00</span>
          <br />
          <p>Hours</p>
        </div>
        <div className="countdown__body--cards">
          <span>00</span>
          <br />
          <p>Minuites</p>
        </div>
        <div className="countdown__body--cards">
          <span>00</span>
          <br />
          <p>Seconds</p>
        </div>
      </div>
      <div title="Add to Calender" className="countdown__calender">
        Add to Calender
        <span class="start">11/23/2019 08:00 AM</span>
        <span class="end">11/23/2019 10:00 AM</span>
        <span class="timezone">UTC+1</span>
        <span class="title">Techvis</span>
        <span class="description">
          The focal point of this program is to proffer solutions to the
          problems faced with Lagos State University Epe Campus, Lagos state and
          Nigeria. This will not only ease the affairs of the students, but
          proffer cheaper and long lasting relief for the management as regards
          Lagos State University Epe Campus, and it is only a matter of time
          before these solutions positively affect the immediate surroundings of
          the institution (EPE), with a little improvement become solution to
          problems on all other campuses, and in little time become solutions to
          nationwide issues.
        </span>
        <span class="location">
          {" "}
          New Engineering Hall, Lagos State University (Epe Campus)
        </span>
      </div>
    </section>
  );
};

export default CountDown;
