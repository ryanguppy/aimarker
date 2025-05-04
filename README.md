# GCSE AQA Mark Scheme Generator

A Next.js 14 application for generating mark schemes for GCSE AQA exams in English Literature, English Language, and History.

## Features

- Dark theme with modern UI
- Support for multiple subjects and topics
- Error handling and user feedback
- Responsive design
- Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gcse-aqa-mark-scheme.git
cd gcse-aqa-mark-scheme
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Error Handling

The application includes comprehensive error handling:

- Form validation for required fields
- API error handling with user-friendly messages
- Loading states for better user experience
- Error boundaries to prevent application crashes

## Project Structure

```
app/
├── api/
│   └── mark-scheme/
│       └── route.js
├── components/
│   ├── SubjectSelect.jsx
│   ├── TopicSelect.jsx
│   └── MarkScheme.jsx
├── globals.css
├── layout.js
└── page.jsx
```

## Technologies Used

- Next.js 14
- React
- Tailwind CSS
- CSS Animations
- Next.js API Routes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 