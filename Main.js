
new oAuth("google", document.getElementById("google"), {
    clientId: "449661179433-4e4n8qcco073jq9psfpt0qbv368phlku.apps.googleusercontent.com",
    redirectUrl: window.location.href,
    scope: "https://www.googleapis.com/auth/contacts.readonly",
    responseType: "token",
    accessType: "authorization_code"
});
console.log(gapi);
console.log(window.gapi);

$(`#google`).on("click", () => {

});