import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Quotes from './quotes';

describe('Quotes page', () => {
  it('shows a list of quotes when quotes are provided', () => {
    const quotes = [
      {
        author: 'Carlos Ares',
        link: 'https://www.linkedin.com/posts/carlosaresmartin_futurodeltrabajo-economaeda-4daysweek-activity-7255447085410402305-kkYr',
        concepts: ['ProsperidadCompartida', 'ÉliteExtractiva'],
        fullText:
          "[...] el nefasto lema de Milton: 'El único objetivo de cualquier empresa es maximizar el beneficio para sus accionistas', y comenzar a trabajar para que las innovaciones tecnológicas tengan como propósito el de contribuír a la mejora social  y los intereses comunes para generar 'Prosperidad Compartida', como explica el Nobel de economía, Daron Acemoglu, en lugar de generar riqueza únicamente para una 'Élite extractiva' como ha suucedido durante toda la historia de la humanidad ",
        references: ['Milton Friedman', 'Daron Acemoglu'],
        tags: ['4daysweek', 'productivity'],
      },
      {
        author: 'Allen Holub',
        link: 'https://www.linkedin.com/posts/allenholub_i-dont-believe-in-junior-programmers-activity-7254571142340911105-AxuX?utm_source=share&utm_medium=member_desktop',
        concepts: ['Willingness', 'Effectiveness'],
        fullText:
          "I don't believe in 'junior' programmers. It's a pejorative, a way of asserting one's own superiority. I do believe in 'effective' and 'innefective' programmers, and that has nothing to do with age or how long you've been programming. [...] I also usually see a correlation between effectiveneess and willingness to admit fault and get help. [...] The good news is that it's never too late to start learning.",
        references: [],
        tags: ['productivity', 'developers'],
      },
      {
        author: 'Stephen Moore',
        link: 'https://www.trend-mill.com/p/big-tech-wants-to-rot-your-brain?r=641mr&triedRedirect=true',
        concepts: ['IntelectualPoison'],
        fullText:
          "Put another way, we stopped thinking about what we wanted to see and started to see what we were given to see. There was no longer a need for agency, exploration, or thought. [...] It's been wildly successful, too, in the sense that it has increased the time we spend on platforms and devices. [...] We’ve seen with devices and platforms that once they’re intertwined with society, it’s hard to separate from them. It’s not a huge leap to suggest that if enough AI agents or programs start to do tasks for us or think for us, bit by bit, more and more, they’ll integrate with our lives in a way that we can’t detach from.",
        references: ['Adam Singer'],
        tags: ['bigTech', 'IA', 'internetEvolution'],
      },
    ];
    render(<Quotes />);

    quotes.forEach((quote) => {
      screen.debug();
      expect(screen.getByText(quote.author)).toHaveTextContent(quote.author);
    });
  });

  it('shows a message when quotes are empty', () => {
    const quotes = [];

    const emptyQuotesMessage = 'There are no quotes to show';

    if (quotes.length === 0) {
      return <h2>{emptyQuotesMessage}</h2>;
    }

    expect(screen.getByText(emptyQuotesMessage)).toBeInTheDocument();
  });
});
