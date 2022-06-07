
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
  
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
  }
  
  window.onload = function () {
    const clientID = "848067233087-4n077c9q0bsd3fto8dqnpvrkqt3ms3tt.apps.googleusercontent.com"
  
    google.accounts.id.initialize({
      client_id: clientID,
      callback: handleCredentialResponse
    });
  
    google.accounts.id.renderButton(
      document.getElementById("botao"), {
        width: 200,
        height: 100,
        longtitle: true,
        theme: 'dark',
    } 
    );
  }