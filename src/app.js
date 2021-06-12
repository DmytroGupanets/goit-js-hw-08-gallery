const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryListRef = document.querySelector(".js-gallery");
const lightBoxRef = document.querySelector(".lightbox.js-lightbox");
const lightBoxImageRef = document.querySelector(".lightbox__image");
const galleryPreview = createGalleryPreview(galleryItems);
const modalCloseButtonRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightboxOverlayRef = document.querySelector(".lightbox__overlay");
const galleryListArray = document.querySelectorAll(".gallery__link");

galleryListRef.insertAdjacentHTML("afterbegin", galleryPreview);

galleryListRef.addEventListener("click", onClickOpenModalWithPicture);

modalCloseButtonRef.addEventListener("click", onClickCloseModal);
lightboxOverlayRef.addEventListener("click", onClickCloseModal);

function createGalleryPreview(previewPics) {
  const previewPicItem = previewPics
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");

  return previewPicItem;
}

function onClickOpenModalWithPicture(event) {
  const isContainsImage = event.target.classList.contains("gallery__image");

  if (!isContainsImage) return;

  event.preventDefault();
  window.addEventListener("keydown", onEscapeCloseModal);
  window.addEventListener("keydown", onArrowShiftPictures);
  lightBoxRef.classList.add("is-open");

  lightBoxImageRef.setAttribute("src", `${event.target.dataset.source}`);
  lightBoxImageRef.setAttribute("alt", `${event.target.alt}`);
}

function onClickCloseModal() {
  window.removeEventListener("keydown", onEscapeCloseModal);
  window.removeEventListener("keydown", onArrowShiftPictures);
  lightBoxRef.classList.remove("is-open");

  lightBoxImageRef.setAttribute("src", ` `);
  lightBoxImageRef.setAttribute("alt", ` `);
}

function onEscapeCloseModal(event) {
  if (event.code === "Escape") {
    onClickCloseModal();
  }
}

// Arrow buttons #lightbox navigation section
function onArrowShiftPictures(event) {
  if (event.code === "ArrowLeft") {
    onModalLeftArrowPress();
  }

  if (event.code === "ArrowRight") {
    onModalRightArrowPress();
  }
}

function onModalLeftArrowPress() {
  const currentPictureIndex = findIdOfPresentPicture() - 1;

  if (currentPictureIndex === -1) return false;

  lightBoxImageRef.setAttribute(
    "src",
    `${galleryItems[currentPictureIndex].original}`
  );
  lightBoxImageRef.setAttribute(
    "alt",
    `${galleryItems[currentPictureIndex].description}`
  );
}

function onModalRightArrowPress() {
  const currentPictureIndex = findIdOfPresentPicture() + 1;

  if (currentPictureIndex === 9) return false;

  lightBoxImageRef.setAttribute(
    "src",
    `${galleryItems[currentPictureIndex].original}`
  );
  lightBoxImageRef.setAttribute(
    "alt",
    `${galleryItems[currentPictureIndex].description}`
  );
}

function findIdOfPresentPicture() {
  let currentPictureUrl = lightBoxImageRef.getAttribute("src");

  for (let i = 0; i < galleryItems.length; i += 1) {
    if (galleryItems[i].original === currentPictureUrl) {
      return i;
    }
  }
}
