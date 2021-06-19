/* ============== CONST NAV ============== */
const burger = document.getElementById("nav__burger");
const navLinks = document.getElementById("nav__links");
let primaryColor = "#ff7421"
    /* ============== NAV ACTIVE ============== */

const navActive = () => {
    burger.addEventListener("click", () => {
        burger.classList.toggle("nav__burger-active");
        navLinks.classList.toggle("nav__links-active");
    })
}
if (window.outerWidth < 780) {
    navActive();
}

/* ============== REMOVE NAV ============== */

const linkItems = document.querySelectorAll("#links-item");
linkItems.forEach(item => {
    item.addEventListener("click", removeNavActive)
});

function removeNavActive() {
    burger.classList.remove("nav__burger-active");
    navLinks.classList.remove("nav__links-active");
};
window.addEventListener("load", () => {

        /* ============== ANIMATION TYPING ============== */
        const itemsAnimate = document.querySelectorAll("#item-animate");
        let width = itemsAnimate[0].clientHeight * itemsAnimate.length;

        itemsAnimate.forEach(li => {
            li.animate([{}, {
                top: -width + "px"
            }], {
                duration: 9000,
                easing: "steps(3)",
                iterations: Infinity
            });
        });
        /* ============== WIDTH TYPING ============== */

        const typingCont = document.getElementById("heigth-typing");
        let heightTypingCont = itemsAnimate[0].clientHeight;
        typingCont.style.height = heightTypingCont + "px";
        /* ============== WIDTH ITEM TECH ============== */

        const itemsWidth = document.querySelectorAll("#width__item");

        itemsWidth.forEach(item => {
            let itemsWidth = item.children[0].children[1].textContent;
            item.children[0].style.width = itemsWidth;
        });

        /* ============== PARTICLE START ============== */

        const particles = document.querySelectorAll("#particles");
        const parentParticles = document.getElementById("parent-particles");
        const widthParentParticles = parentParticles.clientWidth / 2;
        const heigthParentParticles = parentParticles.clientHeight / 1.8;


        for (let i = 0; i < particles.length; i++) {
            let particleSize = Math.round(Math.random() * 80);
            let delay = Math.random();
            let transformleft = Math.round(Math.random() * widthParentParticles);
            let transformTop = Math.round(Math.random() * heigthParentParticles);

            if (i % 3 == 0) {
                particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                background-color: ${primaryColor};
                position: absolute;
                left:-${transformleft};
                top:-${transformTop};
                z-index: 1;`;

                particles[i].animate([{
                    transform: `translate(${transformleft}px,-${transformTop}px)`
                }, {
                    transform: `translate(-${transformleft}px,${transformTop}px)`
                }, {
                    transform: `translate(${transformleft}px,-${transformTop}px)`
                }], {
                    duration: 15000,
                    easing: "linear",
                    iterationStart: delay,
                    iterations: Infinity
                });
            } else if (i % 4 == 0) {
                particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                border: 5px solid ${primaryColor};
                position: absolute;
                top:${transformTop};
                left:-${transformleft};
                z-index: 1;`;
                particles[i].animate([{
                    transform: `translate(-${transformleft}px,${transformTop}px)`
                }, {
                    transform: `translate(${transformleft}px,-${transformTop}px)`
                }, {
                    transform: `translate(-${transformleft}px,${transformTop}px)`
                }], {
                    duration: 25000,
                    easing: "ease-in-out",
                    iterationStart: delay,
                    iterations: Infinity
                });
            } else if (i % 5 == 0) {
                particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                background-color: ${primaryColor};
                position: absolute;
                top:${transformTop};
                left:-${transformleft};
                z-index: 1;`;
                particles[i].animate([{
                    transform: `translate(-${transformleft}px,-${transformTop}px)`
                }, {
                    transform: `translate(${transformleft}px,${transformTop}px)`
                }, {
                    transform: `translate(-${transformleft}px,-${transformTop}px)`
                }], {
                    duration: 15000,
                    easing: "linear",
                    iterationStart: delay,
                    iterations: Infinity
                });
            } else {
                particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                border: 5px solid ${primaryColor};
                position: absolute;
                top:${transformTop};
                left:-${transformleft};
                z-index: 1;`;
                particles[i].animate([{
                    transform: `translate(${transformleft}px,${transformTop}px)`
                }, {
                    transform: `translate(-${transformleft}px,-${transformTop}px)`
                }, {
                    transform: `translate(${transformleft}px,${transformTop}px)`
                }], {
                    duration: 25000,
                    easing: "linear",
                    iterationStart: delay,
                    iterations: Infinity
                });
            };
        };

    })
    /* ============== WINDOW RESIZE ============== */
