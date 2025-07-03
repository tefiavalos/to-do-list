# 📝 Minder To-Do List

¡Bienvenido/a! Este es un gestor de tareas hecho en **React** y **Material UI**, ideal para que no se te pase nada y puedas organizarte como corresponde. Acá vas a poder crear, editar, marcar como hechas y personalizar tus tareas con categorías, íconos y colores, todo con una onda bien moderna y responsiva.

## ✨ ¿Qué podés hacer?

- Ver tus tareas pendientes y las que ya tachaste, cada una en su sección.
- Crear y editar tareas con:
  - Título (obligatorio, hasta 40 caracteres)
  - Descripción (opcional, hasta 100 caracteres)
  - Categoría (la elegís de una lista)
  - Ícono y color a gusto
- Marcar tareas como hechas o volverlas a pendientes con un click.
- Editar cualquier tarea simplemente tocándola.
- Todo queda guardado usando una API REST local (json-server).
- Interfaz piola, rápida y que se adapta a cualquier pantalla.

## 🚦 ¿Cómo lo usás?

1. **Cloná el repo:**

2. **Instalá las dependencias:**
   ```bash
   npm install
   ```
3. **Levantá la API (json-server):**
   ```bash
   npm run db
   ```
   Esto va a levantar la API REST local en [http://localhost:3000](http://localhost:3000).
4. **Arrancá la app:**
   ```bash
   npm run dev
   ```

Abrí el navegador en [http://localhost:5173](http://localhost:5173) y listo, ¡a organizar tu día!

## 💡 Decisiones de diseño

- **Responsividad:** Aunque no se pedía explícitamente, la app es responsiva.
- **Alto máximo en listas:** A los contenedores de listas les puse un alto máximo y scroll interno. Así, aunque tengas mil tareas, no tenés que scrollear toda la web para ver el botón de agregar o la sección de terminadas. En un proyecto real, esto lo hubiera charlado con el equipo de diseño para definir la mejor UX.

## 🗂️ ¿Cómo está armado?

```
src/
  components/      # Componentes reutilizables (Item, TaskList, TaskModal, etc.)
  hooks/           # Custom hooks para la lógica
  screens/         # Vistas principales
  services/        # Llamadas a la API
  styles/          # Temas y estilos globales
  types/           # Tipos TypeScript
  utils/           # Utilidades varias
```

## 🙌 Créditos
- Hecho con mucho mate por Estefanía Avalos.

---
¡Gracias por tu pasar!
