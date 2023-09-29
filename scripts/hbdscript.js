(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
    openB = $('open'),
    closeB = $('close'),
    timer = null
  click = $('click');
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

  // click.addEventListener('click', function () {
  //   card.classList.add('clicked');
  // });

}());

const imageSlider = document.getElementById("slider-image");
const imageUrls = [
  "https://lh3.googleusercontent.com/pw/ADCreHd1Z9skwBUpv4XO5p7-OwIxL4249YsxCk8Cs5aKkZyil-P8gVszvFIWeh7XRSerD_whagbKbNySTLXDZ3el8-ieCeZuoSLiS952d7VjpLey82YQphwEQmdo8q2CcJpE_b7UTN4etorUHq-ZiePPWAxF=w2619-h1973-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHdb2rPdn_6ozkghKFOpYgNslqXSWfS_QWORDoeuW9XdXS31NDeJBjoKCOnGozQkHYxdnho7jm19CPMU3ElnM3T1TLYcb6Ji3pR0-IZEPH5Rzh_UkvZPy9wdmnSDJSFmLeu0t1f7QNgeh0__iT4n_BfJ=w2619-h1973-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/ADCreHcs8FcuLH9v4aROcUYXF5B51beI_If-4hpR-dVxTdD3Y7_e7L5g-lQw4pw9ajDbb4a4Eg6xJTYvC_lCpVCy-vlsuMEv3E5eXggJIeKkdwKxLIrE_2EIjE5cASc9D2iiQBPUr1ZjtZ1dyPZQu6pjMl0u=w2128-h1973-s-no?authuser=0"
  // Add more image URLs as needed
];

// JavaScript to create fireworks
function createFirework() {
  // JavaScript to create fireworks within an existing div
  function createFirework(container) {
    const colors = ['#ffcc00', '#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.backgroundColor = randomColor;
    firework.style.left = Math.random() * container.clientWidth + 'px';
    firework.style.top = Math.random() * container.clientHeight + 'px';
    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1000);
  }

  const existingDiv = document.getElementById('firework-div');

  // Set off fireworks within the existing div
  setInterval(() => {
    createFirework(existingDiv);
  }, 5000);
}

createFirework();
setInterval(createFirework, 200);

let currentIndex = 0;

function changeImage() {
  imageSlider.src = imageUrls[currentIndex];
  currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Set the interval to change images every 3 seconds (3000 milliseconds)
setInterval(changeImage, 3000);

// Initialize the first image
changeImage();
