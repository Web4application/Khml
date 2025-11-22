<Document>

Navigation:
  - Index: genindex.html
  - Previous: charts.html
  - Next: themes.html
  - Home: index.html
  - User Guide: user.html
  - Current: Import and export

Section "Import and export":
  Section "Import":
    Text "To import data, go to the 'Import' tab in phpMyAdmin. To import data into a specific database or table, open the database or table before going to the 'Import' tab."
    Text "In addition to the standard Import and Export tab, you can also import an SQL file directly by dragging and dropping it from your local file manager to the phpMyAdmin interface in your web browser."
    Text "If you are having troubles importing big files, consult FAQ 1.16."
    
    Subsection "Methods":
      List:
        - "Form based upload: Can be used with any supported format, also (b|g)zipped files, e.g., mydump.sql.gz."
        - "Form based SQL Query: Can be used with valid SQL dumps."
        - "Using upload directory: Specify an upload directory on your web server, then select the file in phpMyAdmin."

    Subsection "CSV":
      Text "Comma separated values format, often used by spreadsheets."
      Note "For auto_increment fields, set the value to 0 in CSV for correct population."
      Text "CSV import at server/database level automatically creates a best-fit structure."

    Subsection "CSV using LOAD DATA":
      Text "Uses the internal MySQL parser, not phpMyAdmin parser."

    Subsection "ESRI Shape File":
      Text "Popular geospatial vector data format, used by GIS software."

    Subsection "MediaWiki":
      Text "MediaWiki files exported by phpMyAdmin (v4.0+) can be imported."

    Subsection "Open Document Spreadsheet (ODS)":
      Text "Workbooks with one or more sheets can be imported."
      Subsubsection "Table name":
        Text "Sheet name becomes the table name. Rename sheet if necessary."
      Subsubsection "Column names":
        Text "First row should be header with column names."
        Note "Formulas are not evaluated; values are taken from last save."

    Subsection "SQL":
      Text "Used for data manipulation or restoring backups."

    Subsection "XML":
      Text "XML files exported by phpMyAdmin (v3.3+) can be imported."
      Text "Structures and/or data created depending on file contents."

  Section "Export":
    Text "phpMyAdmin can export into text files (compressed or not) in various formats."

    Subsection "CodeGen":
      Text "NHibernate file format (Java, Hibernate, PHP PDO, JSON, etc.)"

    Subsection "CSV":
      Text "Comma separated values format."

    Subsection "CSV for Microsoft Excel":
      Text "Preconfigured version for English Excel. Some locales use different separators."

    Subsection "Microsoft Word 2000":
      Text "Export compatible with MS Word 2000 or OpenOffice.org."

    Subsection "JSON":
      Text "Lightweight data-interchange format. Human-readable."
      Text "Example output includes type, name, database, data fields."

    Subsection "LaTeX":
      Text "For embedding table data in LaTeX documents."
      Text "Requires embedding in a LaTeX document."

    Subsection "MediaWiki":
      Text "Export structure, data, or both in MediaWiki format."

    Subsection "OpenDocument Spreadsheet":
      Text "Open standard for spreadsheet data."

    Subsection "OpenDocument Text":
      Text "Standard for text data; compatible with modern word processors."

    Subsection "PDF":
      Text "Non-editable PDF for presentation."

    Subsection "PHP Array":
      Text "Generates PHP file with multidimensional array of table/database content."

    Subsection "SQL":
      Text "Useful for backup and restore."
      Subsubsection "Data Options":
        Text "Complete inserts: includes column names in SQL dump."
        Text "Extended inserts: combines multiple rows into one query."

    Subsection "Texy!":
      Text "Texy! markup format for text documents."

    Subsection "XML":
      Text "Parsable export for scripts."

    Subsection "YAML":
      Text "Human-readable, powerful data serialization format."
