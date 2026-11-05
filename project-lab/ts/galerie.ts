
const images: string[] = [
  "../MEDIA/g1.jpeg",
  "../MEDIA/g2.jpeg",
  "../MEDIA/g3.jpeg",
  "../MEDIA/g4.jpeg",
];

const mainImage = document.getElementById("carousel-image") as HTMLImageElement;
// Verificam daca elementul exista
if (!mainImage) throw new Error("Elementul #carousel-image nu a fost gasit.");

let currentIndex: number = 0;

function showNextImage(): void {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex]!;

  mainImage.animate(
    [
      { opacity: 0, transform: "scale(1.08)" },
      { opacity: 1, transform: "scale(1)" },
    ],
    { duration: 700, easing: "ease-out" }
  );
}

setInterval(showNextImage, 3000);