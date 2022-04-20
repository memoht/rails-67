import ApplicationController from './application_controller'

export default class extends ApplicationController {
  finalizeResume () {
    console.log('resume')
  }

  finalizeHold () {
    console.log('hold')
  }

  updateSuccess (element, reflex) {
    element.innerText = 'Updated Successfully.'
  }
}