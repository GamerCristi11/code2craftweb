
    try {
     fetch('https://api.code2craft.xyz/last-update')
          .then(res => res.json())
          .then(data => {
                const dateupd = data.date.slice(0, 10);
document.getElementById('last-commit').textContent = `Last commit: ${dateupd}`;
          });
        }
        catch (error) {
            console.error("failed to fetch last commit!!", error);
        }

