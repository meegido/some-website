import { render, screen } from '@testing-library/react';
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

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);

    images.forEach((image, index) => {
      expect(image).toHaveAttribute('src', images[index].src);
      expect(image).toHaveAttribute('alt', `Image ${[index + 1]}`);
    });
  });

  it('renders a grid with unique imaages', () => {
    render(<AiGallery />);

    const images = screen.getAllByRole('img');
    const imageSources = images.map((img) => img.getAttribute('src'));

    const uniqueImageSources = new Set(imageSources);

    expect(uniqueImageSources.size).toBe(imageSources.length);
  });
});
