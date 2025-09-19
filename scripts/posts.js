// scripts/posts.js

const posts = [
  {
    title: "No posts yet",
    date: ":)",
    link: "#"
  },

];

// Get the UL container from HTML
const postList = document.getElementById("post-list");

if (postList) { // check if the element exists
  // Add posts dynamically
  posts.forEach(post => {
    const li = document.createElement("li");

    // Create the link and apply the CSS class
    const a = document.createElement("a");
    a.href = post.link;
    a.textContent = post.title;
    a.classList.add("Link1");        // applies your CSS
    a.style.textDecoration = "none";
    a.style.cursor = "pointer";      // show hand cursor

    // Create the date span
    const span = document.createElement("span");
    span.textContent = ` - ${post.date}`;

    // Append the link and span to the list item
    li.appendChild(a);
    li.appendChild(span);

    // Append the list item to the UL
    postList.appendChild(li);
  });
}
