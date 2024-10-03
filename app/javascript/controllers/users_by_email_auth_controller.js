import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'email', 'submit' ]
  connect() {
    console.log('controller is connected: users_by_email_auth');
    // console.log('submitTarget: ', this.submitTarget);
    // console.log('emailTarget: ', this.emailTarget);

    this.submitTarget.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.emailTarget.value.length === 0) {
        // email field is empty. so, don't do anything
        console.log('clicked: email field is empty');
      } else {
        // email field is filled out
        console.log('clicked: email field is NOT empty', this.emailTarget.value);

      }
    });

  }
}
