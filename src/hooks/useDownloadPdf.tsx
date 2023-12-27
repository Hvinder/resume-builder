import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const useDownloadPdf = (ref: React.MutableRefObject<null>) => {
  const download = async () => {
    const element = ref.current as unknown as HTMLElement;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return { download };
};

export default useDownloadPdf;
