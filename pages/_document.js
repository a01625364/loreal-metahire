// Package Imports
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Component Imports

// Config Imports

// Custom Hook Imports

// Helper Imports

// Icon Imports

// Exported Component

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es'>
        <Head />
        <body className='bg-gray-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
