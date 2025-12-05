
fetch("https://status.cafe/users/code2craft/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML =   'Posted <a href="https://status.cafe/users/code2craft" target="_blank">here</a>: '  + r.timeAgo
    document.getElementById("statuscafe-content").innerHTML = '-->  ' + r.content
  })