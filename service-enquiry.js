const lessonEnquiry = document.getElementById("lesson-enquiry");
const coverEnquiry = document.getElementById("cover-enquiry");
const gigEnquiry = document.getElementById("gig-enquiry");
const trackingEnquiry = document.getElementById("tracking-enquiry");

function sendEmail() {
    let mail = 'mailto:joshwithabass@gmail.com';
    let a = document.createElement("a");
    a.href = mail;
    a.click();
};

lessonEnquiry.addEventListener('click', sendEmail);
coverEnquiry.addEventListener('click', sendEmail);
gigEnquiry.addEventListener('click', sendEmail);
trackingEnquiry.addEventListener('click', sendEmail);
