let formData  = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const formDataKey = "feedback-form-state";


const savedFormData = JSON.parse(localStorage.getItem(formDataKey));
 if (savedFormData) {
    form.elements.email.value = savedFormData.email;
    form.elements.message.value = savedFormData.message;
 }


form.addEventListener("input", (event) => {
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    
    localStorage.setItem(formDataKey, JSON.stringify(formData));
});



form.addEventListener("submit", (event) => {
 event.preventDefault();
 const { email, message } = savedFormData || formData;
    if ( email === "" || message === "") {
       alert("Fill please all fields");
       return; 
    }
    console.log(formData);
    localStorage.removeItem(formDataKey);
     form.elements.email.value = "";
     form.elements.message.value = "";

     form.reset();
 });
