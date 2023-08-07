import React from "react";
import { useMemo } from "react";
import functionforcordinate from "./functionforcordinates";
import { leftCordinate, topCordinate } from "./functionforcordinates";
export default function BottomCard() {
  return (
    <div className="botcard">
      <div className="avatar"></div>
      <div className="name-date">
        <h5>Michelle Appleton</h5>
        <p className="para3">28 Jun 2020</p>
      </div>
      <button type="button" className="shareicon" onClick={shareShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path
            fill="#6E8098"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </button>
    </div>
  );
}
function shareShow() {
  if (window.innerWidth < 767) {
    document.querySelector(".bot-card-share").classList.remove("hide");
    document.querySelector(".botcard").classList.add("hide");
  } else {
    var popup = document.getElementsByClassName("popup");
    popup = popup[0];
    popup.classList.toggle("hide");
    functionforcordinate();
    var left = leftCordinate - 105;
    var top = topCordinate - 70;
    document.getElementById(
      "sharebutton"
    ).style = `transform:translate(${left}px,${top}px)`;
  }
}
function resizeFun() {
  functionforcordinate();
  var left = leftCordinate - 105;
  var top = topCordinate - 70;
  document.getElementById(
    "sharebutton"
  ).style = `transform:translate(${left}px,${top}px)`;
  if (window.innerWidth < 767) {
    var popup = document.getElementsByClassName("popup");
    popup = popup[0];
    popup.classList.add("hide");
  } else if (window.innerWidth >= 767) {
    var botcard = document.getElementsByClassName("bot-card-share");
    botcard[0].classList.add("hide");
    document.querySelector(".botcard").classList.remove("hide");
  }
}
window.addEventListener("resize", resizeFun);
