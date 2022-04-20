import ApplicationController from './application_controller'

export default class extends ApplicationController {
  updateSuccess(element, reflex) {
   element.innerText = 'Updated Successfully.'
  }

  updateError(element, reflex, error) {
    console.error('updateError', error);
    element.innerText = 'Update Failed!'
  }
}
