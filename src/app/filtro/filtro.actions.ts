import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

// setFiltro action
export const setFiltro = createAction('[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos}>()
);

