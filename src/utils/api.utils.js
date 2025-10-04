"use server";

const apiCall = async () => {
  const url = `${process.env.NEXT_PUBLIC_JSON_URL}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({})); // Gracefully handle non-JSON error responses
    throw new Error(
      `API call failed with status ${response.status}: ${
        errorData.message || response.statusText
      }`,
    );
  }

  if (response.status === 204) {
    return { data: null };
  }

  return response.json();
};

export default apiCall;
