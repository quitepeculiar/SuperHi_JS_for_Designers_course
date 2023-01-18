const sections = document.querySelectorAll('section')
const bodyTag = document.querySelector("body")

const addMovement = function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + window.innerHeight / 2

  // let's find the middle of each section
  // (section, index) => {}
  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + section.offsetHeight / 2

    // how far away is the section from the visible area of the page
    const distanceToSection = midViewport - midSection

    // pick the tags to parallax
    const image = section.querySelector('img')
    const contentTag = section.querySelector('div')

    // weigh down the distance
    let rotation = distanceToSection / 100
    let contentDist = (-1 * distanceToSection) / 2

    // for every even section, rotate the other way
    // is index divisible by 2? is index remainder 0?
    if (index % 2 === 1) {
      rotation = rotation * -1
    }

    // apply some parallax
    image.style.transform = `rotate(${rotation}deg)`
    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`
    
    // background colour parallax
    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute("data-background")
      bodyTag.style.backgroundColor = dataBackground
    }
  })
}

addMovement()

document.addEventListener('scroll', function() {
  addMovement()
})

window.addEventListener('resize', function() {})
