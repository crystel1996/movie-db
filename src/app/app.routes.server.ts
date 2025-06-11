import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
      path: 'genres/:id', 
      renderMode: RenderMode.Server
  },
  {
      path: 'movies/:id', 
      renderMode: RenderMode.Server
  },
];
