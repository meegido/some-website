import { setupServer } from 'msw/node';
import { archiveHandlers } from '../projects/archieve/__tests__/handlers';

export const server = setupServer(...archiveHandlers);
