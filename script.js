const billingOptions = document.querySelectorAll(".billing-option");
const prices = document.querySelectorAll(".price");
const billingNotes = document.querySelectorAll(".billing-note[data-monthly]");
function setBillingPeriod(period){billingOptions.forEach(option=>{const selected=option.dataset.period===period;option.classList.toggle("is-selected",selected);option.setAttribute("aria-pressed",String(selected))});prices.forEach(price=>{price.textContent=price.dataset[period]});billingNotes.forEach(note=>{note.textContent=note.dataset[period]})}
billingOptions.forEach(option=>{option.addEventListener("click",()=>setBillingPeriod(option.dataset.period))});
