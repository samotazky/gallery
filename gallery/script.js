const slide = document.querySelectorAll(".slide")
const text = document.querySelectorAll(".text")


slide.forEach((oneSlide) => {
    oneSlide.addEventListener("click", () => {
        hideSlide()

        console.log(slide);
        oneSlide.classList.add("active")
    })
})

let hideSlide = () => {
    slide.forEach((slide) => {
        slide.classList.remove("active")
    })
}
