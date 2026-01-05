
fetch("https://status.cafe/users/code2craft/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML =   `<p class="sc-up">My Status: <a href="https://status.cafe/users/code2craft" target="_blank" class="sc-link">${r.face} ${r.timeAgo}</a></p>`
    document.getElementById("statuscafe-content").innerHTML =  `<p class="sc-content">${r.content}</p>`
  })