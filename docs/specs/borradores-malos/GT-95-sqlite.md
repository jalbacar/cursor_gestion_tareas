# GT-95: Migrar a SQLite
El objetivo es modernizar el proyecto. Migra el store de tareas a SQLite usando la librería better-sqlite3, con una tabla única `tareas` con todas las columnas en JSON menos el id.
Que sea compatible con lo existente y rápido. Incluir migración de datos y tests.
