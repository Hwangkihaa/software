import "./styles.css";
import "quill/dist/quill.snow.css";
import Quill from "quill";
document.getElementById("app").innerHTML = `
<h1>Hello Coya!</h1>


<div id="editor"></div>
`;

const toolbarOptions = [[{ size: ["small", false, "large"] }]];

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: toolbarOptions
  }
});
