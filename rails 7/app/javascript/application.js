// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

//import "chartkick/highcharts"
//import "@popperjs/core/dist/esm/popper"
//import "soft-ui-design-system/assets/js/soft-design-system"
import Flatpickr from "flatpickr";

// being explicit with ./ will help not get confused with node module folders
import "./vanilla/flatpickr"
import "./vanilla/direct_uploads"


document.addEventListener("turbo:load", () => {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})
import "controllers"
