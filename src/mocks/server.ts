import { setupServer } from 'msw/node';
import { archiveHandlers } from '../archieve/__tests__/handlers';

export const server = setupServer(...archiveHandlers);
