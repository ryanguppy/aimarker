# Markwise - GCSE Question Marker

A comprehensive web application for GCSE students to get accurate mark schemes and feedback on their exam responses.

## Features

- Support for GCSE AQA English Literature, English Language, and History
- Topic selection for specific subjects
- Question submission and response analysis
- Upload handwritten responses
- Custom mark scheme upload option
- Detailed feedback with grade boundaries and mark scheme analysis
- Visual highlighting system for strengths and areas for improvement

## Technologies Used

- React
- TypeScript
- TailwindCSS
- React Router
- Hugging Face for AI analysis

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Deployment

This project is configured for deployment on Netlify.

### Environment Variables

To deploy with AI functionality, you'll need to set up the following environment variable in your Netlify dashboard:

- `VITE_HUGGINGFACE_API_TOKEN`: Your Hugging Face API token

## License

MIT