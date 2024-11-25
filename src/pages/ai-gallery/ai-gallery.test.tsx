import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import AiGallery from './ai-gallery';
import { ImagesInfo, ImagesRepository } from './ai-images.ts';

class FakeImageRepository implements ImagesRepository {
  retrieve(): Promise<ImagesInfo[]> {
    return Promise.resolve([
      {
        id: 'image-1',
        url: new URL('../../assets/images/ai-images/estatues-2.png', import.meta.url).href,
        tags: ['statue', 'buildings', 'clouds'],
      },
      {
        id: 'image-2',
        url: new URL('../../assets/images/ai-images/elephant-2.png', import.meta.url).href,
        tags: ['elephant', 'clouds'],
      },
    ]);
  }
}

describe('AI Gallery', () => {
  let imagesRepository: ImagesRepository;

  beforeAll(() => {
    imagesRepository = new FakeImageRepository();
  });

  beforeEach(() => {
    render(<AiGallery imagesRepository={imagesRepository} />);
  });

  it('renders a grid with images', async () => {
    const images: HTMLImageElement[] = await screen.findAllByRole('img');

    expect(images.length).toBe(2);
    expect(images[0].src).toEqual(
      'http://localhost:3000/src/assets/images/ai-images/estatues-2.png'
    );
    expect(images[1].src).toEqual(
      'http://localhost:3000/src/assets/images/ai-images/elephant-2.png'
    );
  });

  it('render the images with the option selected', async () => {
    const defaultOption: HTMLOptionElement = await screen.findByRole('option', {
      name: /Choose and option/i,
    });

    expect(defaultOption.value).toBe('');

    const selectElement: HTMLSelectElement = await screen.findByRole('combobox');
    const selectedOption: HTMLOptionElement = await screen.findByRole('option', {
      name: 'elephant',
    });
    await userEvent.selectOptions(selectElement, selectedOption);

    expect(selectedOption.value).toBe('elephant');

    const images: HTMLImageElement[] = await screen.findAllByRole('img');
    expect(images.length).toEqual(1);
    expect(images[0].src).toEqual(
      'http://localhost:3000/src/assets/images/ai-images/elephant-2.png'
    );
  });
});
