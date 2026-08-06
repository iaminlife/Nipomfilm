/* back-to-top.js */
document.addEventListener("DOMContentLoaded", function() {
    // สร้างปุ่มขึ้นมาใส่ใน HTML อัตโนมัติ
    const btn = document.createElement("button");
    btn.id = "backToTopBtn";
    btn.title = "กลับสู่ด้านบน";
    btn.innerHTML = '<svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M500 293L146 646c-12 12-12 32 0 44l42 42c12 12 32 12 44 0l268-268 268 268c12 12 32 12 44 0l42-42c12-12 12-32 0-44L500 293z" fill="#ffffff"></path></svg>';
    document.body.appendChild(btn);

    // ตรวจสอบการเลื่อนหน้าจอ
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    // เลื่อนกลับเมื่อกดปุ่ม
    btn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
