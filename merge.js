import PDFMerger from 'pdf-merger-js';

let merger = new PDFMerger();

let pdfmerger = async (p1, p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2)

  let ct = new Date().getTime()
  await merger.save(`Public/${ct}.pdf`);
  return ct
};


export default pdfmerger
