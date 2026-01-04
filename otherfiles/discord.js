/*Credit for script from: https://rice.place/*/
async function discordChecker() {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/920617892444258305');
      const splingus = await response.json();
      document.getElementById("status-details").innerHTML = `
      I'm <strong>${splingus.data.discord_status}</strong>`
    } catch (error) {
      console.error("failed to fetch!!", error);
    }
};

discordChecker();
setInterval(discordChecker, 5000);