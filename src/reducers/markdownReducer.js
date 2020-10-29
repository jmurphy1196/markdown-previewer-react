import { PARSE_HTML_MARKDOWN } from '../actions/types';

const placeholder = `# a header

## a sub header

[a link](https://www.google.com)

\`inline code\`

\`\`\`
a 
code 
block
\`\`\`

* a list item

> a blockquote

![an image](https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/ikqra03zdnggljdu5vv0)

**bolded text**`;

const initialState = {
  markdown: placeholder,
  html: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PARSE_HTML_MARKDOWN:
      return {
        ...state,
       html: action.html
      };
    default:
      return state;
  }
}