import { setupWorker } from 'msw/browser';
import { archiveHandlers } from '../projects/archieve/__tests__/handlers';

export const worker = setupWorker(...archiveHandlers);
