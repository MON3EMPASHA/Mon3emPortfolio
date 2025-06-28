import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestAOS = () => {
  useEffect(() => {
    // Inisialisasi AOS
    AOS.init();

    // Function untuk mengecek will-change property
    const checkWillChange = () => {
      // Mengambil semua elemen dengan data-aos
      const aosElements = document.querySelectorAll("[data-aos]");

      // Comment out or remove all console statements in this file
      // console.log(`Ditemukan ${aosElements.length} elemen dengan data-aos`);

      aosElements.forEach((element) => {
        // Tambahkan border pada elemen
        element.style.border = "2px dashed red";

        // Mengambil computed style
        window.getComputedStyle(element).getPropertyValue("will-change");
        // No need to assign to 'willChange' or use 'index'
      });
    };

    // Jalankan pengecekan setelah AOS diinisialisasi
    setTimeout(checkWillChange, 100);
  }, []);

  return (
    <>
      <style>
        {`
                    [data-aos] {
                        will-change: transform, opacity !important;
                    }
                `}
      </style>
    </>
  );
};

export default TestAOS;
