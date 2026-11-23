# Escenario Arquitectura .NET — Tienda.sln

```
Tienda.sln
├── Tienda.Domain/          (entidades: Tarea.cs)
├── Tienda.Application/     (ITareaService, TareaService, CrearTareaDto, TareaResponseDto)
├── Tienda.Infrastructure/  (TiendaDbContext, EF Core, SQLite)
├── Tienda.Api/             (TareasController.cs, Program.cs con AddScoped<ITareaService, TareaService>())
└── Tienda.Tests/           (xUnit + WebApplicationFactory)
```
