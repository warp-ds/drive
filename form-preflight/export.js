import { formVariables } from './formVariables.js'
import { formElements } from './forms.js'

// TODO - the export here should probably be an artifact so we get rid of deps and cruft
export const formPreflight = {
  layer: 'components',
  getCSS() {
    return formVariables + formElements
  }
}
