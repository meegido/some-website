import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import AiGallery from './ai-gallery';

describe('AI Gallery', () => {
  it('renders a grid with images', async () => {
    render(
      <div role="grid">
        <div className="row">
          <div className="cell">
            <img src="http://localhost:3000/image1.jpg" alt="Image 1" />
          </div>
          <div className="cell">
            <img src="http://localhost:3000/image2.jpg" alt="Image 2" />
          </div>
        </div>
        <div className="row">
          <div className="cell">
            {' '}
            <img src="http://localhost:3000/image3.jpg" alt="Image 3" />
          </div>
          <div className="cell">
            <img src="http://localhost:3000/image4.jpg" alt="Image 4" />
          </div>
        </div>
      </div>
    );

    const images = screen.getAllByRole('img') as HTMLImageElement[];
    expect(images).toHaveLength(4);

    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', images[index].src);
      expect(image).toHaveAttribute('alt', `Image ${[index + 1]}`);
    });
  });

  it('renders a grid with unique images', () => {
    render(<AiGallery />);

    const images = screen.getAllByRole('img');
    const imageSources = images.map((img) => img.getAttribute('src'));

    const uniqueImageSources = new Set(imageSources);

    expect(uniqueImageSources.size).toBe(imageSources.length);
  });

  it('allows user to filter images by its content characteristics', () => {
    render(<AiGallery />);
    const AI_IMAGES = [
      {
        url: new URL('../../assets/images/ai-images/estatues-2.png', import.meta.url).href,
        tags: ['statue', 'buildings', 'clouds'],
      },
      {
        url: new URL('../../assets/images/ai-images/elephant-2.png', import.meta.url).href,
        tags: ['elephant'],
      },
    ];
    const selectElement = screen.getByLabelText(/Filter images by/);
    // const selectElement = screen.getByRole('combobox', { name: /Filter by/i });

    expect(AI_IMAGES).toHaveLength(2);
    expect(selectElement).toHaveDisplayValue(/Choose/);
  });

  it('shows results related with the user select an option', () => {
    render(<AiGallery />);
    const AI_IMAGES = [
      {
        url: new URL('../../assets/images/ai-images/estatues-2.png', import.meta.url).href,
        tags: ['statue', 'buildings', 'clouds'],
      },
      {
        url: new URL('../../assets/images/ai-images/elephant-2.png', import.meta.url).href,
        tags: ['elephant', 'clouds'],
      },
    ];

    const tags = AI_IMAGES.flatMap((images) => images.tags);
    const options = Array.from(new Set(tags));

    const urls = AI_IMAGES.flatMap((image) => image.url);

    expect(options).toHaveLength(4);
    expect(urls).toHaveLength(2);

    const defaultOption = screen.getByRole('option', {
      name: /Choose and option/i,
    }) as HTMLSelectElement;

    expect(defaultOption.value).toBe('');

    const selectElement = screen.getByRole('combobox');
    const selectedOption = screen.getByRole('option', { name: 'elephant' }) as HTMLSelectElement;
    userEvent.selectOptions(selectElement, selectedOption);

    expect(selectedOption.value).toBe('elephant');

    const results = AI_IMAGES.filter((image) => image.tags.includes(selectedOption.value)).map(
      (image) => image.url
    );

    expect(results).toHaveLength(1);
  });
});
