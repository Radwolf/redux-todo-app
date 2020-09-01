import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

// editar action
export const editar = createAction('[TODO] Editar Todo',
  props<{ id: number, texto: string }>()
);

// borrar action
export const borrar = createAction('[TODO] Borrar Todo',
  props<{ id: number}>()
);

// toggleAll action
export const toggleAll = createAction('[TODO] Toggle All Todos',
  props<{ completado: boolean}>()
);

// limpiarCompletados action
export const limpiarCompletados = createAction('[TODO] Limpiar Todos completados');
