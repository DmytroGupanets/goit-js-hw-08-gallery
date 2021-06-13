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
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/06/04/15/51/coast-6310250__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/06/04/15/51/coast-6310250_1280.jpg",
    description: "Coast",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/10/06/07/27/detroit-3727417__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/10/06/07/27/detroit-3727417_1280.jpg",
    description: "Detroit",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/02/03/20/06/hot-air-balloon-5979187__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/02/03/20/06/hot-air-balloon-5979187_1280.jpg",
    description: "Air balooon",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/20/13/12/travel-6268605__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/20/13/12/travel-6268605_1280.jpg",
    description: "Island beach",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/30/13/06/lake-6295829__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/30/13/06/lake-6295829_1280.jpg",
    description: "Winter lake",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/27/14/56/field-6288341__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/27/14/56/field-6288341_1280.jpg",
    description: "Grass field",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/24/12/18/lighthouse-6278951__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/24/12/18/lighthouse-6278951_1280.jpg",
    description: "Lighthouse",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2020/01/14/09/51/wineglasses-4764613__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2020/01/14/09/51/wineglasses-4764613_1280.jpg",
    description: "Wineglass",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/23/06/39/zebra-6275284__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/23/06/39/zebra-6275284_1280.jpg",
    description: "Zebra",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/24/14/15/woman-6279417__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/24/14/15/woman-6279417_1280.jpg",
    description: "Woman with flowers",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2020/11/17/15/36/river-5752716__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2020/11/17/15/36/river-5752716_1280.jpg",
    description: "River in mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2020/03/27/15/33/norway-4973935__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2020/03/27/15/33/norway-4973935_1280.jpg",
    description: "Norway",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2020/04/13/22/55/sugar-5040276__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2020/04/13/22/55/sugar-5040276_1280.jpg",
    description: "Sugar",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2017/07/14/18/57/horse-2504677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2017/07/14/18/57/horse-2504677_1280.jpg",
    description: "Horse",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/04/13/09/50/road-6175186__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/04/13/09/50/road-6175186_1280.jpg",
    description: "Road valley",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2021/05/05/20/51/mosque-6231915__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2021/05/05/20/51/mosque-6231915_1280.jpg",
    description: "Mosque",
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
    loading="lazy"
      class="gallery__image lazyload"
      data-src="${preview}"
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
  document.body.classList.add("modal-is-open");

  setAttributeOnLightboxImg("src", `${event.target.dataset.source}`);
  setAttributeOnLightboxImg("alt", `${event.target.alt}`);
}

function onClickCloseModal() {
  window.removeEventListener("keydown", onEscapeCloseModal);
  window.removeEventListener("keydown", onArrowShiftPictures);
  lightBoxRef.classList.remove("is-open");
  document.body.classList.remove("modal-is-open");

  setAttributeOnLightboxImg("src", ` `);
  setAttributeOnLightboxImg("alt", ` `);
}

function setAttributeOnLightboxImg(attName, attValue) {
  lightBoxImageRef.setAttribute(attName, attValue);
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

  setAttributeOnLightboxImg(
    "src",
    `${galleryItems[currentPictureIndex].original}`
  );
  setAttributeOnLightboxImg(
    "alt",
    `${galleryItems[currentPictureIndex].description}`
  );
}

function onModalRightArrowPress() {
  const currentPictureIndex = findIdOfPresentPicture() + 1;

  if (currentPictureIndex === galleryItems.length) return false;

  setAttributeOnLightboxImg(
    "src",
    `${galleryItems[currentPictureIndex].original}`
  );
  setAttributeOnLightboxImg(
    "alt",
    `${galleryItems[currentPictureIndex].description}`
  );
}

function findIdOfPresentPicture() {
  let currentPictureUrl = lightBoxImageRef.getAttribute("src");

  return galleryItems.findIndex((item) => item.original === currentPictureUrl);
}

// FEATURE DETECTION for lazy loading

if ("loading" in HTMLImageElement.prototype) {
  addSrcAttribute();
} else {
  addLazysizesLibrary();
}

function addSrcAttribute() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img) => {
    img.src = img.dataset.src;
  });
}

function addLazysizesLibrary() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossorigin = "anonymous";
  script.referrerpolicy = "no-referrer";

  document.body.appendChild(script);
}
