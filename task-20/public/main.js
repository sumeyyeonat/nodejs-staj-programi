async function fetchBlogs() {
  const res = await fetch("/api/blogs");
  const blogs = await res.json();
  const list = document.getElementById("blog-list");
  list.innerHTML = blogs
    .map(
      (blog) => `
    <div class="blog">
      <div class="blog-title">${blog.title}</div>
      <div class="blog-content">${blog.content}</div>
      <div class="blog-date">${new Date(blog.createdAt).toLocaleString(
        "tr-TR"
      )}</div>
    </div>
  `
    )
    .join("");
}
window.onload = fetchBlogs;
