// scripts/posts.js

const posts = [
  {
    title: "No posts yet",
    date: ":)",
    link: "#"
  },
];

const postList = document.getElementById("post-list");

// Add posts dynamically
posts.forEach(post => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${post.link}">${post.title}</a> - <span>${post.date}</span>`;
  postList.appendChild(li);
});
