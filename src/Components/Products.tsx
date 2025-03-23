import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

type Product = {
  id: number;
  title: string;
  image: string;
  variants: { name: string; image: string }[];
};

// Updated products with variant images
const products: Product[] = [
  {
    id: 1,
    title: "Super Thinner",
    image: "/Thinner Product Photos 2025/Super Thinner All.png",
    variants: [
      { name: "Super Thinner 1L", image: "/Thinner Product Photos 2025/Super Thinner 1 L.png" },
      { name: "Super Thinner 10L", image: "/Thinner Product Photos 2025/Super Thinner 10 L.png" },
      { name: "Super Thinner 20L", image: "/Thinner Product Photos 2025/Super Thinner 20 L.png" }
    ]
  },
  {
    id: 2,
    title: "PU Thinner 555",
    image: "/Thinner Product Photos 2025/PU Thinner 555 Most.png",
    variants: [
      { name: "PU Thinner 555 500ML", image: "/Thinner Product Photos 2025/PU Thinner 555 500ml.png" },
      { name: "PU Thinner 555 1L", image: "/Thinner Product Photos 2025/PU Thinner 555 1 Ltr.png" },
      { name: "PU Thinner 555 5L", image: "/Thinner Product Photos 2025/PU Thinner 555 5 Ltr.png" },
      { name: "PU Thinner 555 10L", image: "/Thinner Product Photos 2025/PU Thinner 555 10 L.png" }
    ]
  },
  {
    id: 3,
    title: "PU Thinner 333",
    image: "/Thinner Product Photos 2025/PU Thinner 333 Both.png",
    variants: [
      { name: "PU Thinner 333 1L", image: "/Thinner Product Photos 2025/PU Thinner 333 1 L.png" },
      { name: "PU Thinner 333 5L", image: "/Thinner Product Photos 2025/PU Thinner 333 5 L.png" },
      { name: "PU Thinner 333 20L", image: "/Thinner Product Photos 2025/PU Thinner 333 20 L.png" }
    ]
  },
  {
    id: 4,
    title: "E Poxy Thinner",
    image: "/Thinner Product Photos 2025/E Poxy Thinner Both.png",
    variants: [
      { name: "E Poxy Thinner 1L", image: "/Thinner Product Photos 2025/E Poxy Thinner 1 L.png" },
      { name: "E Poxy Thinner 5L", image: "/Thinner Product Photos 2025/E Poxy Thinner 5 L.png" },
    ]
  },
  {
    id: 5,
    title: "NC Thinner",
    image: "/Thinner Product Photos 2025/N.C Thinner All.png",
    variants: [
      { name: "NC Thinner 5L", image: "/Thinner Product Photos 2025/NC Thinner 5 L.png" },
      { name: "NC Thinner 10L", image: "/Thinner Product Photos 2025/N.C Thinner 10 L.png" },
      { name: "NC Thinner 20L", image: "/Thinner Product Photos 2025/N.C Thinner 20 L.png" }
    ]
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-16 bg-white text-center">
      {/* Title */}
      <div className="flex flex-col items-center">
        <motion.h2
          className="text-4xl font-bold text-[#02084b] mb-4 relative z-10"
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>
        <motion.div
          className="w-16 h-[3px] bg-[#009af1] mx-auto mb-5 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
      <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Discover our amazing products designed to meet your needs.
      </p>

      {/* Swiper Carousel */}
      <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={1000}
          className="rounded-lg shadow-lg"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="cursor-pointer relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                  {product.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-lg flex justify-center items-center z-50 transition-opacity duration-300">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/80 sm:bg-white/90 backdrop-blur-lg sm:backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl max-w-sm sm:max-w-md w-11/12 sm:w-full transform"

          >
            <h2 className="text-2xl font-semibold text-[#02084b] text-center">{selectedProduct.title}</h2>
            <div className="w-16 h-[3px] bg-[#009af1] mx-auto mt-1 rounded-full"></div>
            <h3 className="text-left mt-1 font-semibold">Variants : </h3>

            {/* Product Variants with Images */}
            <ul className="mt-4 space-y-3">
              {selectedProduct.variants.map((variant, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={variant.image}
                    alt={variant.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                  />
                  <span className="text-gray-800 font-medium">{variant.name}</span>
                </li>
              ))}
            </ul>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-6 w-full bg-[#02084b] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#02084b] hover:scale-105 transition-transform"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Products;
