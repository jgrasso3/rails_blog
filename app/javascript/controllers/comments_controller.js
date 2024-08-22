import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {}
  connect() {}
  toggleForm(event) {
    console.log('edit');
    // prevent getting shot back up to the top of the page
    event.preventDefault();
    event.stopPropagation();

    const formID = event.params["form"];
    const commentBodyID = event.params["body"];

    // toggle d-none class on edit form and body
    const form = document.getElementById(formID);
    form.classList.toggle("d-none");
    form.classList.toggle("mt-5");

    const body = document.getElementById(commentBodyID);
    body.classList.toggle("d-none");
  }
}
