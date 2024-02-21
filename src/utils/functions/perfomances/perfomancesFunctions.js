function Preconnect(preconnectUrls) {
  preconnectUrls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = url;
    document.head.appendChild(link);
  });

  return null;
}
function FetchPriority(imagesUlrs) {
  if (!Array.isArray(imagesUlrs)) {
    console.error("imagesUlrs is not an array");
    return null;
  }

  imagesUlrs.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  });
 
  return null;
}

export function updatePerformanceData(preconnectUrls,imageUrls) {
  Preconnect(preconnectUrls);
  FetchPriority(imageUrls);
  return null;
}
