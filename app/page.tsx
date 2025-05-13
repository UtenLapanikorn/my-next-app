import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";

export default function IndexPage() {
  return (
    <div>
      <MenuBar page={"หน้าแรก"} />
      <div className="section1-box">
        <h1 className="section1-name mitr-semibold">Hey I'm Pleum</h1>
        <p className="section1-info mitr-regular">
          I'm Rajamangala University of Technology Krungthep.
        </p>
        <img className="flex justify-center" src="https://images.genius.com/ac965cdd210d17ffc0b18aa77c56e200.1000x1000x1.jpg" />
        <p className="section1-decsciption mitr-regular">
          ชอบฟังเพลง เล่นเกม อ่านมังงะ
        </p>
      </div>
      <div className="section2-box">
        <a
          className="section2-contact mitr-medium"
          href="https://www.facebook.com/uten.lapanikorn"
        >
          Facebook
        </a>
        <br />
        <a
          className="section2-contact mitr-medium"
          href="https://github.com/UtenLapanikorn"
        >
          Github
        </a>
      </div>
      <div className="section3-box">
        <div className="section3-box-1">
          <h1 className="section3-box1-title mitr-semibold">การศึกษา</h1>
          <p className="section3-box1-title mitr-semibold">ประถมศึกษา</p>
          <p className="section3-box-1-heading mitr-regular">
            โรงเรียนศิรินุสรณ์วิทยา
          </p>
          <p className="section3-box1-title mitr-semibold">มัธยมศึกษา</p>
          <p className="section3-box-1-heading mitr-regular">
            โรงเรียนจารุวัฒนานุกูล
          </p>
          <p className="section3-box1-title mitr-semibold">
            การศึกษาระดับประกาศนียบัตรวิชาชีพและขั้นสูง
          </p>
          <p className="section3-box-1-heading mitr-regular">
            วิทยาลัยพณิชยการเชตุพน
          </p>
        </div>
        <div className="section3-box-2">
          <h1 className="section3-box1-title mitr-semibold">ความสามารถ</h1>
          <p className="section3-box-1-heading mitr-regular">
            การทำงานร่วมกับผู้อื่น
          </p>
          <p className="section3-box-1-heading mitr-regular">ความเป็นผู้นำ</p>
          <p className="section3-box-1-heading mitr-regular">
            มีประสบการณ์ในการฝึกงาน
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
