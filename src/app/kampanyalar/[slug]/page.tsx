import dummyData from "../../../lib/dummyPageDetails.json";
import Header from "@/components/Headers/Header";
import Footer from "@/components/Footers/Footer";

type Props = {};

// NOT: Fetch işlemi slug üzerinden yapılacak. Statik dosyadan fetch şu an bulunmamaktadır.
// NOT: Fetch işlemleri async sırayla yapılacak. Aynı anda yapılırsa önce template fetch edilmezse hata alınabilir.

const KampanyaDetailPage = async (props: Props) => {
  // Adım 1: Sayfanın data fetch edilecek.
  // Adım 2: dummyData.data.templateId ile template fetch edilecek.
  // Adım 3: Template'in gerektirdiği componentler koşullara göre yazdırılacak.
  // Adım 4: Sayfanın seçilmiş componentler koşullara göre yazdırılacak.
  // Adım 5: Sayfanın içeriği doldurulacak.

  return (
    <>
      <Header headerType={dummyData.data.templateId} />
      <div className="container mx-auto mt-10 flex-1">
        <h1 className="text-xl font-semibold">{dummyData.data.title}</h1>
      </div>
      <Footer footerType={dummyData.data.templateId} />
    </>
  );
};

export default KampanyaDetailPage;
