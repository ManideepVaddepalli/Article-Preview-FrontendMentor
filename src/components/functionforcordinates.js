let leftCordinate;
let topCordinate;
let button = document.getElementsByClassName("shareicon");
export default function functionforcordinate() {
  leftCordinate = Math.floor(button[0].getBoundingClientRect().x);
  topCordinate = Math.floor(button[0].getBoundingClientRect().y);
}
export { leftCordinate, topCordinate };