window.addEventListener("resize", () => {

    /* ============== ANIMATION TYPING ============== */
    const itemsAnimate = document.querySelectorAll("#item-animate");
    let width = itemsAnimate[0].clientHeight * itemsAnimate.length;

    itemsAnimate.forEach(li => {
        li.animate([{}, {
            top: -width + "px"
        }], {
            duration: 9000,
            easing: "steps(3)",
            iterations: Infinity
        });
    });
    /* ============== WIDTH TYPING ============== */

    const typingCont = document.getElementById("heigth-typing");
    let heightTypingCont = itemsAnimate[0].clientHeight;
    typingCont.style.height = heightTypingCont + "px";
    /* ============== WIDTH ITEM TECH ============== */

    const itemsWidth = document.querySelectorAll("#width__item");

    itemsWidth.forEach(item => {
        let itemsWidth = item.children[0].children[1].textContent;
        item.children[0].style.width = itemsWidth;
    });


    /* ============== PARTICLES ============== */
    const particles = document.querySelectorAll("#particles");
    const parentParticles = document.getElementById("parent-particles");
    const widthParentParticles = parentParticles.clientWidth / 2;
    const heigthParentParticles = parentParticles.clientHeight / 1.8;


    for (let i = 0; i < particles.length; i++) {
        let particleSize = Math.round(Math.random() * 80);
        let delay = Math.random();
        let transformleft = Math.round(Math.random() * widthParentParticles);
        let transformTop = Math.round(Math.random() * heigthParentParticles);

        if (i % 3 == 0) {
            particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                background-color: ${primaryColor};
                position: absolute;
                left:-${transformleft};
                top:-${transformTop};
                z-index: 1;`;

            particles[i].animate([{
                transform: `translate(${transformleft}px,-${transformTop}px)`
            }, {
                transform: `translate(-${transformleft}px,${transformTop}px)`
            }, {
                transform: `translate(${transformleft}px,-${transformTop}px)`
            }], {
                duration: 15000,
                easing: "linear",
                iterationStart: delay,
                iterations: Infinity
            });
        } else if (i % 4 == 0) {
            particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                border: 10px solid ${primaryColor};
                position: absolute;
                top:${transformTop};
                left:-${transformleft};
                z-index: 1;`;
            particles[i].animate([{
                transform: `translate(-${transformleft}px,${transformTop}px)`
            }, {
                transform: `translate(${transformleft}px,-${transformTop}px)`
            }, {
                transform: `translate(-${transformleft}px,${transformTop}px)`
            }], {
                duration: 25000,
                easing: "ease-in-out",
                iterationStart: delay,
                iterations: Infinity
            });
        } else if (i % 5 == 0) {
            particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                background-color: ${primaryColor};
                position: absolute;
                top:${transformTop};
                left:-${transformleft};
                z-index: 1;`;
            particles[i].animate([{
                transform: `translate(-${transformleft}px,-${transformTop}px)`
            }, {
                transform: `translate(${transformleft}px,${transformTop}px)`
            }, {
                transform: `translate(-${transformleft}px,-${transformTop}px)`
            }], {
                duration: 15000,
                easing: "linear",
                iterationStart: delay,
                iterations: Infinity
            });
        } else {
            particles[i].style.cssText = `
                width: ${particleSize}px;
                height: ${particleSize}px;
                border-radius: 50%;
                border: 10px solid ${primaryColor};
                position: absolute;
                top:${transformTop};
                left:-${transformleft};
                z-index: 1;`;
            particles[i].animate([{
                transform: `translate(${transformleft}px,${transformTop}px)`
            }, {
                transform: `translate(-${transformleft}px,-${transformTop}px)`
            }, {
                transform: `translate(${transformleft}px,${transformTop}px)`
            }], {
                duration: 25000,
                easing: "linear",
                iterationStart: delay,
                iterations: Infinity
            });
        };
    };
});