export async function submitContactForm(data: Record<string, any>) {
  // In a real application, this would make an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', data);
      resolve({ success: true });
    }, 1000);
  });
}

export async function subscribeNewsletter(email: string) {
  // In a real application, this would make an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Newsletter subscription:', email);
      resolve({ success: true });
    }, 1000);
  });
}

export async function requestQuote(data: Record<string, any>) {
  // In a real application, this would make an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Quote requested:', data);
      resolve({ success: true });
    }, 1000);
  });
}