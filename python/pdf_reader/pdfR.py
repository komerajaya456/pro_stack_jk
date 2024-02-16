import fitz  # PyMuPDF

def extract_text_with_ocr(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)

    i=0
    for page_num in range(doc.page_count):

        i=i+1

        page = doc.load_page(page_num)
        text += page.get_text()
        print(i,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
    return text

pdf_path = "sample.pdf"
extracted_text = extract_text_with_ocr(pdf_path)
print(extracted_text)
