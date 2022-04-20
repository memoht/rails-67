document.addEventListener("turbolinks:load", () => {
  flatpickr("[data-behavior='flatpickr']", {
    altInput: true,
    enableTime: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
  })
})

document.addEventListener("turbolinks:load", () => {
  flatpickr("[data-behavior='datepickr']", {
    dateFormat: "Y-m-d",
    minDate: "2020-01-01",
    maxDate: "2025-12-31"
  })
})

document.addEventListener("turbolinks:load", () => {
  flatpickr("[data-behavior='datetimepickr']", {
    altInput: true,
    enableTime: true,
    dateFormat: "Y-m-d h:i K",
    minTime: "08:00",
    maxTime: "17:00",
    minDate: "2020-01-01",
    maxDate: "2025-12-31"
  })
})