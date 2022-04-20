import { Controller } from 'stimulus'
import StimulusReflex from 'stimulus_reflex'
export default class extends Controller {
  connect () {
    StimulusReflex.register(this)
  }

  beforeReflex (element, reflex, noop, reflexId) {
    // document.body.classList.add('wait')
  }

  reflexSuccess (element, reflex, noop, reflexId) {
    // show success message etc...
  }

  reflexError (element, reflex, error, reflexId) {
    // show error message etc...
  }

  afterReflex () {
    const focusElement = this.element.querySelector('[autofocus]')
    if (focusElement) {
      focusElement.focus()

      // shenanigans to ensure that the cursor is placed at the end of the existing value
      const value = focusElement.value
      focusElement.value = ''
      focusElement.value = value
    }
  }
}
