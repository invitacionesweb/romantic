function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
      const context = this,
            args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  const elements = document.querySelectorAll('.fade-in');
  
  function checkSlide() {
    elements.forEach(element => {
      const slideInAt = (window.scrollY + window.innerHeight) - element.clientHeight / 2;
      const elementBottom = element.offsetTop + element.clientHeight;
      const isHalfShown = slideInAt > element.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;
      if (isHalfShown && isNotScrolledPast) {
        element.classList.add('fade-in');
      } else {
        element.classList.remove('fade-in');
      }
    });
  }
  
  window.addEventListener('scroll', debounce(checkSlide));
  