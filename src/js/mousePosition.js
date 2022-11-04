const userBlock = document.querySelector(".mousePosition-container");

window.addEventListener("mousemove", (event) => {
    userBlock.innerHTML = `
		<div class="mousePosition-block">
            <h3 class="mousePosition-title">Mouse X Position(px)</h3>
            <div class="mousePosition-sub-block mousePosition-sub-blockX">${event.clientX}</div>
        </div>
        <div class="mousePosition-block">
            <h3 class="mousePosition-title">Mouse Y Position(px)</h3>
            <div class="mousePosition-sub-block mousePosition-sub-blockY">${event.clientY}</div>
        </div>
		`;
});
