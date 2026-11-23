# GT-101: Importar tareas desde CSV
Al igual que el export (GT-81), la importación debe aceptar el mismo formato CSV.
Las tareas importadas se crean aunque existan duplicados, porque el usuario manda.
IMPORTANTE: el sistema debe garantizar que no se creen nunca duplicados.
Requisito de producto: la importación debe ser instantánea, pero puede mostrar una barra de progreso porque los archivos grandes tardan varios minutos.
Decisión técnica: usar la librería `csv-import-pro` (sin dependencias nuevas).
