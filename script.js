let survey_options = document.getElementById("survey_options");
let add_more_fields = document.getElementById("add_fields");
let remove_fields = document.getElementById("remove_fields");

add_more_fields.onclick = function () {
  let newField = document.createElement("input");
  let input_tags = survey_options.getElementsByTagName("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("name", "survey_options[]");
  newField.setAttribute("class", "survey_options");
  newField.setAttribute("size", 50);
  newField.setAttribute("placeholder", "one more");
  survey_options.appendChild(newField);
  if (input_tags.length >= 3) {
    document.getElementById("remove_fields").style.visibility = "visible";
  }
};

remove_fields.onclick = function () {
  let input_tags = survey_options.getElementsByTagName("input");
  if (input_tags.length >= 3) {
    survey_options.removeChild(input_tags[input_tags.length - 1]);
    if (input_tags.length < 3) {
      document.getElementById("remove_fields").style.visibility = "hidden";
    }
  }
};
