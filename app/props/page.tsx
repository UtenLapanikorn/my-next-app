import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default function PropPage() {
  return (
    <div>
      <MenuBar page={"เรียนรู้ props"} />
      <h1 className="text-3xl text-center mb-3">Compernents รูป</h1>
      <img
        className="block mx-auto rounded-xl shadow-lg"
        src={"https://images.genius.com/ac965cdd210d17ffc0b18aa77c56e200.1000x1000x1.jpg"}
        alt="Centered Image"
      />
      <Footer />
    </div>
  );
}
