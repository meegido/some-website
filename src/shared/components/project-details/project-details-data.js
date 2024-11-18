const projects = [
  {
    id: 'product-page',
    title: 'E-commerce product page',
    description: `A learning exercise about building a e-commerce product page fully functional and get it looking as close to the design possible, from`,
    challengeLink: 'https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6',
    challengeSiteName: 'Frontend Mentor',
    learnings: ['React Lifecycle', 'State management', 'Conditional rendering', 'Custom hooks'],
    skills: ['HTML', 'CSS', 'JS', 'React', 'Testing'],
    requirements: [
      'Open a lightbox gallery by clicking on the large product image.',
      'Switch the large product image by clicking on the small thumbnail images.',
      'Add items to the cart.',
      'View the cart and remove items from it',
      `View the optimal layout for the site depending on their device's screen size`,
      'See hover states for all interactive elements on the page',
      'Change minus icon in cart to trash icon when items quantity is one (added by me).',
    ],
    repositoryLink: 'https://github.com/meegido/some-website/tree/main/src/pages/product-page',
  },
  {
    id: 'tip-calculator',
    title: 'Split your bill 💸',
    description: `A learning exercise to start remembering React, from`,
    challengeLink: 'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
    challengeSiteName: 'Frontend Mentor',
    learnings: [
      'CSS Modules',
      'Memoization',
      'State management',
      'Conditional rendering',
      'Custom hooks',
      'Componetization',
    ],
    skills: ['HTML', 'CSS', 'JS', 'React', 'Testing'],
    requirements: [
      'Calculate the correct tip and total cost of the bill per person.',
      `View the optimal layout for the app depending on their device's screen size.`,
      `See hover states for all interactive elements on the page.`,
    ],
    repositoryLink: 'https://github.com/meegido/some-website/tree/main/src/pages/tip-calculator',
  },
  {
    id: 'quotes',
    title: 'Quotes',
    description: `Sometimes, when I read an article, I want to save only a chunk of it. I want to remember the related concepts and people that are not present in this specific chunk of text. This is a learning exercise to practice forms in React. `,
    challengeLink: '',
    challengeSiteName: '',
    learnings: ['Forms', 'Deriving state', 'Componetization', 'Custom hooks'],
    skills: ['HTML', 'CSS', 'JS', 'React', 'TDD'],
    requirements: [
      `The form to add a new quote is open when the user clicks the New Quote button.`,
      `The quote shouldn't be add if the required fields are empty.`,
      `Show an error when user submit the quote with the required fields empty.`,
      `Display the tags as hashtags.`,
      `If a no required input is empty, remove the title inside the quote's card`,
      `TO DO: dismiss the modal with escape key (custom hook).`,
      `TO DO: limit the characters in the quote's textarea.`,
    ],
    repositoryLink: 'https://github.com/meegido/some-website/tree/main/src/pages/quotes',
  },
];

export default projects;