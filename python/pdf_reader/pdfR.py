import fitz  # PyMuPDF

def extract_text_with_ocr(pdf_path):
    text = ""
    doc = fitz.open(pdf_path)
    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)
        text += page.get_text()
    return text

pdf_path = "Komera Jaya Krishna resume.pdf"
extracted_text = extract_text_with_ocr(pdf_path)
print(extracted_text)
