# Plagiarism & AI Detection Tool

A web application that checks text for plagiarism and AI-generated content.

## Features

- Clean, responsive UI built with Next.js and Tailwind CSS
- Plagiarism detection
- AI content detection
- Real-time analysis with loading states
- Toast notifications for user feedback

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Using Real APIs

The current implementation uses simulated responses for demonstration purposes. To use real APIs, you can integrate with the following free services:

### Plagiarism Detection APIs

1. **SmallSEOTools API**
   - Sign up at [SmallSEOTools](https://smallseotools.com/api/)
   - Get your API key
   - Replace the simulated plagiarism detection with actual API calls

2. **PlagiarismCheck.org API**
   - Register at [PlagiarismCheck.org](https://plagiarismcheck.org/api)
   - Obtain your API key
   - Integrate their API for plagiarism detection

3. **Duplichecker API**
   - Create an account at [Duplichecker](https://www.duplichecker.com/api.php)
   - Get your API credentials
   - Use their API for plagiarism checking

### AI Detection APIs

1. **Hugging Face API**
   - Sign up at [Hugging Face](https://huggingface.co/)
   - Get your API token
   - Use their text classification models for AI detection

2. **OpenAI API**
   - Register at [OpenAI](https://platform.openai.com/)
   - Obtain your API key
   - Use their models to detect AI-generated content

3. **Sapling API**
   - Create an account at [Sapling](https://sapling.ai/)
   - Get your API key
   - Integrate their AI detection API

## Example API Integration

Here's an example of how to integrate a real API:

```javascript
// For plagiarism detection
const plagiarismResponse = await axios.post('https://api.example.com/plagiarism', {
  text: text,
  options: {
    // API-specific options
  }
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

// For AI detection
const aiResponse = await axios.post('https://api.example.com/ai-detection', {
  text: text
}, {
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Key': 'YOUR_API_KEY'
  }
});

setResults({
  plagiarism: plagiarismResponse.data.score * 100,
  aiProbability: aiResponse.data.probability * 100
});
```

## License

MIT 

const PLAGIARISM_API_KEY = 'YOUR_PLAGIARISM_API_KEY';
const GPTZERO_API_KEY = 'YOUR_GPTZERO_API_KEY'; 