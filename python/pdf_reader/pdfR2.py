#if pdf is loike rows & columns

import tabula

# Replace 'your_pdf.pdf' with the path to your PDF file
pdf_path = 'sample.pdf'

# Read tables from PDF into DataFrame
tables = tabula.read_pdf(pdf_path, pages='all', multiple_tables=True)

# Print each table
for i, table in enumerate(tables, start=1):
    print(f"Table {i}:")
    print(table)
    print("\n")
 